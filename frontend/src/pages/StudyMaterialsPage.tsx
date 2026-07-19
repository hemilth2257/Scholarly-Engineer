import React, { useState } from 'react';
import { RevealText } from '../components/RevealText';
import { FileText, Download, Lock } from 'lucide-react';

const GDRIVE_LINK = "https://drive.google.com/drive/folders/1U4COHO6s_Hk3TYmjAqoM2wDWcweMRQ6x?usp=sharing";

const allSemestersData: Record<number, { code: string, title: string }[]> = {
  1: [
    { code: '101HS', title: 'English for Technical Communication' },
    { code: '101BS', title: 'Mathematics - I' },
    { code: '104BS', title: 'Semiconductor Physics' },
    { code: '103ES', title: 'Programming for Problem Solving' },
    { code: '113ES', title: 'Basic Electronics' },
    { code: '107SB', title: 'Idea Lab Workshop' }
  ],
  2: [
    { code: '104HS', title: 'Universal Human Values' },
    { code: '105BS', title: 'Mathematics - II' },
    { code: '106BS', title: 'Test and Measurement Tools' },
    { code: '115ES', title: 'Semiconductor Devices' },
    { code: '121ES', title: 'Python Programming' },
    { code: '113SB', title: 'Computer Aided Circuit Drawing' },
    { code: '102PW', title: 'Micro Project' },
    { code: '121HS', title: 'Environmental Science' }
  ],
  3: [
    { code: '205BS', title: 'Electromagnetic Waves' },
    { code: '201EL', title: 'Analog Circuits' },
    { code: '202EL', title: 'Digital Logic Design' },
    { code: '203EL', title: 'Signals and Systems' },
    { code: '204EL', title: 'Network Analysis' },
    { code: '201HS', title: 'Economics and Management' }
  ],
  4: [
    { code: '201BS', title: 'Mathematics - III' },
    { code: '205EL', title: 'Analog Integrated Circuit' },
    { code: '206EL', title: 'Microcontrollers' },
    { code: '207EL', title: 'Analog and Digital Communication' },
    { code: '208EL', title: 'Control Systems' },
    { code: '202PW', title: 'Mini Project' }
  ],
  5: [
    { code: '301EL', title: 'Probability Theory and Stochastic Processes' },
    { code: '302EL', title: 'Embedded Systems' },
    { code: '303EL', title: 'Industrial Automation' },
    { code: '304EL', title: 'VLSI Design' },
    { code: '302PW', title: 'Guided Research and Reading on Indian Knowledge System' },
    { code: '301HS', title: 'Ethics and Constitution of India' }
  ],
  6: [
    { code: '305EL', title: 'Digital Signal Processing' },
    { code: '306EL', title: 'HDL based Digital System Design' },
    { code: '307EL', title: 'Antennas Wave Propagation' },
    { code: '308EL', title: 'Electronics System Design Laboratory' },
    { code: '303PW', title: 'Guided Research Reading for Modern Engineering' },
    { code: 'ELEC-I', title: 'Program Elective - I' },
    { code: 'OE-II', title: 'Open Elective - II' }
  ],
  7: [
    { code: '401EL', title: 'Power Electronics & Drives' },
    { code: '402EL', title: 'Internet of Things (IoT) and Machine Learning (ML)' },
    { code: '403EL', title: 'Wireless Communication' },
    { code: '404EL', title: 'Computer Networks' },
    { code: '413PW', title: 'Project-I' },
    { code: 'ELEC-II', title: 'Program Elective - II' }
  ],
  8: [
    { code: 'ELEC-III', title: 'Program Elective - III' },
    { code: 'ELEC-IV', title: 'Program Elective - IV' },
    { code: '414PW', title: 'Project-II' }
  ]
};

export const StudyMaterialsPage: React.FC = () => {
  const [activeSemester, setActiveSemester] = useState<number>(1);
  const materials = allSemestersData[activeSemester];

  return (
    <div className="pt-20 px-8 md:px-24 py-16 bg-surface min-h-screen">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-primary mb-4 font-['Newsreader']">
          <RevealText text="Study Materials & Archives" delay={0.05} />
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl">
          Curated white papers, lecture notes, and detailed derivations categorized by semester.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-12">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
          <button 
            key={sem}
            onClick={() => setActiveSemester(sem)}
            className={`px-6 py-2 rounded-md font-medium text-sm transition-all border ${
              activeSemester === sem 
              ? 'bg-primary text-on-primary border-primary shadow-md' 
              : 'bg-surface-container text-on-surface-variant border-transparent hover:bg-surface-container-high'
            }`}
          >
            Semester {sem}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map((mat, index) => (
          <div key={index} className="bg-surface-container-lowest p-6 rounded-lg border border-stone-200 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-secondary-container rounded-md text-on-secondary-container">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">{mat.code}</span>
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-2 font-['Work_Sans']">{mat.title}</h3>
            </div>
            
            <div className="mt-8 h-[1px] bg-stone-100 mb-4 w-full" />
            
            {activeSemester <= 2 ? (
              <a 
                href={GDRIVE_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between text-primary hover:text-primary-container font-semibold transition-colors group"
              >
                <span>Access Material</span>
                <Download className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" />
              </a>
            ) : (
              <button 
                disabled
                className="flex items-center justify-between text-on-surface-variant/50 font-semibold cursor-not-allowed group w-full"
              >
                <span>Coming Soon</span>
                <Lock className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
