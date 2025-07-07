import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'DevOps', level: 30 },
    { name: 'Linux', level: 40 },
    { name: 'Kubernetes', level: 15 },
    { name: 'Jenkins', level: 20 },
    { name: 'Full Stack', level: 25 },
    { name: 'Python', level: 20 },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          SKILLS
        </h2>
        
        <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8 glow-box hover:border-cyan-400 transition-all duration-300">
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-300">{skill.name}</span>
                  <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out glow-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;