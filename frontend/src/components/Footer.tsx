import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-stone-200 dark:border-slate-800 bg-stone-100 dark:bg-slate-900">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8">
        <div className="flex flex-col gap-4">
          <div className="font-['Newsreader'] italic text-indigo-950 dark:text-indigo-200 text-2xl font-bold">
            The Scholarly Engineer
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-['Work_Sans'] text-xs uppercase tracking-wider max-w-sm text-center md:text-left">
            © 2026 The Scholarly Engineer. Curated technical documentation for the modern artisan.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 font-['Work_Sans'] text-sm uppercase tracking-wider">
          <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-orange-700 dark:hover:text-orange-300 transition-all cursor-pointer active:opacity-70">
            Contact
          </a>
          <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-orange-700 dark:hover:text-orange-300 transition-all cursor-pointer active:opacity-70">
            LinkedIn
          </a>
          <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-orange-700 dark:hover:text-orange-300 transition-all cursor-pointer active:opacity-70">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
