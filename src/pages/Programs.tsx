import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Clock, 
  ShieldCheck, 
  Building, 
  Home, 
  TrendingDown,
  ArrowRight,
  Sparkles,
  Phone,
  MapPin,
  GraduationCap,
  BookOpen,
  Layers,
  Wrench,
  Camera,
  X
} from 'lucide-react';
import hvacTrainees from '@/assets/hvac_trainees.png';
import accommodationImg from '@/assets/accommodation_benefit.png';
import stipendImg from '@/assets/stipend_benefit.png';
import certificationImg from '@/assets/certification_benefit.png';
import careerImg from '@/assets/career_benefit.png';
import internshipImg from '@/assets/sky2/internship.jpeg';

export const Programs: React.FC = () => {
  const navigate = useNavigate();
  const [showInternshipModal, setShowInternshipModal] = React.useState(false);

  React.useEffect(() => {
    // Show internship photo popup automatically 800ms after landing
    const timer = setTimeout(() => {
      setShowInternshipModal(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  } as const;

  const programCardLeft = {
    hidden: { opacity: 0, x: -80, scale: 0.95 },
    visible: { 
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

  const programCardRight = {
    hidden: { opacity: 0, x: 80, scale: 0.95 },
    visible: { 
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

  const syllabusContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  } as const;

  const syllabusItemVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 14
      }
    }
  } as const;

  const internshipPrograms = [
    {
      title: "Internship Program",
      duration: "15 Days",
      badge: "Fast-Track Introduction",
      desc: "Perfect for students seeking foundational HVAC domain exposure and basic practical troubleshooting guidelines.",
      actionText: "Inquire 15-Day Track"
    },
    {
      title: "Advanced Internship Program",
      duration: "30 Days",
      badge: "Industry Favorite",
      desc: "Comprehensive training module incorporating live site projects, expert mentorship, and eligible stipend tracks.",
      actionText: "Apply for 30-Day Track"
    }
  ];

  const whatWeLearn = [
    { text: "Practical HVAC Training", icon: <Layers className="w-5 h-5 text-amber-500" /> },
    { text: "AC Installation & Complaint Service", icon: <Award className="w-5 h-5 text-amber-500" /> },
    { text: "VRF System Basics", icon: <Sparkles className="w-5 h-5 text-amber-500" /> },
    { text: "Ducting Concepts & Site Work", icon: <Building className="w-5 h-5 text-amber-500" /> },
    { text: "Commissioning & Troubleshooting", icon: <ShieldCheck className="w-5 h-5 text-amber-500" /> },
    { text: "Real-Time Site Exposure", icon: <Home className="w-5 h-5 text-amber-500" /> },
    { text: "Classroom Technical Sessions", icon: <BookOpen className="w-5 h-5 text-amber-500" /> },
    { text: "Expert Mentorship", icon: <GraduationCap className="w-5 h-5 text-amber-500" /> }
  ];

  const whyChooseUs = [
    { 
      title: "Industry-Oriented Practical Training", 
      desc: "No dry slideshows. We focus entirely on real industrial equipment and tools.",
      icon: <Wrench className="w-5 h-5 text-amber-500" />
    },
    { 
      title: "Hands-On Experience at Live Sites", 
      desc: "Gain confidence by performing diagnostic tests at real client sites.",
      icon: <Building className="w-5 h-5 text-amber-500" />
    },
    { 
      title: "Experienced HVAC Professionals", 
      desc: "Learn tricks of the trade directly from senior site supervisors and engineers.",
      icon: <GraduationCap className="w-5 h-5 text-amber-500" />
    },
    { 
      title: "Placement Support Assistance", 
      desc: "Access our dynamic job network with top HVAC companies locally and abroad.",
      icon: <Award className="w-5 h-5 text-amber-500" />
    },
    { 
      title: "Professional Career Guidance", 
      desc: "1-on-1 counseling to help you transition from student to structural cooling engineer.",
      icon: <BookOpen className="w-5 h-5 text-amber-500" />
    },
    { 
      title: "Commercial HVAC Projects", 
      desc: "Exposure to central VRF grids, package units, and complex airflow layouts.",
      icon: <Layers className="w-5 h-5 text-amber-500" />
    }
  ];

  const additionalBenefits = [
    { title: "Accommodation Support", desc: "Boarding house facilities are available for outstation candidates.", icon: <Home className="w-6 h-6 text-red-600" />, image: accommodationImg },
    { title: "Stipend Opportunities", desc: "Monthly Student Stipend (Benefits from 3rd Month onwards)", icon: <TrendingDown className="w-6 h-6 text-red-600" />, image: stipendImg },
    { title: "Official Certification", desc: "Receive a professional certificate of completion recognized by recruiters.", icon: <ShieldCheck className="w-6 h-6 text-red-600" />, image: certificationImg },
    { title: "Career Development Support", desc: "Soft-skills training, resume reviews, and interview prep guides.", icon: <Award className="w-6 h-6 text-red-600" />, image: careerImg }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-amber-400 text-slate-950 font-bold px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">
              Skill Development Division
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
              Professional HVAC Training & Internship Programs
            </h1>
            <div className="h-1.5 w-20 bg-amber-400 mx-auto rounded-full mb-6" />
            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Accelerate your engineering career with live site deployment, certified course tracks, and direct industry mentorship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Division Intro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -80, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              type: "spring",
              stiffness: 60,
              damping: 13,
              mass: 0.8
            }}
          >
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Welcome to <span className="text-blue-900">SkyBreeze Academy</span>
            </h2>
            <div className="h-1 w-16 bg-amber-400 rounded-full" />
            <p className="text-slate-600 text-lg leading-relaxed">
              SkyBreeze Academy is the training and skill development division of <strong>SkyBreeze AC Solutions</strong>. We provide practical HVAC training, real-time industry exposure, and professional mentorship for engineering graduates who wish to build a strong career in the HVAC industry.
            </p>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-start space-x-3">
              <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
              <p className="text-slate-600 text-sm leading-relaxed">
                By bridging classical academic knowledge with practical field mechanics, we transform aspiring students into skilled professionals ready for direct workplace deployment.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              type: "spring",
              stiffness: 60,
              damping: 13,
              mass: 0.8
            }}
          >
            <div className="relative p-1 bg-slate-100 rounded-3xl border border-slate-200 shadow-xl overflow-hidden w-full max-w-md">
              <img 
                src={hvacTrainees} 
                alt="SkyBreeze HVAC Classroom Trainees" 
                className="rounded-2xl w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Programs Available Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-extrabold text-slate-900">Programs Available</h2>
            <motion.div 
              className="h-1 bg-amber-400 mx-auto rounded-full mt-3 mb-4"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            />
            <p className="text-slate-600">Select an entry track that fits your academic timelines and goals.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {internshipPrograms.map((program, idx) => {
              // Alternate entry directions for the two cards (left & right)
              const cardAnimVariants = idx === 0 ? programCardLeft : programCardRight;

              return (
                <motion.div 
                  key={idx}
                  variants={cardAnimVariants}
                  className="w-full h-[320px] sm:h-[350px] group [perspective:1200px]"
                >
                  <div className="relative h-full w-full rounded-3xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-sm hover:shadow-xl hover:shadow-slate-200/50">
                    
                    {/* FRONT SIDE (White Theme) */}
                    <div className="absolute inset-0 h-full w-full rounded-3xl bg-white border border-slate-200/60 p-8 [backface-visibility:hidden] flex flex-col justify-between overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full pointer-events-none -mr-8 -mt-8" />
                      
                      <div className="flex justify-between items-start w-full">
                        <span className="bg-blue-100 text-blue-900 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md">
                          {program.badge}
                        </span>
                        <div className="flex items-center space-x-1.5 bg-amber-50 border border-amber-200/60 text-amber-800 px-2.5 py-1 rounded-md text-[11px] font-bold shadow-sm">
                          <Clock className="w-3.5 h-3.5 text-amber-500" />
                          <span>{program.duration}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center space-y-4 my-auto">
                        <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center border border-amber-100 shadow-sm transition-transform duration-500 group-hover:scale-110 relative overflow-visible">
                          {/* Pulsing ambient border glow ring */}
                          <motion.div
                            animate={{
                              scale: [1, 1.28, 1],
                              opacity: [0.15, 0.45, 0.15]
                            }}
                            transition={{
                              duration: 1.6,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute inset-0 rounded-2xl border border-amber-400 bg-amber-400/10 pointer-events-none"
                          />
                          <motion.div
                            animate={{ 
                              opacity: [0.4, 1, 0.4],
                              scale: [0.92, 1.08, 0.92]
                            }}
                            transition={{
                              duration: 1.6,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="flex items-center justify-center w-full h-full"
                          >
                            {idx === 0 ? (
                              <BookOpen className="w-8 h-8 text-amber-500" />
                            ) : (
                              <Award className="w-8 h-8 text-amber-500" />
                            )}
                          </motion.div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 text-center">{program.title}</h3>
                      </div>

                      <div className="flex items-center justify-center text-slate-400 text-xs space-x-1.5 animate-bounce">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        <span>Hover to reveal details</span>
                      </div>
                    </div>

                    {/* BACK SIDE (Sleek Dark Theme) */}
                    <div className="absolute inset-0 h-full w-full rounded-3xl bg-slate-950 text-white border border-slate-800 p-8 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/5 rounded-full pointer-events-none -ml-8 -mb-8" />
                      
                      <div className="space-y-3.5 my-auto">
                        <h4 className="text-xl font-bold text-amber-400 border-b border-slate-800 pb-2">{program.title}</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">{program.desc}</p>
                      </div>

                      <div className="pt-4">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate('/contact');
                          }}
                          className="w-full py-3.5 bg-amber-500 text-slate-950 font-bold text-sm rounded-xl transition-all duration-300 inline-flex items-center justify-center cursor-pointer hover:bg-amber-400 shadow-lg shadow-amber-500/20 group/btn"
                        >
                          {program.actionText}
                          <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* What Students Will Learn Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -80, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              type: "spring",
              stiffness: 60,
              damping: 13,
              mass: 0.8
            }}
          >
            <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200/50 rounded-full px-3 py-1 text-amber-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Syllabus Highlights</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              What Students Will Learn
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Our curriculum focuses completely on industry needs, guiding candidates through advanced calculations, practical installation methods, and on-site troubleshooting procedures.
            </p>
          </motion.div>

          <motion.div 
            className="lg:col-span-7"
            variants={syllabusContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whatWeLearn.map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm flex items-center space-x-3 cursor-pointer hover:shadow-md transition-all duration-300 group"
                  variants={syllabusItemVariants}
                  whileHover={{ 
                    x: 10,
                    scale: 1.02,
                    borderColor: "rgba(245, 158, 11, 0.2)",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="text-slate-700 font-semibold text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Why Choose SkyBreeze Academy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-extrabold text-slate-900">Why Choose SkyBreeze Academy?</h2>
            <motion.div 
              className="h-1 bg-amber-400 mx-auto rounded-full mt-3 mb-4"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            />
            <p className="text-slate-600">Why we are Coimbatore's premier HVAC vocational center.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {whyChooseUs.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={cardVariants}
                className="bg-white p-7 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between cursor-pointer group/card hover:border-slate-300"
                whileHover={{ 
                  y: -10, 
                  scale: 1.025,
                  borderColor: "rgba(245, 158, 11, 0.25)",
                  boxShadow: "0 20px 25px -5px rgba(245, 158, 11, 0.05), 0 8px 10px -6px rgba(245, 158, 11, 0.03)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div>
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-5 border border-amber-100/50"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="font-heading text-lg font-bold text-slate-900 mb-3 group-hover/card:text-amber-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Benefits Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-extrabold text-slate-900">Additional Benefits</h2>
          <motion.div 
            className="h-1 bg-amber-400 mx-auto rounded-full mt-3 mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          />
          <p className="text-slate-600">Supporting candidate growth inside and outside the classroom.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalBenefits.map((item, idx) => (
            <motion.div 
              key={idx}
              className="bg-white border border-slate-200/60 rounded-3xl shadow-sm overflow-hidden flex flex-col justify-between cursor-pointer group/card h-full relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: idx * 0.12, type: "spring", stiffness: 80, damping: 15 }}
              whileHover={{ 
                y: -12, 
                scale: 1.025,
                borderColor: "rgba(245, 158, 11, 0.25)",
                boxShadow: "0 20px 25px -5px rgba(245, 158, 11, 0.05), 0 8px 10px -6px rgba(245, 158, 11, 0.03)"
              }}
            >
              {/* Image Container with 3D Depth Zoom */}
              <div className="relative h-40 w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                />
                {/* Smooth fading gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
              </div>

              {/* Floating Action Icon Badge */}
              <div className="absolute top-34 left-6 w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-slate-100 shadow-md transition-transform duration-500 group-hover/card:scale-110 group-hover/card:bg-red-600 group-hover/card:text-white">
                <div className="transition-colors duration-300 group-hover/card:text-white [&>svg]:group-hover/card:text-white">
                  {item.icon}
                </div>
              </div>

              {/* Text Description Body */}
              <div className="p-6 pt-8 space-y-2 flex-grow">
                <h3 className="font-heading text-lg font-bold text-slate-900 group-hover/card:text-amber-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Student Zone Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
        {/* Glow effects */}
        <div className="absolute top-[-100px] left-1/4 w-80 h-80 rounded-full bg-amber-500/8 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-100px] right-1/4 w-80 h-80 rounded-full bg-blue-500/8 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center space-x-2 bg-amber-400 text-slate-950 font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-4 animate-pulse">
              🎓 Student Zone
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              AC & HVAC Training – Student Zone
            </h2>
            <div className="h-1 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto rounded-full w-24 mb-4" />
            <p className="text-slate-400 text-lg">
              Practical, industry-ready programs with govt certification
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Card 1: 1-Year Training Program */}
            <motion.div 
              className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl space-y-6 shadow-xl relative group hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 80, damping: 14 }}
              whileHover={{ y: -8 }}
            >
              <div className="space-y-6">
                {/* Header info */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform duration-300">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block">🎓 Course Details</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">1-Year Training Program</h3>
                  </div>
                </div>

                <div className="h-px bg-slate-800/80" />

                {/* Details List */}
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Layers className="w-3 h-3 text-amber-400" />
                    </div>
                    <p className="text-sm text-slate-300">
                      <span className="font-semibold text-slate-200">Specialization:</span> Air Conditioning & HVAC
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Award className="w-3 h-3 text-amber-400" />
                    </div>
                    <p className="text-sm text-slate-300">
                      <span className="font-semibold text-slate-200">Certificate:</span> TNSCVT – Govt of Tamil Nadu
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Wrench className="w-3 h-3 text-amber-400" />
                    </div>
                    <p className="text-sm text-slate-300">
                      <span className="font-semibold text-slate-200">Who can apply:</span> 8th / SSLC / 12th / Diploma / ITI
                    </p>
                  </li>
                </ul>
              </div>

              {/* Download banner */}
              <div className="bg-amber-400/10 border border-amber-400/20 p-4.5 rounded-2xl flex items-center gap-3 mt-4">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0 animate-pulse" />
                <p className="text-xs sm:text-sm text-slate-200 leading-normal font-semibold">
                  Do you want the syllabus PDF?{' '}
                  <a 
                    href="/1-Year-Training-Program-Syllabus.pdf"
                    download="1-Year-Training-Program-Syllabus.pdf"
                    className="text-amber-400 hover:text-amber-300 hover:underline font-extrabold cursor-pointer inline-flex items-center gap-0.5"
                  >
                    Click here to download
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Card 2: 3-Month Internship */}
            <motion.div 
              className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl space-y-6 shadow-xl relative group hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 80, damping: 14 }}
              whileHover={{ y: -8 }}
            >
              <div className="space-y-6">
                {/* Header info */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform duration-300">
                    <Clock className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block">⚡ Internship Program</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">3-Month Internship</h3>
                  </div>
                </div>

                <div className="h-px bg-slate-800/80" />

                {/* Clickable Internship Photo Thumbnail */}
                <div 
                  onClick={() => setShowInternshipModal(true)}
                  className="relative rounded-2xl overflow-hidden cursor-pointer group/thumb border border-slate-800 hover:border-amber-400/40 transition-all duration-300 shadow-md h-32 my-4"
                >
                  <img 
                    src={internshipImg} 
                    alt="Direct Site Placement" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/thumb:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-950/65 flex flex-col items-center justify-center gap-1 group-hover/thumb:bg-slate-950/45 transition-colors">
                    <Camera className="w-5 h-5 text-amber-400 animate-pulse" />
                    <span className="text-[10px] font-extrabold text-white uppercase tracking-wider">View Live Placement Photo</span>
                  </div>
                </div>

                {/* Details List */}
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                    </div>
                    <p className="text-sm text-slate-300">
                      <span className="font-semibold text-slate-200">Focus:</span> Real-time industry oriented training
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                      <GraduationCap className="w-3 h-3 text-amber-400" />
                    </div>
                    <p className="text-sm text-slate-300">
                      <span className="font-semibold text-slate-200">Who can apply:</span> Engineering Graduates
                    </p>
                  </li>
                </ul>
              </div>

              {/* Download banner */}
              <div className="bg-amber-400/10 border border-amber-400/20 p-4.5 rounded-2xl flex items-center gap-3 mt-4">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0 animate-pulse" />
                <p className="text-xs sm:text-sm text-slate-200 leading-normal font-semibold">
                  Do you want the syllabus PDF?{' '}
                  <a 
                    href="/3-Month-Internship-Syllabus.pdf"
                    download="3-Month-Internship-Syllabus.pdf"
                    className="text-amber-400 hover:text-amber-300 hover:underline font-extrabold cursor-pointer inline-flex items-center gap-0.5"
                  >
                    Click here to download
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section / Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-950 to-slate-900 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold">Ready to Start Your HVAC Journey?</h2>
            <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
              Get in touch with our team today to verify batch dates, check hostel availability, or submit your credentials.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white mb-1">Campus Location</h4>
                <p className="text-slate-300 text-sm">SkyBreeze AC Solutions</p>
                <p className="text-slate-400 text-xs">KK Pudur, Coimbatore - 641038</p>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl flex items-start space-x-4">
              <Phone className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white mb-1">Direct Helplines</h4>
                <p className="text-slate-300 text-sm font-semibold">+91 94861 12661</p>
                <p className="text-slate-300 text-sm font-semibold">+91 93841 77714</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="pt-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-red-600 hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30 cursor-pointer"
            >
              Enroll Now / Contact Admissions
              <ArrowRight className="w-5 h-5 ml-2 animate-pulse" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Live Site Placement Image Lightbox Modal ── */}
      <AnimatePresence>
        {showInternshipModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
            onClick={() => setShowInternshipModal(false)}
          >
            {/* Centering Wrapper Container (No background/borders) */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              className="relative max-w-4xl w-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Framed Image Display Box (The only visible border) */}
              <div className="relative border-4 border-slate-800 bg-slate-900 p-2 rounded-3xl shadow-2xl shadow-black/90 max-w-full flex items-center justify-center">
                {/* Floating Close Button X neatly on the top-right corner of the frame */}
                <button
                  onClick={() => setShowInternshipModal(false)}
                  className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-300 z-50 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                >
                  <X className="w-5 h-5" />
                </button>
 
                <img
                  src={internshipImg}
                  alt="SkyBreeze Academy Real Site Internship Work"
                  className="max-w-full max-h-[75vh] object-contain rounded-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
 
    </div>
  );
};
