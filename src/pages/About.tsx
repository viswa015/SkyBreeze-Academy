import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Target,
  CheckCircle,
  Wrench,
  Users
} from 'lucide-react';
import hvacTrainees from '@/assets/hvac_trainees.png';

const statCardVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  show: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    borderColor: "rgba(255, 255, 255, 0.1)",
    boxShadow: "none",
    transition: { type: "spring" as const, stiffness: 80, damping: 15 }
  },
  active: {
    opacity: 1,
    scale: 1.05,
    y: -8,
    borderColor: "rgba(245, 158, 11, 0.4)",
    boxShadow: "0px 15px 30px rgba(245, 158, 11, 0.15)",
    transition: { type: "spring" as const, stiffness: 300, damping: 20 }
  }
} as const;

const pillarContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
} as const;

const aosFadeRight = {
  hidden: { opacity: 0, x: -70, y: 15, rotate: -1 },
  show: { 
    opacity: 1, 
    x: 0, 
    y: 0,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 60,
      damping: 15,
      mass: 0.8
    }
  }
} as const;

const aosFadeUp = {
  hidden: { opacity: 0, y: 70, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 60,
      damping: 15,
      mass: 0.8
    }
  }
} as const;

const aosFadeLeft = {
  hidden: { opacity: 0, x: 70, y: 15, rotate: 1 },
  show: { 
    opacity: 1, 
    x: 0, 
    y: 0,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 60,
      damping: 15,
      mass: 0.8
    }
  }
} as const;

export const About: React.FC = () => {
  const navigate = useNavigate();

  const [activeStatIndex, setActiveStatIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStatIndex((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const statistics = [
    { value: "100%", label: "Practical Learning focus" },
    { value: "TNSCVT", label: "Govt Affiliated Certificate" },
    { value: "₹2K", label: "Monthly Student Stipend (Benefits from 3rd Month onwards)" }
  ];

  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-slate-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            About SkyBreeze Academy
          </h1>
          <div className="h-1 w-20 bg-amber-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Pioneering practical-oriented HVAC education in South India. Discover our journey, government credentials, and our parent organization.
          </p>
        </div>
      </section>

      {/* Core Mission & Quote Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <motion.div
          className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden text-center max-w-5xl mx-auto border border-white/10"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          whileHover={{
            y: -5,
            scale: 1.005,
            boxShadow: "0 30px 60px -15px rgba(245, 158, 11, 0.12), 0 20px 40px -20px rgba(59, 130, 246, 0.15)",
            borderColor: "rgba(245, 158, 11, 0.2)"
          }}
        >
          {/* Animated Ambient Light Blobs (Aurora Effect) */}
          <motion.div
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -30, 20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-500/15 blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{
              x: [0, -30, 40, 0],
              y: [0, 20, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-amber-500/15 blur-3xl pointer-events-none"
          />

          <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
            <motion.span
              className="block text-amber-400 font-extrabold uppercase tracking-widest text-xs sm:text-sm"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our Core Motto
            </motion.span>

            <motion.h2
              className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl font-heading leading-tight"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
            >
              "கல்வி நுட்பம் தொழில் நுட்பம்"
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-slate-200 italic font-medium max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              "Academic Excellence paired with Robust Technical Expertise"
            </motion.p>

            <motion.div
              className="h-0.5 bg-amber-400/50 mx-auto rounded"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />

            <motion.p
              className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              Our core mission is to empower youths and engineering graduates by transforming theoretical syllabus into hardcore, industry-ready technical skills. We believe in providing vocational education that leads straight to dignified careers.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Detailed Overview Split Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Text block */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -60, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 14 }}
          >
            <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-800 border border-amber-200/55 rounded-lg px-3 py-1.5 text-xs font-bold uppercase">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>Government Approved training Center</span>
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Affiliated with TNSCVT & SkyBreeze AC Solutions
            </h2>

            <p className="text-slate-600 leading-relaxed text-base">
              SkyBreeze Academy operates as an authorized training school affiliated with the <strong>TNSCVT (Tamil Nadu State Council for Vocational Training)</strong>. This guarantees that all certifications issued hold government validity, significantly easing applications for government placements, industrial careers, and passports for overseas migration.
            </p>

            <p className="text-slate-600 leading-relaxed text-base">
              Our massive differentiator is our direct integration with our parent company, <strong>SkyBreeze AC Solutions (skybreezeacsolutions.in)</strong>. As one of Coimbatore's foremost professional air conditioning and HVAC contracting firms, the parent company supplies our classrooms with active real-world sites, top-tier tools, and guaranteed internship placements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">Learn on Commercial Projects</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">TNSCVT Government Certification</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">Stipend Benefits from Month 3</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">100% On-Site Placement Support</span>
              </div>
            </div>
          </motion.div>

          {/* Visual stat grid with background image and 3D animations */}
          <motion.div
            className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 grid grid-cols-2 gap-6 sm:gap-8 shadow-2xl relative overflow-hidden group/grid"
            initial={{ opacity: 0, x: 60, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 14 }}
            whileHover={{
              borderColor: "rgba(245, 158, 11, 0.2)"
            }}
          >
            {/* Dynamic Watermark Background Image (zooms and pans slowly on hover) */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
              <img
                src={hvacTrainees}
                alt="HVAC Classroom"
                className="w-full h-full object-cover opacity-20 transition-transform duration-[10s] ease-out group-hover/grid:scale-110 group-hover/grid:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 to-slate-900/90" />
            </div>

            {statistics.map((stat, sIdx) => (
              <motion.div
                key={sIdx}
                className={`relative z-10 bg-white/5 backdrop-blur-md border p-5 sm:p-6 rounded-2xl text-center cursor-pointer group ${sIdx === 2 ? 'col-span-2' : ''}`}
                variants={statCardVariants}
                initial="hidden"
                animate={sIdx === activeStatIndex ? "active" : "show"}
                whileHover="active"
                viewport={{ once: true }}
              >
                <span className={`block font-heading text-3xl sm:text-4xl font-extrabold mb-2 transition-colors duration-300 group-hover:text-amber-400 ${sIdx === activeStatIndex ? 'text-amber-400' : 'text-white'}`}>
                  {stat.value}
                </span>
                <span className={`block text-[10px] sm:text-xs font-bold uppercase tracking-wide transition-colors duration-300 group-hover:text-white leading-tight ${sIdx === activeStatIndex ? 'text-white font-extrabold' : 'text-slate-300'}`}>
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Vision & Values grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-100 overflow-hidden relative">
        {/* Subtle decorative grid pattern representing structure & engineering */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Our Core Educational Pillars
            </h2>
            <motion.div 
              className="h-1.5 bg-gradient-to-r from-amber-400 via-sky-400 to-emerald-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={pillarContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            
            {/* Pillar 1 */}
            <motion.div 
              className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between cursor-pointer group/card relative overflow-hidden"
              variants={aosFadeRight}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                borderColor: "rgba(245, 158, 11, 0.3)",
                boxShadow: "0 20px 30px -5px rgba(245, 158, 11, 0.12), 0 8px 10px -6px rgba(245, 158, 11, 0.05)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Dynamic top line animation */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500 rounded-t-2xl transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-300 origin-left" />
              
              {/* Floating Number */}
              <span className="font-heading font-black text-slate-100 text-6xl select-none group-hover/card:text-amber-50/70 transition-colors duration-500 absolute top-4 right-6 pointer-events-none">01</span>

              <div className="space-y-4 relative z-10">
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-100/50 group-hover/card:bg-amber-500 group-hover/card:text-white group-hover/card:border-amber-500 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.15,
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Target className="w-6 h-6 text-amber-500 group-hover/card:text-white transition-colors duration-300" />
                </motion.div>
                <h3 className="font-heading text-lg font-bold text-slate-900 group-hover/card:text-amber-600 transition-colors duration-300">
                  Targeted Skill Sets
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We don't teach outdated systems. Our syllabus adapts constantly to encompass VRF, technology, eco-friendly refrigerants, and intelligent building ventilation algorithms.
                </p>
              </div>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div 
              className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between cursor-pointer group/card relative overflow-hidden"
              variants={aosFadeUp}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                borderColor: "rgba(14, 165, 233, 0.3)",
                boxShadow: "0 20px 30px -5px rgba(14, 165, 233, 0.12), 0 8px 10px -6px rgba(14, 165, 233, 0.05)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Dynamic top line animation */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-sky-500 rounded-t-2xl transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-300 origin-center" />
              
              {/* Floating Number */}
              <span className="font-heading font-black text-slate-100 text-6xl select-none group-hover/card:text-sky-50/70 transition-colors duration-500 absolute top-4 right-6 pointer-events-none">02</span>

              <div className="space-y-4 relative z-10">
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center border border-sky-100/50 group-hover/card:bg-sky-500 group-hover/card:text-white group-hover/card:border-sky-500 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.15,
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Wrench className="w-6 h-6 text-sky-500 group-hover/card:text-white transition-colors duration-300" />
                </motion.div>
                <h3 className="font-heading text-lg font-bold text-slate-900 group-hover/card:text-sky-600 transition-colors duration-300">
                  Tool-Centric Learning
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We maintain a rigorous 1:1 student-to-tool ratio in our laboratories, guaranteeing that every candidate knows how to manually handle critical industrial instrumentation with safety.
                </p>
              </div>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div 
              className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between cursor-pointer group/card relative overflow-hidden"
              variants={aosFadeLeft}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                borderColor: "rgba(16, 185, 129, 0.3)",
                boxShadow: "0 20px 30px -5px rgba(16, 185, 129, 0.12), 0 8px 10px -6px rgba(16, 185, 129, 0.05)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Dynamic top line animation */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500 rounded-t-2xl transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-300 origin-right" />
              
              {/* Floating Number */}
              <span className="font-heading font-black text-slate-100 text-6xl select-none group-hover/card:text-emerald-50/70 transition-colors duration-500 absolute top-4 right-6 pointer-events-none">03</span>

              <div className="space-y-4 relative z-10">
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100/50 group-hover/card:bg-emerald-500 group-hover/card:text-white group-hover/card:border-emerald-500 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.15,
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Users className="w-6 h-6 text-emerald-500 group-hover/card:text-white transition-colors duration-300" />
                </motion.div>
                <h3 className="font-heading text-lg font-bold text-slate-900 group-hover/card:text-emerald-600 transition-colors duration-300">
                  Career Trajectory
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Through our parent network, graduates are placed directly into operational positions or guided into international avenues across the Middle East and Singapore.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* CTA Footer banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Ready to Build a High-Growth Future?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto">
            Take a step today to acquire robust technical skills that are globally relevant. Apply for our upcoming batch.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider transition-colors shadow-lg hover:shadow-red-600/20 cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      </section>

    </div>
  );
};
