import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  User,
  BookOpen,
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import hvacTamilLab from '../assets/hvac_tamil_lab.png';

interface FormState {
  studentName: string;
  phoneNumber: string;
  selectedCourse: string;
  message: string;
}

interface FormErrors {
  studentName?: string;
  phoneNumber?: string;
  selectedCourse?: string;
  message?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
} as const;

const itemFadeLeft = {
  hidden: { opacity: 0, x: 50 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 14
    }
  }
} as const;

const itemFadeRight = {
  hidden: { opacity: 0, x: -50 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 14
    }
  }
} as const;

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    studentName: '',
    phoneNumber: '',
    selectedCourse: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [badgeText, setBadgeText] = useState("");
  const badgeFullText = "Admissions Open for 2026 Batch";

  React.useEffect(() => {
    let isMounted = true;
    let index = 0;
    let interval: any = null;

    const startTyping = () => {
      interval = setInterval(() => {
        if (!isMounted) return;
        if (index < badgeFullText.length) {
          const char = badgeFullText[index];
          if (char !== undefined) {
            setBadgeText((prev) => prev + char);
          }
          index++;
        } else {
          clearInterval(interval);
          interval = null;
          // Hold full text for 3.5 seconds and loop again
          setTimeout(() => {
            if (isMounted) {
              setBadgeText("");
              index = 0;
              startTyping();
            }
          }, 3500);
        }
      }, 70);
    };

    startTyping();

    return () => {
      isMounted = false;
      if (interval) clearInterval(interval);
    };
  }, []);

  const coursesList = [
    "Basic AC Service (1-Year TNSCVT Program)",
    "Advanced AC Service (1-Year TNSCVT Program)",
    "Duct Fabrication & Installation (1-Year TNSCVT Program)",
    "3-Month Industry Internship (for Engineering Graduates)"
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear errors as user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formState.studentName.trim()) {
      tempErrors.studentName = "Student Name is required";
      isValid = false;
    }

    if (!formState.phoneNumber.trim()) {
      tempErrors.phoneNumber = "Phone Number is required";
      isValid = false;
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formState.phoneNumber.trim())) {
      tempErrors.phoneNumber = "Please enter a valid phone number (10-12 digits)";
      isValid = false;
    }

    if (!formState.selectedCourse) {
      tempErrors.selectedCourse = "Please select a course";
      isValid = false;
    }

    if (!formState.message.trim()) {
      tempErrors.message = "Please add a short brief about your educational background";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        studentName: '',
        phoneNumber: '',
        selectedCourse: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header section with rich gradients and moving background */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 py-20 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
        {/* Ambient Glowing Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        {/* Engineering grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <motion.div 
          className="max-w-7xl mx-auto text-center relative z-10 space-y-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-semibold text-white uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="min-h-[16px] inline-block">
              {badgeText}
              <span className="animate-pulse text-amber-400 ml-0.5 font-light">|</span>
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Contact & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">Admissions Registry</span>
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto rounded-full mt-4" />
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed pt-2">
            Begin your professional HVAC career with government-approved credentials. Reach out to our campus desk or apply through our secure registry below.
          </p>
        </motion.div>
      </section>

      {/* Main Grid Double Column Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-visible">
        {/* Abstract dotted background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          
          {/* Column 1: Info and Addresses */}
          <motion.div className="lg:col-span-5 space-y-8" variants={itemFadeRight}>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                Campus Registry Desk
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
                Have questions about student hostel accommodation, stipend criteria, or regional course fee concessions? Connect directly with our administration registry.
              </p>
            </div>

            {/* Admission Hotlines with colored accent cards */}
            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500" />
              
              <h3 className="font-heading text-xl font-bold text-slate-900 flex items-center">
                <Phone className="w-5.5 h-5.5 text-amber-500 mr-2.5 shrink-0" />
                Direct Admission Call Lines
              </h3>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 group/link gap-2">
                  <div className="mb-1 sm:mb-0">
                    <span className="block text-[10px] font-extrabold text-amber-500 uppercase tracking-wider">Registry Office</span>
                    <span className="text-sm font-bold text-slate-700">Official Campus Registrar</span>
                  </div>
                  <a 
                    href="tel:+919486112661" 
                    className="inline-flex items-center space-x-2 text-base font-black text-blue-950 hover:text-amber-600 transition-colors bg-slate-50 border border-slate-200/50 hover:border-amber-250 hover:bg-amber-50/20 px-3.5 py-1.5 rounded-xl duration-350 self-start sm:self-center"
                  >
                    <span>+91 94861 12661</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all shrink-0" />
                  </a>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between group/link gap-2">
                  <div className="mb-1 sm:mb-0">
                    <span className="block text-[10px] font-extrabold text-sky-500 uppercase tracking-wider">Admissions Coordinator</span>
                    <span className="text-sm font-bold text-slate-700">Technical Support Desk</span>
                  </div>
                  <a 
                    href="tel:+919384177714" 
                    className="inline-flex items-center space-x-2 text-base font-black text-blue-950 hover:text-sky-650 transition-colors bg-slate-50 border border-slate-200/50 hover:border-sky-250 hover:bg-sky-50/20 px-3.5 py-1.5 rounded-xl duration-350 self-start sm:self-center"
                  >
                    <span>+91 93841 77714</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all shrink-0" />
                  </a>
                </div>
              </div>
            </div>
 
            {/* Physical Campus Address Card */}
            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 to-blue-500" />
              
              <h3 className="font-heading text-xl font-bold text-slate-900 flex items-center">
                <MapPin className="w-5.5 h-5.5 text-sky-500 mr-2.5 shrink-0" />
                Physical Campus Location
              </h3>
              
              <div className="space-y-4">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-bold">
                  No.22, 4th Cross, Ramalinga Colony, KK Pudur,
                </p>
                
                <div className="bg-sky-50/40 border border-sky-100/50 rounded-2xl p-4">
                  <span className="block text-[10px] font-extrabold text-sky-850 uppercase tracking-wider mb-1.5">Alternative Landmark:</span>
                  <p className="text-slate-650 text-xs sm:text-sm leading-relaxed font-medium">
                    Conveniently located near Saibaba Colony, Coimbatore. Excellent bus connection from Central Gandhipuram and Railway Terminals.
                  </p>
                </div>
              </div>
            </div>
 
            {/* City & Zone Card */}
            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 space-y-4 text-slate-650 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-500" />
              
              <h3 className="font-heading text-xl font-bold text-slate-900 flex items-center">
                <MapPin className="w-5.5 h-5.5 text-teal-500 mr-2.5 shrink-0" />
                City & Postal Code
              </h3>
              
              <div className="space-y-4">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-bold">
                  Coimbatore - 641038
                </p>
                
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-slate-600">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <a href="mailto:info@skybreezeacsolutions.in" className="hover:text-slate-800 transition-colors">info@skybreezeacsolutions.in</a>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-bold text-slate-600">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>Mon - Sat: 9 AM - 6 PM</span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Column 2: TypeScript Contact Form */}
          <motion.div 
            className="lg:col-span-7 bg-white border border-slate-200/60 rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden"
            variants={itemFadeLeft}
          >
            {/* Soft visual dynamic background accent inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl pointer-events-none -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl pointer-events-none -ml-16 -mb-16" />

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 relative z-10">
              Technical Enrollment Request
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mb-8 relative z-10 leading-relaxed font-medium">
              Submit your educational background details below. Our technical panel will review your profile for government registration eligibility and get back to you within 24 hours.
            </p>

            {isSubmitted ? (
              <motion.div 
                className="bg-white border border-slate-100 rounded-2xl p-8 text-center space-y-4 shadow-sm relative z-10"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 border border-green-150 text-green-500 mb-2">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Registration Submitted Successfully!
                </h3>
                <p className="text-slate-650 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                  Thank you for applying. A senior instructor from SkyBreeze Academy will call you shortly to discuss government accreditation details, stipend benefits, and hostel accommodations.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 inline-flex items-center justify-center px-8 py-3.5 bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                
                {/* Student Name */}
                <div className="space-y-2">
                  <label htmlFor="studentName" className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                    Student Full Name
                  </label>
                  <div className="relative group/input">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within/input:text-amber-500 transition-colors">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      value={formState.studentName}
                      onChange={handleInputChange}
                      placeholder="Enter your legal full name"
                      className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50/50 hover:bg-white border ${
                        errors.studentName 
                          ? 'border-red-400 focus:border-red-500 focus:ring-red-200' 
                          : 'border-slate-200/80 focus:border-amber-400 focus:ring-amber-400/20'
                      } focus:outline-none focus:ring-4 focus:bg-white transition-all text-slate-850 text-sm font-semibold`}
                    />
                  </div>
                  {errors.studentName && (
                    <p className="flex items-center text-xs text-red-650 font-semibold mt-1 animate-pulse">
                      <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                      {errors.studentName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="phoneNumber" className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                    Mobile Phone Number
                  </label>
                  <div className="relative group/input">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within/input:text-amber-500 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formState.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
                      className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50/50 hover:bg-white border ${
                        errors.phoneNumber 
                          ? 'border-red-400 focus:border-red-500 focus:ring-red-200' 
                          : 'border-slate-200/80 focus:border-amber-400 focus:ring-amber-400/20'
                      } focus:outline-none focus:ring-4 focus:bg-white transition-all text-slate-850 text-sm font-semibold`}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="flex items-center text-xs text-red-650 font-semibold mt-1 animate-pulse">
                      <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                {/* Course Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="selectedCourse" className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                    Select Target Course
                  </label>
                  <div className="relative group/input">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within/input:text-amber-500 transition-colors">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <select
                      id="selectedCourse"
                      name="selectedCourse"
                      value={formState.selectedCourse}
                      onChange={handleInputChange}
                      className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50/50 hover:bg-white border ${
                        errors.selectedCourse 
                          ? 'border-red-400 focus:border-red-500 focus:ring-red-200' 
                          : 'border-slate-200/80 focus:border-amber-400 focus:ring-amber-400/20'
                      } focus:outline-none focus:ring-4 focus:bg-white transition-all text-slate-850 text-sm font-bold`}
                    >
                      <option value="">-- Choose HVAC Program --</option>
                      {coursesList.map((course, idx) => (
                        <option key={idx} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>
                  {errors.selectedCourse && (
                    <p className="flex items-center text-xs text-red-650 font-semibold mt-1 animate-pulse">
                      <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                      {errors.selectedCourse}
                    </p>
                  )}
                </div>

                {/* Message / Background details */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                    Brief Background & Message
                  </label>
                  <div className="relative group/input">
                    <div className="absolute top-3.5 left-0 pl-4 flex items-start pointer-events-none text-slate-400 group-focus-within/input:text-amber-500 transition-colors">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder="Please specify your highest qualification (e.g., 10th, 12th, ITI, Diploma, BE) and if you require outstation hostel accommodation support."
                      className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50/50 hover:bg-white border ${
                        errors.message 
                          ? 'border-red-400 focus:border-red-500 focus:ring-red-200' 
                          : 'border-slate-200/80 focus:border-amber-400 focus:ring-amber-400/20'
                      } focus:outline-none focus:ring-4 focus:bg-white transition-all text-slate-850 text-sm font-semibold`}
                    />
                  </div>
                  {errors.message && (
                    <p className="flex items-center text-xs text-red-650 font-semibold mt-1 animate-pulse">
                      <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 inline-flex items-center justify-center font-extrabold text-white bg-red-600 hover:bg-red-700 disabled:bg-slate-400 rounded-xl transition-all duration-300 shadow-lg shadow-red-600/20 hover:shadow-red-600/35 active:scale-98 cursor-pointer text-sm tracking-wider uppercase"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Processing Profile...</span>
                    </div>
                  ) : (
                    <>
                      <span>Submit Enrollment Request</span>
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>

                {/* Decorative HVAC Trainee banner below submit button to balance spacing and add visual authority */}
                <motion.div 
                  className="mt-8 rounded-2xl overflow-hidden relative h-[180px] group/img shadow-md border border-slate-100/80"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <img 
                    src={hvacTamilLab} 
                    alt="Tamil Nadu HVAC Practical Training Lab" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent flex items-end p-4">
                    <div className="space-y-0.5">
                      <span className="bg-amber-500 text-slate-950 font-black text-[9px] uppercase tracking-wider px-2 py-0.5 rounded inline-block">Hands-on Laboratory</span>
                      <p className="text-white text-xs sm:text-sm font-extrabold leading-tight tracking-wide">
                        SkyBreeze Practical HVAC Simulation & Assembly Center
                      </p>
                    </div>
                  </div>
                </motion.div>

              </form>
            )}

          </motion.div>

        </motion.div>
      </section>

      {/* Map Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <motion.div 
          className="bg-white border border-slate-200/60 rounded-3xl p-4 shadow-lg overflow-hidden h-[400px] relative group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating Location Card */}
          <div className="absolute top-8 left-8 z-10 bg-slate-900/95 backdrop-blur-md border border-slate-800 text-white rounded-2xl p-5 shadow-2xl max-w-xs pointer-events-none md:block hidden">
            <span className="bg-amber-500 text-slate-950 font-black text-[9px] uppercase tracking-wider px-2 py-0.5 rounded mb-2 inline-block">Academy Campus</span>
            <h4 className="font-heading font-extrabold text-sm mb-1">SkyBreeze Academy</h4>
            <p className="text-slate-350 text-xs leading-relaxed">
              No.22, 4th Cross, Ramalinga Colony, KK Pudur, Coimbatore - 641038.
            </p>
          </div>

          <iframe 
            src="https://maps.google.com/maps?q=No.22,%204th%20Cross,%20Ramalinga%20Colony,%20KK%20Pudur,%20Coimbatore%20-%20641038&t=&z=17&ie=UTF8&iwloc=&output=embed" 
            className="w-full h-full border-0 rounded-2xl filter grayscale contrast-115 group-hover:grayscale-0 transition-all duration-700" 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>

    </div>
  );
};
