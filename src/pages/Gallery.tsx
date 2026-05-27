import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, type Variants, AnimatePresence } from 'framer-motion';
import { Camera, ChevronRight, ChevronLeft, X } from 'lucide-react';
import galleryVideo from '../assets/galleryvideo.mp4';

// ─── Real Academy Image Imports ─────────────────────────────────
import brochure1 from '../assets/sky2/brochure1.jpeg';
import brochure2 from '../assets/sky2/brochure2.jpeg';
import brochure3 from '../assets/sky2/brochure3.jpeg';
import classroom1_0 from '../assets/sky2/classroom1.0.jpeg';
import classroom1 from '../assets/sky2/classroom1.jpeg';
import entrance from '../assets/sky2/entrance.jpeg';
import internship from '../assets/sky2/internship.jpeg';
import pamplet from '../assets/sky2/pamplet.jpeg';

// ─── Gallery Data ──────────────────────────────────────────────
interface GalleryItem {
  id: number;
  src: string;
  title: string;
  desc: string;
  category: 'lab' | 'field' | 'ceremony' | 'campus';
  span?: 'wide' | 'tall' | 'normal';
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: entrance,
    title: 'Academy Main Entrance',
    desc: 'Welcome to Coimbatore\'s premier vocational training hub for HVAC and Air Conditioning studies.',
    category: 'campus',
    span: 'wide',
  },
  {
    id: 2,
    src: classroom1,
    title: 'Modern Digital Classroom',
    desc: 'Comfortable air-conditioned theory classroom equipped with multimedia tools for schematic studies.',
    category: 'campus',
  },
  {
    id: 3,
    src: internship,
    title: 'Live Commercial Site Placement',
    desc: 'Students deployed on live project sites for hands-on exposure to HVAC structural building layouts.',
    category: 'field',
    span: 'wide',
  },
  {
    id: 4,
    src: classroom1_0,
    title: 'Audio-Visual Theory Session',
    desc: 'Interactive lectures exploring refrigerants, dynamic pressure metrics, and circuit schematics.',
    category: 'campus',
  },
  {
    id: 5,
    src: brochure1,
    title: 'Vibrant Syllabus Structure',
    desc: 'Our updated HVAC syllabus features VRV/VRF, central chillers, and digital diagnostics.',
    category: 'campus',
  },
  {
    id: 6,
    src: brochure2,
    title: 'Course Benefits & Amenities',
    desc: 'Comprehensive highlights covering dynamic hostel options, stipend support, and placement guarantee.',
    category: 'campus',
    span: 'wide',
  },
  {
    id: 7,
    src: brochure3,
    title: 'Academy Roadmap Leaflet',
    desc: 'Clear pathways highlighting transition milestones from dynamic theory to practical on-site wizardry.',
    category: 'campus',
  },
  {
    id: 8,
    src: pamplet,
    title: 'Quick Careers Guidebook',
    desc: 'Course modular options, flexible timelines, fees concessions, and key placement partnerships.',
    category: 'campus',
  },
];

// ─── Component ────────────────────────────────────────────────
export const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null));
      } else if (e.key === 'Escape') {
        setLightboxIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 85,
        damping: 14,
        delay: Math.min(i * 0.05, 0.6),
      },
    }),
  };

  return (
    <div className="bg-slate-950 min-h-screen text-white">

      {/* ── Full-Bleed Hero Video — no text, pure video ── */}
      <section className="relative w-full bg-slate-950">
        <video
          src={galleryVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto block"
        />
        {/* Only a very subtle bottom edge fade to merge into page */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
      </section>

      {/* ── Title Section — below the video ── */}
      <section className="bg-slate-950 pt-10 pb-6 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-amber-400/60 bg-amber-400/15 text-amber-400 text-xs font-bold uppercase tracking-widest"
        >
          <Camera className="w-3.5 h-3.5" />
          Our Gallery
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 text-white"
        >
          Life at{' '}
          <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
            SkyBreeze Academy
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-xl mx-auto text-slate-400 text-base md:text-lg leading-relaxed"
        >
          From hands-on lab sessions to certificate ceremonies — witness the journey
          of South Tamil Nadu's future HVAC professionals.
        </motion.p>
      </section>

      {/* ── Masonry-style Photo Grid ── */}
      <section className="max-w-7xl mx-auto px-4 pb-24 pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
              onClick={() => setLightboxIndex(i)}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group border border-slate-800/80 hover:border-amber-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 ${item.span === 'wide' ? 'sm:col-span-2' : ''
                }`}
            >
              {/* Photo */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Luxury skew light flash effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

              {/* Premium dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />


              {/* Info Caption inside Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <h3 className="font-heading font-bold text-white text-base md:text-lg mb-1 leading-tight">{item.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">{item.desc}</p>
              </div>

              {/* Camera expand icon */}
              <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/45 border border-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <Camera className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Lightbox Carousel ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 select-none"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors z-50 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Previous Arrow Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null));
              }}
              className="absolute left-4 sm:left-6 w-12 h-12 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer z-50 hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Arrow Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null));
              }}
              className="absolute right-4 sm:right-6 w-12 h-12 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer z-50 hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Wrapper Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              className="max-w-4xl w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/60 shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              {/* Slideshow image with wait anim */}
              <div className="relative w-full max-h-[70vh] aspect-auto flex justify-center items-center bg-black/40 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={lightboxIndex}
                    src={galleryItems[lightboxIndex].src}
                    alt={galleryItems[lightboxIndex].title}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="w-full max-h-[65vh] object-contain object-center"
                  />
                </AnimatePresence>
              </div>

              {/* Caption Card Details */}
              <div className="bg-slate-900/90 border-t border-slate-800 px-6 py-5 relative">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[11px] font-bold text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700/40">
                    Photo {lightboxIndex + 1} of {galleryItems.length}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-1">{galleryItems[lightboxIndex].title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{galleryItems[lightboxIndex].desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CTA Section ── */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-t border-slate-800">
        {/* Glow orbs */}
        <div className="absolute top-[-60px] left-1/4 w-72 h-72 rounded-full bg-amber-500/8 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-60px] right-1/4 w-72 h-72 rounded-full bg-sky-500/8 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3"
          >
            Join the Academy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight"
          >
            Ready to Start Your{' '}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              HVAC Career?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-slate-400 text-base mb-8 leading-relaxed"
          >
            Enroll today and become part of the SkyBreeze Academy success story.
            Government-affiliated, industry-ready training from Coimbatore.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.26 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-sm transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-400/25"
            >
              Enroll Now
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/programs')}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-800/60 hover:bg-slate-800 text-white font-semibold text-sm transition-all duration-300 hover:scale-105"
            >
              View Programs
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
