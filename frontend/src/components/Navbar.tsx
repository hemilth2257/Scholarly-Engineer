import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-slate-600 dark:text-slate-400 hover:text-indigo-900 dark:hover:text-indigo-200 transition-colors duration-300 cursor-pointer active:opacity-70 ${
      isActive ? 'font-bold text-indigo-900 dark:text-indigo-200' : ''
    }`;

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-stone-50/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm dark:shadow-none">
        <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
          <NavLink to="/" className="text-2xl font-bold text-indigo-950 dark:text-indigo-100 font-['Newsreader'] tracking-tight cursor-pointer active:opacity-70 flex items-center">
            Scholarly Engineer
          </NavLink>
          <div className="hidden md:flex items-center gap-8 font-['Newsreader'] tracking-tight">
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>
            <NavLink to="/roadmap" className={navClass}>
              Roadmap
            </NavLink>
            <NavLink to="/materials" className={navClass}>
              Study Materials
            </NavLink>
            <NavLink to="/projects" className={navClass}>
              Project Hub
            </NavLink>
            <NavLink to="/analytics" className={navClass}>
              Analytics
            </NavLink>
          </div>
        </div>
        <div className="bg-stone-200/50 dark:bg-slate-800/50 h-[1px]"></div>
      </nav>
    </>
  );
};
