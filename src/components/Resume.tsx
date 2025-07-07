import React from 'react';
import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          RESUME
        </h2>
        
        <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8 glow-box hover:border-cyan-400 transition-all duration-300">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-cyan-400">Download My Resume</h3>
              <p className="text-gray-300 text-lg">
                Get a comprehensive overview of my skills, experience, and projects
              </p>
            </div>
            
            <button className="group inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 glow-button">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Download Resume</span>
            </button>
            
            <p className="text-sm text-gray-400">
              PDF format • Updated recently
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;