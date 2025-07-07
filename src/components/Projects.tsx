import React from 'react';
import { ExternalLink, Monitor, Server } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Streamlit Menu-Based Project',
      description: 'Multi-page Streamlit application with various project categories',
      features: [
        'Main_Dashboard.py → entry point',
        'pages/ directory structure:',
        '• 1_🐍_Python_Projects.py',
        '• 2_🌐_FullStack_Dashboard.py',
        '• 3_🧠_GenAI.py',
        '• 4_🤖_ML_Projects.py'
      ],
      icon: Monitor,
      link: '#',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Docker + Jenkins + GitHub + K8s Project',
      description: 'Complete DevOps automation pipeline with containerization and orchestration',
      features: [
        'Automates Docker container execution',
        'GitHub integration for version control',
        'Jenkins CI/CD pipeline',
        'Kubernetes orchestration'
      ],
      progressBars: [
        { name: 'GitHub', progress: 70 },
        { name: 'Jenkins', progress: 80 },
        { name: 'Kubernetes', progress: 50 }
      ],
      icon: Server,
      link: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          PROJECTS
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">My Projects</p>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 glow-box hover:border-cyan-400 transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-full bg-gradient-to-br ${project.color} bg-opacity-20 border border-cyan-500/30`}>
                  <project.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {project.features.map((feature, idx) => (
                      <p key={idx} className="text-sm text-gray-400">{feature}</p>
                    ))}
                  </div>

                  {project.progressBars && (
                    <div className="space-y-3 mb-4">
                      {project.progressBars.map((bar, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">{bar.name}</span>
                            <span className="text-cyan-400">{bar.progress}%</span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${bar.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <a 
                    href={project.link}
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;