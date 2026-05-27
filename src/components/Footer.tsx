import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Award, ExternalLink, ChevronRight } from 'lucide-react';
import logoTransparent from '../assets/logotransparent.png';

// Reusable Shader Background Hook for Footer
const useFooterShaderBackground = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(undefined);
  const rendererRef = useRef<WebGLRenderer | null>(null);
  const pointersRef = useRef<PointerHandler | null>(null);

  // WebGL Renderer class
  class WebGLRenderer {
    private canvas: HTMLCanvasElement;
    private gl: WebGL2RenderingContext;
    private program: WebGLProgram | null = null;
    private vs: WebGLShader | null = null;
    private fs: WebGLShader | null = null;
    private buffer: WebGLBuffer | null = null;
    private scale: number;
    private shaderSource: string;
    private mouseMove = [0, 0];
    private mouseCoords = [0, 0];
    private pointerCoords = [0, 0];
    private nbrOfPointers = 0;

    private vertexSrc = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

    private vertices = [-1, 1, -1, -1, 1, 1, 1, -1];

    constructor(canvas: HTMLCanvasElement, scale: number) {
      this.canvas = canvas;
      this.scale = scale;
      this.gl = canvas.getContext('webgl2')!;
      this.gl.viewport(0, 0, canvas.width * this.scale, canvas.height * this.scale);
      this.shaderSource = footerShaderSource;
    }

    updateShader(source: string) {
      this.reset();
      this.shaderSource = source;
      this.setup();
      this.init();
    }

    updateMove(deltas: number[]) {
      this.mouseMove = deltas;
    }

    updateMouse(coords: number[]) {
      this.mouseCoords = coords;
    }

    updatePointerCoords(coords: number[]) {
      this.pointerCoords = coords;
    }

    updatePointerCount(nbr: number) {
      this.nbrOfPointers = nbr;
    }

    updateScale(scale: number) {
      this.scale = scale;
      this.gl.viewport(0, 0, this.canvas.width * this.scale, this.canvas.height * this.scale);
    }

    compile(shader: WebGLShader, source: string) {
      const gl = this.gl;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const error = gl.getShaderInfoLog(shader);
        console.error('Footer Shader compilation error:', error);
      }
    }

    test(source: string) {
      let result = null;
      const gl = this.gl;
      const shader = gl.createShader(gl.FRAGMENT_SHADER)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        result = gl.getShaderInfoLog(shader);
      }
      gl.deleteShader(shader);
      return result;
    }

    reset() {
      const gl = this.gl;
      if (this.program && !gl.getProgramParameter(this.program, gl.DELETE_STATUS)) {
        if (this.vs) {
          gl.detachShader(this.program, this.vs);
          gl.deleteShader(this.vs);
        }
        if (this.fs) {
          gl.detachShader(this.program, this.fs);
          gl.deleteShader(this.fs);
        }
        gl.deleteProgram(this.program);
      }
    }

    setup() {
      const gl = this.gl;
      this.vs = gl.createShader(gl.VERTEX_SHADER)!;
      this.fs = gl.createShader(gl.FRAGMENT_SHADER)!;
      this.compile(this.vs, this.vertexSrc);
      this.compile(this.fs, this.shaderSource);
      this.program = gl.createProgram()!;
      gl.attachShader(this.program, this.vs);
      gl.attachShader(this.program, this.fs);
      gl.linkProgram(this.program);

      if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(this.program));
      }
    }

    init() {
      const gl = this.gl;
      const program = this.program!;

      this.buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);

      const position = gl.getAttribLocation(program, 'position');
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

      (program as any).resolution = gl.getUniformLocation(program, 'resolution');
      (program as any).time = gl.getUniformLocation(program, 'time');
      (program as any).move = gl.getUniformLocation(program, 'move');
      (program as any).touch = gl.getUniformLocation(program, 'touch');
      (program as any).pointerCount = gl.getUniformLocation(program, 'pointerCount');
      (program as any).pointers = gl.getUniformLocation(program, 'pointers');
    }

    render(now = 0) {
      const gl = this.gl;
      const program = this.program;

      if (!program || gl.getProgramParameter(program, gl.DELETE_STATUS)) return;

      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);

      gl.uniform2f((program as any).resolution, this.canvas.width, this.canvas.height);
      gl.uniform1f((program as any).time, now * 1e-3);
      gl.uniform2f((program as any).move, this.mouseMove[0], this.mouseMove[1]);
      gl.uniform2f((program as any).touch, this.mouseCoords[0], this.mouseCoords[1]);
      gl.uniform1i((program as any).pointerCount, this.nbrOfPointers);
      gl.uniform2fv((program as any).pointers, this.pointerCoords);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
  }

  // Pointer Handler class
  class PointerHandler {
    private scale: number;
    private active = false;
    private pointers = new Map<number, number[]>();
    private lastCoords = [0, 0];
    private moves = [0, 0];

    constructor(element: HTMLElement, canvas: HTMLCanvasElement, scale: number) {
      this.scale = scale;

      const map = (canvasEl: HTMLCanvasElement, scaleVal: number, x: number, y: number) => {
        const rect = canvasEl.getBoundingClientRect();
        return [(x - rect.left) * scaleVal, canvasEl.height - (y - rect.top) * scaleVal];
      };

      element.addEventListener('pointerdown', (e) => {
        this.active = true;
        this.pointers.set(e.pointerId, map(canvas, this.getScale(), e.clientX, e.clientY));
      });

      element.addEventListener('pointerup', (e) => {
        if (this.count === 1) {
          this.lastCoords = this.first;
        }
        this.pointers.delete(e.pointerId);
        this.active = this.pointers.size > 0;
      });

      element.addEventListener('pointerleave', (e) => {
        if (this.count === 1) {
          this.lastCoords = this.first;
        }
        this.pointers.delete(e.pointerId);
        this.active = this.pointers.size > 0;
      });

      element.addEventListener('pointermove', (e) => {
        if (!this.active) return;
        this.lastCoords = [e.clientX, e.clientY];
        this.pointers.set(e.pointerId, map(canvas, this.getScale(), e.clientX, e.clientY));
        this.moves = [this.moves[0] + e.movementX, this.moves[1] + e.movementY];
      });
    }

    getScale() {
      return this.scale;
    }

    updateScale(scaleVal: number) {
      this.scale = scaleVal;
    }

    get count() {
      return this.pointers.size;
    }

    get move() {
      return this.moves;
    }

    get coords() {
      return this.pointers.size > 0
        ? Array.from(this.pointers.values()).flat()
        : [0, 0];
    }

    get first() {
      return this.pointers.values().next().value || this.lastCoords;
    }
  }

  const resize = () => {
    if (!canvasRef.current || !footerRef.current) return;

    const canvas = canvasRef.current;
    const footer = footerRef.current;
    const rect = footer.getBoundingClientRect();
    const dpr = Math.max(1, 0.5 * window.devicePixelRatio);

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    if (rendererRef.current) {
      rendererRef.current.updateScale(dpr);
    }
  };

  // Track last frame time for 30fps throttle
  const lastFrameTimeRef = useRef<number>(0);
  const TARGET_FPS = 30;
  const FRAME_INTERVAL = 1000 / TARGET_FPS;

  const loop = (now: number) => {
    if (!rendererRef.current || !pointersRef.current) return;

    // Throttle to ~30fps for smooth, low-lag performance
    const elapsed = now - lastFrameTimeRef.current;
    if (elapsed >= FRAME_INTERVAL) {
      lastFrameTimeRef.current = now - (elapsed % FRAME_INTERVAL);
      rendererRef.current.updateMouse(pointersRef.current.first);
      rendererRef.current.updatePointerCount(pointersRef.current.count);
      rendererRef.current.updatePointerCoords(pointersRef.current.coords);
      rendererRef.current.updateMove(pointersRef.current.move);
      rendererRef.current.render(now);
    }
    animationFrameRef.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    if (!canvasRef.current || !footerRef.current) return;

    const canvas = canvasRef.current;
    const footer = footerRef.current;
    const dpr = Math.max(1, 0.5 * window.devicePixelRatio);

    rendererRef.current = new WebGLRenderer(canvas, dpr);
    pointersRef.current = new PointerHandler(footer, canvas, dpr);

    rendererRef.current.setup();
    rendererRef.current.init();

    resize();

    if (rendererRef.current.test(footerShaderSource) === null) {
      rendererRef.current.updateShader(footerShaderSource);
    }

    loop(0);

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameRef.current !== undefined) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.reset();
      }
    };
  }, []);

  return { footerRef, canvasRef };
};

const footerShaderSource = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
uniform vec2 move;
uniform vec2 touch;
uniform int pointerCount;
uniform float pointers[20];

#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)

float rnd(vec2 p) {
  p=fract(p*vec2(12.9898,78.233));
  p+=dot(p,p+34.56);
  return fract(p.x*p.y);
}

float noise(in vec2 p) {
  vec2 i=floor(p), f=fract(p), u=f*f*(3.-2.*f);
  float
  a=rnd(i),
  b=rnd(i+vec2(1,0)),
  c=rnd(i+vec2(0,1)),
  d=rnd(i+1.);
  return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
}

float fbm(vec2 p) {
  float t=.0, a=1.; mat2 m=mat2(1.,-.5,.2,1.2);
  for (int i=0; i<5; i++) {
    t+=a*noise(p);
    p*=2.*m;
    a*=.5;
  }
  return t;
}

float clouds(vec2 p) {
	float d=1., t=.0;
	for (float i=.0; i<3.; i++) {
		float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);
		t=mix(t,d,a);
		d=a;
		p*=2./(i+1.);
	}
	return t;
}

void main(void) {
	vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2,1);
	vec3 col=vec3(0);
	float bg=clouds(vec2(st.x+T*.15,-st.y));
	uv*=1.-.25*(sin(T*.08)*.5+.5);
	for (float i=1.; i<7.; i++) {
		uv+=.08*cos(i*vec2(.1+.01*i, .8)+i*i+T*.15+.08*uv.x);
		vec2 p=uv;
		float d=length(p);
		col+=.0008/d*(cos(sin(i)*vec3(1.2, 1.8, 2.4))+1.);
		float b=noise(i+p+bg*1.5);
		col+=.0012*b/length(max(p,vec2(b*p.x*.02,p.y)));
		// Cooling breeze palette: soft cyan/blue, very dim for text legibility
		col=mix(col,vec3(bg*.015, bg*.1, bg*.25),d);
	}
	O=vec4(col,1);
}`;

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { footerRef, canvasRef } = useFooterShaderBackground();

  return (
    <footer ref={footerRef} className="bg-slate-900 text-slate-350 border-t border-slate-800 relative overflow-hidden">
      {/* Premium WebGL cooling breeze shader — subtle dark background layer */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-30">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand Info & Affiliation Badge */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={logoTransparent}
                alt="SkyBreeze Academy Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="font-heading text-lg font-bold tracking-tight text-white">
                SKYBREEZE ACADEMY
              </span>
            </div>
            <p className="text-sm text-slate-200 max-w-sm leading-relaxed">
              Premier HVAC & Air Conditioning Training Institute under the parentage of <strong className="text-white">SkyBreeze AC Solutions</strong>. Delivering robust, practical-oriented vocational technical skills.
            </p>
            <div className="inline-flex items-center space-x-2.5 bg-slate-800/80 border border-slate-700/80 rounded-lg p-3">
              <Award className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <div className="text-xs">
                <span className="block font-bold text-amber-400 uppercase tracking-wider">TNSCVT Affiliated</span>
                <span className="block text-slate-200">Govt of Tamil Nadu Vocational Certificate</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Buttons */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/programs", label: "Programs & Courses" },
                { to: "/about", label: "About Academy" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact & Admissions" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) =>
                      `flex items-center justify-between gap-2 px-4 py-2.5 rounded-lg border font-medium transition-all duration-300 group
                      ${isActive
                        ? "bg-amber-400/20 border-amber-400 text-amber-300 shadow-md shadow-amber-500/10"
                        : "bg-slate-800/60 border-slate-700 text-slate-200 hover:bg-sky-500/15 hover:border-sky-400/60 hover:text-white hover:shadow-md hover:shadow-sky-500/10"
                      }`
                    }
                  >
                    <span>{label}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Support */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3 text-slate-200">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  No.22, 4th Cross, Ramalinga Colony, KK Pudur, Coimbatore - 641038.
                </span>
              </li>
              <li className="flex items-start space-x-3 text-slate-200">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:+919486112661" className="hover:text-white transition-colors duration-300">
                    +91 94861 12661
                  </a>
                  <a href="tel:+919384177714" className="hover:text-white transition-colors duration-300">
                    +91 93841 77714
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3 text-slate-200">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="mailto:info@skybreezeacsolutions.in" className="hover:text-white transition-colors duration-300">
                  info@skybreezeacsolutions.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between text-xs text-slate-300">
          <p className="text-center md:text-left leading-relaxed">
            &copy; {currentYear} SkyBreeze Academy. All Rights Reserved. Affiliated with Tamil Nadu State Council for Vocational Training.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a
              href="https://skybreezeacsolutions.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300 flex items-center space-x-1"
            >
              <span>SkyBreeze AC Solutions</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
