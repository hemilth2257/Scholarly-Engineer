import React from 'react';
import { RevealText } from '../components/RevealText';

export const AnalyticsPage: React.FC = () => {
  return (
    <div className="pt-20 px-8 md:px-24 py-16 bg-surface min-h-screen">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-primary mb-4 font-['Newsreader']">
          <RevealText text="Curriculum Analytics" delay={0.05} />
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl">
          Data-driven insights into course workloads, credit distributions, and prerequisites.
        </p>
      </div>
      
      <div className="w-full bg-surface-container-lowest rounded-xl p-2 shadow-sm border border-stone-200">
        <iframe 
          src="http://localhost:8503/" 
          className="w-full h-[80vh] border-none rounded-lg shadow-xl" 
          title="Curriculum Analytics" 
        />
      </div>
    </div>
  );
};
