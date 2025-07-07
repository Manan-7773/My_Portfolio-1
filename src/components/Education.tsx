import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          EDUCATION
        </h2>
        
        <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8 glow-box hover:border-cyan-400 transition-all duration-300">
          <div className="flex items-start space-x-6">
            <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
              <GraduationCap className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
                  B.Tech in Computer Science Engineering (CSE)
                </h3>
                <p className="text-xl text-gray-300 mb-2">Arya College of Engineering</p>
                <p className="text-gray-400">Currently studying</p>
              </div>
              <div className="pt-4 border-t border-gray-700">
                <p className="text-gray-300">
                  Pursuing a comprehensive education in Computer Science with focus on software development, 
                  algorithms, data structures, and modern computing technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;