import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/Manan-7773', 
      label: 'GitHub',
      color: 'hover:text-gray-300' 
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/manan_7773?igsh=bGRzNnZqYjB0aDBt', 
      label: 'Instagram',
      color: 'hover:text-pink-400' 
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/public-profile/settings', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400' 
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Let's Connect!
        </h2>
        
        <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8 glow-box hover:border-cyan-400 transition-all duration-300">
          <div className="text-center space-y-8">
            <p className="text-gray-300 text-lg">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>
            
            <div className="flex justify-center space-x-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-4 rounded-full bg-slate-700/50 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-8 h-8 text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" />
                  <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
            
            <div className="pt-8 border-t border-gray-700">
              <p className="text-gray-400">
                mananj295@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;