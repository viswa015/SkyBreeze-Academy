import React, { useEffect, useRef } from 'react';

interface ParticleTextProps {
  text: string;
  className?: string;
}

class Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  color: { r: number; g: number; b: number };
  size: number;
  vx: number;
  vy: number;
  alpha: number;
  isDissolving: boolean;
  dissolveSpeed: number;
  angle: number;
  curveSpeed: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.originX = x;
    this.originY = y;
    // Start with white, transition to cyan/teal as they dissolve
    this.color = { r: 255, g: 255, b: 255 };
    this.size = Math.random() * 2 + 1;
    this.vx = 0;
    this.vy = 0;
    this.alpha = 1;
    this.isDissolving = false;
    this.dissolveSpeed = Math.random() * 0.015 + 0.005;
    this.angle = Math.random() * Math.PI * 2;
    this.curveSpeed = Math.random() * 0.05 - 0.025;
  }

  update(mouseX: number, mouseY: number) {
    // Mouse hover push effect
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const force = (100 - distance) / 100; // Force field radius of 100px

    if (distance < 100) {
      const angle = Math.atan2(dy, dx);
      // Push particles away from mouse
      this.x -= Math.cos(angle) * force * 4;
      this.y -= Math.sin(angle) * force * 4;
    }

    // Randomly trigger dissolution for particles (especially towards the left)
    if (!this.isDissolving) {
      // Left side particles dissolve more frequently to mimic the upload image
      const dissolveChance = 0.0003 + (1 - this.originX / 800) * 0.0006;
      if (Math.random() < dissolveChance) {
        this.isDissolving = true;
        // Blow up and to the left (matching the user's upload image)
        this.vx = -(Math.random() * 1.5 + 0.5);
        this.vy = -(Math.random() * 1.5 + 0.5);
      }
    }

    if (this.isDissolving) {
      // Move particle in flow direction
      this.x += this.vx;
      this.y += this.vy;
      
      // Add slight wavy motion
      this.angle += this.curveSpeed;
      this.x += Math.sin(this.angle) * 0.2;

      // Fade out
      this.alpha -= this.dissolveSpeed;

      // Color transition from white to vibrant cyan (0, 238, 255)
      const t = 1 - this.alpha;
      this.color.r = Math.floor(255 * (1 - t) + 6 * t);
      this.color.g = Math.floor(255 * (1 - t) + 182 * t);
      this.color.b = Math.floor(255 * (1 - t) + 212 * t);

      // Reset when faded out
      if (this.alpha <= 0) {
        this.x = this.originX;
        this.y = this.originY;
        this.alpha = 1;
        this.isDissolving = false;
        this.color = { r: 255, g: 255, b: 255 };
        this.vx = 0;
        this.vy = 0;
      }
    } else {
      // Return to original position
      const dxOrigin = this.originX - this.x;
      const dyOrigin = this.originY - this.y;
      this.x += dxOrigin * 0.1;
      this.y += dyOrigin * 0.1;
      this.alpha = 1;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();

    // Draw extra glowing trail for dissolving particles
    if (this.isDissolving && this.alpha > 0.3) {
      ctx.fillStyle = `rgba(6, 182, 212, ${this.alpha * 0.3})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

export const ParticleText: React.FC<ParticleTextProps> = ({ text, className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const initParticles = () => {
      const container = containerRef.current;
      if (!container) return;

      const width = container.clientWidth;
      // Height adapted dynamically for mobile wrapping
      const isMobile = width < 640;
      const height = isMobile ? 120 : 100;

      canvas.width = width;
      canvas.height = height;

      ctx.clearRect(0, 0, width, height);

      // Draw text to offscreen canvas or hidden buffer to read pixels
      ctx.fillStyle = '#ffffff';
      
      let fontSize = 48;
      if (width < 400) fontSize = 20;
      else if (width < 640) fontSize = 26;
      else if (width < 1024) fontSize = 38;

      ctx.font = `900 ${fontSize}px Outfit, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Draw on lines if needed
      ctx.fillText(text, width / 2, height / 2);

      // Read pixel values
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;
      particles = [];

      // Grid spacing (adjust to change particle density and performance)
      const step = isMobile ? 3 : 4;

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];

          if (alpha > 128) {
            particles.push(new Particle(x, y));
          }
        }
      }

      ctx.clearRect(0, 0, width, height);
    };

    initParticles();

    // Mouse handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Resize handler
    let resizeTimeout: any;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        initParticles();
      }, 250);
    };

    window.addEventListener('resize', handleResize);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update(mx, my);
        p.draw(ctx);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [text]);

  return (
    <div ref={containerRef} className={`w-full overflow-visible relative ${className}`}>
      {/* Invisible text underneath for SEO and screen readers */}
      <h1 className="sr-only">{text}</h1>
      <canvas ref={canvasRef} className="block w-full h-auto cursor-default z-20 relative overflow-visible" />
    </div>
  );
};
