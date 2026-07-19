import React from 'react';
import { RevealText } from '../components/RevealText';
import { ArrowRight, Map, BookOpen, Cpu, ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      <section className="relative px-8 md:px-24 py-24 md:py-32 grid grid-cols-12 gap-6 overflow-hidden">
        <div className="col-span-12 md:col-span-2 hidden md:block">
          <p className="marginalia sticky top-32 mt-4">Curated Exhibition 01</p>
        </div>
        <div className="col-span-12 md:col-span-7">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-8 leading-[1.1] tracking-tight">
            <RevealText as="span" text="Where Engineering Meets " delay={0.08} />
            <RevealText as="span" text="Philosophical Rigor." delay={0.08} className="italic" />
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl mb-12 font-light leading-relaxed">
            <RevealText as="span" text="A curated archive for electronics engineers who value precision over noise. From semiconductor physics to high-frequency design." delay={0.04} />
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/materials')} 
              className="hero-gradient text-on-primary px-8 py-4 rounded-md font-medium text-lg shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
            >
              Enter the Archive
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => navigate('/roadmap')}
              className="bg-surface-container-high text-on-secondary-container px-8 py-4 rounded-md font-medium text-lg hover:bg-secondary-container transition-all"
            >
              View Roadmap
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 relative h-64 md:h-auto">
          <div className="absolute inset-0 rounded-lg transform rotate-3 z-0 overflow-hidden shadow-lg border border-primary/10">
            <img 
              alt="Architecture" 
              className="w-full h-full object-cover opacity-80 mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            />
          </div>
          <img 
            alt="Technical Detail" 
            className="relative z-10 w-full h-full object-cover rounded-lg shadow-2xl filter contrast-125 block" 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
          />
        </div>
      </section>

      <section className="px-8 md:px-24 py-20 bg-surface-container">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <h2 className="marginalia sticky top-32">Resource Clusters</h2>
          </div>
          <div className="col-span-12 md:col-span-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/roadmap" className="group bg-surface-container-lowest p-8 rounded-lg flex flex-col justify-between hover:bg-primary transition-all duration-500 cursor-pointer overflow-hidden relative block decoration-transparent">
              <div className="relative z-10">
                <Map className="text-primary group-hover:text-primary-fixed-dim w-10 h-10 mb-6 transition-colors" />
                <h3 className="text-2xl font-bold text-on-surface group-hover:text-on-primary mb-4 transition-colors">Learning Roadmap</h3>
                <p className="text-on-surface-variant group-hover:text-primary-fixed text-sm leading-relaxed transition-colors">
                  A sequential guide from atomic structure to complex integrated circuit architecture.
                </p>
              </div>
              <div className="mt-8 relative z-10">
                <span className="text-primary group-hover:text-on-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  Start Journey <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link to="/materials" className="group bg-secondary-container p-8 rounded-lg flex flex-col justify-between hover:bg-on-secondary-container transition-all duration-500 cursor-pointer relative overflow-hidden block decoration-transparent">
              <div className="relative z-10">
                <BookOpen className="text-on-secondary-container group-hover:text-secondary-fixed w-10 h-10 mb-6 transition-colors" />
                <h3 className="text-2xl font-bold text-on-secondary-container group-hover:text-secondary-fixed mb-4 transition-colors">Study Materials</h3>
                <p className="text-on-secondary-container/80 group-hover:text-secondary-fixed/80 text-sm leading-relaxed transition-colors">
                  Peer-reviewed white papers, lecture notes, and derivation journals.
                </p>
              </div>
              <div className="mt-8 relative z-10">
                <span className="text-on-secondary-container group-hover:text-secondary-fixed text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  Explore Library <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link to="/projects" className="group bg-surface-container-lowest p-8 rounded-lg flex flex-col justify-between hover:bg-tertiary transition-all duration-500 cursor-pointer relative overflow-hidden block decoration-transparent">
              <div className="relative z-10">
                <Cpu className="text-tertiary group-hover:text-tertiary-fixed-dim w-10 h-10 mb-6 transition-colors" />
                <h3 className="text-2xl font-bold text-on-surface group-hover:text-on-tertiary mb-4 transition-colors">Project Hub</h3>
                <p className="text-on-surface-variant group-hover:text-tertiary-fixed text-sm leading-relaxed transition-colors">
                  Schematics, bill of materials, and firmware for advanced engineering builds.
                </p>
              </div>
              <div className="mt-8 relative z-10">
                <span className="text-tertiary group-hover:text-on-tertiary text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  Open Workbench <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-24 py-32 bg-stone-100 border-t border-stone-200">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <h2 className="marginalia">The Ethos</h2>
          </div>
          <div className="col-span-12 md:col-span-5">
            <h3 className="text-4xl font-bold text-primary mb-8 italic">
              <RevealText text="Documentation as Art." delay={0.08} />
            </h3>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              The Scholarly Engineer was founded on the belief that technical clarity is a form of craftsmanship. We don't just provide data; we curate understanding.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:offset-1 flex items-end">
            <div className="p-8 bg-surface-container-lowest border-l-4 border-secondary shadow-sm">
              <p className="font-['Newsreader'] italic text-2xl text-on-surface mb-4">
                "Precision is the point where art and mathematics become indistinguishable."
              </p>
              <cite className="text-xs font-bold uppercase tracking-widest text-secondary">— Foundation Manifesto, 2024</cite>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
