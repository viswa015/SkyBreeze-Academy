import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IoHomeOutline, IoSchoolOutline, IoInformationCircleOutline, IoCallOutline, IoImagesOutline } from 'react-icons/io5';

interface MenuItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

const menuItems: MenuItem[] = [
  { title: 'Home',     path: '/',        icon: <IoHomeOutline />,              gradientFrom: '#3b82f6', gradientTo: '#06b6d4' },
  { title: 'Programs', path: '/programs', icon: <IoSchoolOutline />,            gradientFrom: '#f59e0b', gradientTo: '#ef4444' },
  { title: 'About',    path: '/about',    icon: <IoInformationCircleOutline />, gradientFrom: '#10b981', gradientTo: '#3b82f6' },
  { title: 'Gallery',  path: '/gallery',  icon: <IoImagesOutline />,            gradientFrom: '#8b5cf6', gradientTo: '#ec4899' },
  { title: 'Contact',  path: '/contact',  icon: <IoCallOutline />,              gradientFrom: '#ec4899', gradientTo: '#f43f5e' },
];

export default function GradientMenu() {
  const location = useLocation();

  return (
    <div className="flex justify-center items-center py-2 bg-transparent">
      <ul className="flex gap-4 sm:gap-6">
        {menuItems.map(({ title, path, icon, gradientFrom, gradientTo }, idx) => {
          const isActive = location.pathname === path;

          return (
            <li
              key={idx}
              style={{ 
                color: 'var(--text-color)',
                ['--gradient-from' as any]: gradientFrom, 
                ['--gradient-to' as any]: gradientTo 
              }}
              className={`relative w-[50px] h-[50px] bg-slate-900 rounded-full flex items-center justify-center transition-all duration-500 hover:w-[130px] hover:shadow-none group cursor-pointer border ${
                isActive 
                  ? 'border-amber-400 shadow-[0_4px_12px_rgba(245,158,11,0.2)]' 
                  : 'border-slate-800 shadow-md'
              }`}
            >
              <NavLink
                to={path}
                className="absolute inset-0 rounded-full flex items-center justify-center w-full h-full no-underline"
              >
                {/* Gradient background on hover */}
                <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100"></span>
                {/* Blur glow */}
                <span className="absolute top-[8px] inset-x-0 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] blur-[10px] opacity-0 -z-10 transition-all duration-500 group-hover:opacity-40"></span>

                {/* Icon */}
                <span className="relative z-10 transition-all duration-500 group-hover:scale-0 delay-0">
                  <span className="text-xl text-slate-300 group-hover:text-white transition-colors">{icon}</span>
                </span>

                {/* Title */}
                <span className="absolute text-white uppercase tracking-wider text-[10px] font-bold transition-all duration-500 scale-0 group-hover:scale-100 delay-75">
                  {title}
                </span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
