import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, GraduationCap, Phone } from 'lucide-react';
import GradientMenu from '@/components/ui/gradient-menu';
import logoTransparent from '../assets/logotransparent.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 glassmorphism shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo & Branding */}
          <NavLink to="/" onClick={closeMenu} className="flex items-center space-x-3 group">
            <img 
              src={logoTransparent} 
              alt="SkyBreeze Academy Logo" 
              className="h-24 w-auto py-1.5 object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <div>
              <span className="block font-heading text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors duration-300">
                SKYBREEZE ACADEMY
              </span>
              <span className="block text-xs font-medium text-slate-300 tracking-wider">
                (Group of SkyBreeze AC Solutions)
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation Links (dynamic gradient-menu component integrated) */}
          <div className="hidden md:flex">
            <GradientMenu />
          </div>

          {/* Call To Action Header Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+919486112661" 
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-300 text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>+91 94861 12661</span>
            </a>
            <NavLink 
              to="/contact" 
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-300 shadow-md hover:shadow-red-600/20"
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              Enroll Now
            </NavLink>
          </div>

          {/* Hamburger Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay & Content */}
      <div 
        className={`md:hidden absolute top-24 left-0 w-full bg-slate-900 border-b border-slate-800 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 space-y-3 sm:px-3 shadow-xl">
          <NavLink 
            to="/" 
            onClick={closeMenu}
            className={({ isActive }) => 
              `block text-center px-3 py-2.5 rounded-md text-base font-semibold transition-colors ${
                isActive ? 'text-amber-400 bg-slate-800' : 'text-slate-300 hover:text-white hover:bg-slate-850'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/programs" 
            onClick={closeMenu}
            className={({ isActive }) => 
              `block text-center px-3 py-2.5 rounded-md text-base font-semibold transition-colors ${
                isActive ? 'text-amber-400 bg-slate-800' : 'text-slate-300 hover:text-white hover:bg-slate-850'
              }`
            }
          >
            Programs
          </NavLink>
          <NavLink 
            to="/about" 
            onClick={closeMenu}
            className={({ isActive }) => 
              `block text-center px-3 py-2.5 rounded-md text-base font-semibold transition-colors ${
                isActive ? 'text-amber-400 bg-slate-800' : 'text-slate-300 hover:text-white hover:bg-slate-850'
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink 
            to="/gallery" 
            onClick={closeMenu}
            className={({ isActive }) => 
              `block text-center px-3 py-2.5 rounded-md text-base font-semibold transition-colors ${
                isActive ? 'text-amber-400 bg-slate-800' : 'text-slate-300 hover:text-white hover:bg-slate-850'
              }`
            }
          >
            Gallery
          </NavLink>
          <NavLink 
            to="/contact" 
            onClick={closeMenu}
            className={({ isActive }) => 
              `block text-center px-3 py-2.5 rounded-md text-base font-semibold transition-colors ${
                isActive ? 'text-amber-400 bg-slate-800' : 'text-slate-300 hover:text-white hover:bg-slate-850'
              }`
            }
          >
            Contact
          </NavLink>
          
          <div className="pt-4 border-t border-slate-800 flex flex-col space-y-3">
            <a 
              href="tel:+919486112661" 
              className="flex items-center justify-center space-x-2 px-3 text-slate-300 hover:text-white font-medium"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>+91 94861 12661</span>
            </a>
            <NavLink 
              to="/contact" 
              onClick={closeMenu}
              className="flex items-center justify-center w-full px-4 py-3 rounded-lg text-base font-bold text-white bg-red-600 hover:bg-red-700 shadow-md transition-colors"
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Enroll Now
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
