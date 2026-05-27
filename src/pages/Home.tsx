import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GraduationCap,
  Briefcase,
  Users,
  Flame,
  Award,
  Wrench,
  ChevronRight,
  Sparkles,
  Clock,
  CheckCircle2,
  X
} from 'lucide-react';
import { PulseBeams } from '@/components/ui/pulse-beams';
import hvacHero from '@/assets/hvac_hero.png';
import pamphletImg from '@/assets/sky2/pamplet.jpeg';
import { motion, AnimatePresence } from 'framer-motion';

const beams = [
  {
    path: "M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5",
    gradientConfig: {
      initial: {
        x1: "0%",
        x2: "0%",
        y1: "80%",
        y2: "100%",
      },
      animate: {
        x1: ["0%", "0%", "200%"],
        x2: ["0%", "0%", "180%"],
        y1: ["80%", "0%", "0%"],
        y2: ["100%", "20%", "20%"],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 6.5, cy: 398.5, r: 6 },
      { cx: 269, cy: 220.5, r: 6 }
    ]
  },
  {
    path: "M568 200H841C846.523 200 851 195.523 851 190V40",
    gradientConfig: {
      initial: {
        x1: "0%",
        x2: "0%",
        y1: "80%",
        y2: "100%",
      },
      animate: {
        x1: ["20%", "100%", "100%"],
        x2: ["0%", "90%", "90%"],
        y1: ["80%", "80%", "-20%"],
        y2: ["100%", "100%", "0%"],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 851, cy: 40, r: 6 },
      { cx: 568, cy: 200, r: 6 }
    ]
  },
  {
    path: "M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5",
    gradientConfig: {
      initial: {
        x1: "0%",
        x2: "0%",
        y1: "80%",
        y2: "100%",
      },
      animate: {
        x1: ["20%", "100%", "100%"],
        x2: ["0%", "90%", "90%"],
        y1: ["80%", "80%", "-20%"],
        y2: ["100%", "100%", "0%"],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 142, cy: 426.5, r: 6 },
      { cx: 425.5, cy: 274, r: 6 }
    ]
  },
  {
    path: "M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427",
    gradientConfig: {
      initial: {
        x1: "40%",
        x2: "50%",
        y1: "160%",
        y2: "180%",
      },
      animate: {
        x1: "0%",
        x2: "10%",
        y1: "-40%",
        y2: "-20%",
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 770, cy: 427, r: 6 },
      { cx: 493, cy: 274, r: 6 }
    ]
  },
  {
    path: "M380 168V17C380 11.4772 384.477 7 390 7H414",
    gradientConfig: {
      initial: {
        x1: "-40%",
        x2: "-10%",
        y1: "0%",
        y2: "20%",
      },
      animate: {
        x1: ["40%", "0%", "0%"],
        x2: ["10%", "0%", "0%"],
        y1: ["0%", "0%", "180%"],
        y2: ["20%", "20%", "200%"],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 414, cy: 7, r: 6 },
      { cx: 380, cy: 168, r: 6 }
    ]
  }
];

const gradientColors = {
  start: "#f59e0b",
  middle: "#ef4444",
  end: "#3b82f6"
};

const TypewriterHeader: React.FC = () => {
  const fullText1 = "BUILD A COOL CAREER WITH ";
  const fullText2 = "SKYBREEZE ACADEMY !";

  const [text1, setText1] = React.useState("");
  const [text2, setText2] = React.useState("");

  React.useEffect(() => {
    let isMounted = true;
    let index1 = 0;
    let index2 = 0;
    let interval1: any = null;
    let interval2: any = null;
    
    interval1 = setInterval(() => {
      if (!isMounted) return;
      if (index1 < fullText1.length) {
        const char = fullText1[index1];
        if (char !== undefined) {
          setText1((prev) => prev + char);
        }
        index1++;
      } else {
        clearInterval(interval1);
        interval1 = null;
        
        interval2 = setInterval(() => {
          if (!isMounted) return;
          if (index2 < fullText2.length) {
            const char = fullText2[index2];
            if (char !== undefined) {
              setText2((prev) => prev + char);
            }
            index2++;
          } else {
            clearInterval(interval2);
            interval2 = null;
          }
        }, 50);
      }
    }, 40);

    return () => {
      isMounted = false;
      if (interval1) clearInterval(interval1);
      if (interval2) clearInterval(interval2);
    };
  }, []);

  return (
    <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] text-white min-h-[96px] sm:min-h-[120px] lg:min-h-[110px] xl:min-h-[132px]">
      {text1}
      {text2 && (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
          {text2}
        </span>
      )}
      <span className="animate-pulse text-amber-400 ml-0.5 font-light">|</span>
    </h1>
  );
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
} as const;

const cardVariantsLeft = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  show: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 14
    }
  }
} as const;

const cardVariantsCenter = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 14
    }
  }
} as const;

const cardVariantsRight = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  show: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 14
    }
  }
} as const;

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showPromo, setShowPromo] = React.useState(false);

  React.useEffect(() => {
    // Show promo popup 800ms after landing
    const timer = setTimeout(() => {
      setShowPromo(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const highlights = [
    {
      icon: <GraduationCap className="w-8 h-8 text-amber-500" />,
      title: "Affordable Course Fees",
      desc: "High-quality vocational education priced dynamically with options for flexible payments & student concessions."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-amber-500" />,
      title: "International Job Opportunities",
      desc: "Extensive network with HVAC industries locally and globally in the Gulf, Singapore, and European regions."
    },
    {
      icon: <Users className="w-8 h-8 text-amber-500" />,
      title: "Experienced Trainers",
      desc: "Learn from practicing senior AC engineers and HVAC project managers with over 15+ years of industry experience."
    },
    {
      icon: <Flame className="w-8 h-8 text-amber-500" />,
      title: "100% Practical Training",
      desc: "Ditch boring slides. Focus directly on troubleshooting, repairing, installing, and servicing modern AC models."
    },
    {
      icon: <Award className="w-8 h-8 text-amber-500" />,
      title: "Industry-Recognised Certification",
      desc: "Earn government-approved TNSCVT vocational certificates that stand out to HR managers globally."
    },
    {
      icon: <Wrench className="w-8 h-8 text-amber-500" />,
      title: "Hands-on Tools & Lab Access",
      desc: "Train with modern tools, manifold gauges, recovery units, and dynamic HVAC simulation labs."
    }
  ];

  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white py-12 sm:py-14 px-4 sm:px-6 lg:px-8">
        {/* Subtle decorative background circles */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center flex flex-col items-center">

          {/* Dynamic PulseBeams Affiliation Badge with outer padding and AOS animation */}
          <motion.div
            className="w-full max-w-[858px] py-2 sm:py-3 flex items-center justify-center relative overflow-visible pointer-events-none"
            initial={{ opacity: 0, scale: 0.6, y: 70 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 9,
              mass: 0.6,
            }}
          >
            <div className="w-full h-[200px] sm:h-[220px] flex items-center justify-center relative overflow-visible pointer-events-none">
              <PulseBeams
                beams={beams}
                gradientColors={gradientColors}
                className="h-full bg-transparent overflow-visible pointer-events-auto"
                baseColor="rgba(148, 163, 184, 0.5)"
                accentColor="#f59e0b"
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 w-[280px] sm:w-[330px] z-40 h-[100px] sm:h-[112px] no-underline group relative shadow-2xl shadow-blue-950/40 rounded-2xl p-px text-xs font-semibold leading-6 text-white inline-block">
                  <span className="absolute inset-0 overflow-hidden rounded-2xl">
                    <span className="absolute inset-0 rounded-2xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(245,158,11,0.5)_0%,rgba(245,158,11,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>
                  <div className="relative flex flex-col justify-center w-[278px] sm:w-[328px] text-center space-y-1.5 h-[98px] sm:h-[110px] items-center z-10 rounded-2xl bg-slate-900/60 backdrop-blur-lg py-1 px-3 sm:px-4 ring-1 ring-white/10">
                    <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                    <span className="text-[11px] sm:text-xs font-bold text-white tracking-wide uppercase leading-tight">
                      Tamil Nadu Government Approved
                    </span>
                    <span className="text-[11px] font-extrabold text-amber-400 tracking-wider">
                      (TNSCVT) Center
                    </span>
                  </div>
                </div>
              </PulseBeams>
            </div>
          </motion.div>

          {/* Grid splitting text and dynamic HVAC simulator image on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full mt-8 text-center lg:text-left">

            {/* Left Column: Text & CTAs (strictly preserves existing texts and buttons) */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start space-y-6">
              {/* Headline */}
              <TypewriterHeader />

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Become a highly certified AC & HVAC Technician. Join the 1-Year Work-cum-Training Vocational program and start earning a stipend while you learn from top industry professionals.
              </p>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full sm:w-auto pt-2">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-red-600 hover:bg-red-700 active:scale-98 transition-all duration-300 shadow-lg shadow-red-600/30 cursor-pointer"
                >
                  Join Now
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
                <button
                  onClick={() => navigate('/programs')}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:text-white active:scale-98 transition-all duration-300 cursor-pointer"
                >
                  Explore Programs
                </button>
              </div>
            </div>

            {/* Right Column: Premium HVAC Illustration Simulator Image (don't change existing UI flow, just add nicely) */}
            <div className="lg:col-span-5 flex justify-center w-full mt-10 lg:mt-0">
              <div className="relative group w-full max-w-md lg:max-w-none">
                {/* Visual ambient light aura effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-blue-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

                {/* Premium border and frame */}
                <div className="relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-slate-950/60 p-1.5 backdrop-blur-sm">
                  <img
                    src={hvacHero}
                    alt="Advanced HVAC Simulator Lab"
                    className="w-full h-auto rounded-xl object-cover transform hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Highlights Grid Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Why SkyBreeze Academy Stands Out
            </h2>
            <motion.div 
              className="h-1.5 bg-amber-400 mx-auto rounded-full mb-4"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            />
            <p className="text-slate-600 text-lg">
              We design our educational courses strictly aligned to real-world industrial demands, providing a path from complete beginner to master AC tech.
            </p>
          </motion.div>

          {/* Grid Layout */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {highlights.map((item, index) => {
              // Select animation direction based on grid column
              const variants = index % 3 === 0 
                ? cardVariantsLeft 
                : index % 3 === 1 
                ? cardVariantsCenter 
                : cardVariantsRight;

              // Assign unique border color configurations based on index (amber, blue, red)
              let borderClass = "border-amber-200/60 bg-amber-50/5";
              let iconBgClass = "bg-amber-50/80";
              let hoverBorderColor = "rgba(245, 158, 11, 0.4)";
              let hoverBoxShadow = "0 20px 25px -5px rgba(245, 158, 11, 0.08), 0 8px 10px -6px rgba(245, 158, 11, 0.04)";

              if (index % 3 === 1) {
                borderClass = "border-blue-200/60 bg-blue-50/5";
                iconBgClass = "bg-blue-50/80";
                hoverBorderColor = "rgba(59, 130, 246, 0.4)";
                hoverBoxShadow = "0 20px 25px -5px rgba(59, 130, 246, 0.08), 0 8px 10px -6px rgba(59, 130, 246, 0.04)";
              } else if (index % 3 === 2) {
                borderClass = "border-red-200/60 bg-red-50/5";
                iconBgClass = "bg-red-50/80";
                hoverBorderColor = "rgba(239, 68, 68, 0.4)";
                hoverBoxShadow = "0 20px 25px -5px rgba(239, 68, 68, 0.08), 0 8px 10px -6px rgba(239, 68, 68, 0.04)";
              }

              return (
                <motion.div
                  key={index}
                  className={`p-8 rounded-2xl border ${borderClass} shadow-sm flex flex-col justify-between cursor-pointer group`}
                  variants={variants}
                  whileHover={{ 
                    y: -12,
                    scale: 1.03,
                    boxShadow: hoverBoxShadow,
                    borderColor: hoverBorderColor
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div>
                    <div className={`w-14 h-14 rounded-xl ${iconBgClass} flex items-center justify-center mb-6 border border-slate-100 transition-transform duration-300 group-hover:scale-110`}>
                      {item.icon}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Premium Value Banner Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-xl relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left Side Info */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-amber-400 text-slate-950 font-bold px-3 py-1 rounded-md text-xs uppercase tracking-wider">
                  Industrial Immersion
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                  Learn by Working on Real AC & HVAC Sites
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  SkyBreeze Academy bridges classroom education with on-site deployment. From the second month of your vocational course, you will work hand-in-hand with professional engineers on residential, commercial, and industrial HVAC installations.
                </p>

                <ul className="space-y-3.5 pt-2">
                  <li className="flex items-center space-x-3 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>Real-world client installations in Coimbatore and beyond</span>
                  </li>
                  <li className="flex items-center space-x-3 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>In-depth focus on VRF / VRV and high-capacity central chillers</span>
                  </li>
                  <li className="flex items-center space-x-3 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>Expert mentoring from certified safety engineers</span>
                  </li>
                </ul>
              </div>

              {/* Right Side Pricing Card Banner */}
              <div className="lg:col-span-5 w-full">
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-8 text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-400/10 text-amber-400 mb-2">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-slate-400 font-semibold mb-1">Exclusive Student Benefit</span>
                    <span className="block font-heading text-2xl sm:text-3xl font-extrabold text-white">Stipend Guaranteed</span>
                    <span className="block text-4xl sm:text-5xl font-extrabold text-amber-400 my-4">₹2,000/-</span>
                    <span className="block text-sm text-slate-300 font-semibold">Every month starting from the 3rd Month onwards!</span>
                  </div>
                  <div className="h-px bg-slate-700" />
                  <button
                    onClick={() => navigate('/contact')}
                    className="w-full inline-flex items-center justify-center py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wider uppercase transition-colors shadow-lg hover:shadow-red-600/20 cursor-pointer"
                  >
                    Register and Claim Stipend
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Pamphlet Promo Popup Modal ── */}
      <AnimatePresence>
        {showPromo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4 select-none"
            onClick={() => setShowPromo(false)}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              className="max-w-sm w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button X */}
              <button
                onClick={() => setShowPromo(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/45 hover:bg-slate-850 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer z-50 hover:scale-105 active:scale-95"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Poster Image */}
              <div className="relative w-full overflow-hidden bg-black flex justify-center items-center">
                <img
                  src={pamphletImg}
                  alt="SkyBreeze Academy Career Pamphlet"
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>

              {/* Admission Info Bar */}
              <div className="bg-slate-950 p-5 text-center border-t border-slate-800 space-y-3">
                <p className="text-amber-400 text-xs font-bold uppercase tracking-widest animate-pulse">
                  🌟 Admission Open 2026 🌟
                </p>
                <h3 className="text-xs sm:text-sm font-bold text-white leading-normal">
                  Coimbatore's Premier Govt-Approved HVAC Academy
                </h3>
                <div className="flex gap-3 justify-center pt-1.5">
                  <button
                    onClick={() => {
                      setShowPromo(false);
                      navigate('/contact');
                    }}
                    className="px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold text-xs tracking-wider uppercase transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    Join Now
                  </button>
                  <button
                    onClick={() => setShowPromo(false)}
                    className="px-5 py-2 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-800/40 text-slate-200 text-xs font-semibold transition-all duration-300 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
