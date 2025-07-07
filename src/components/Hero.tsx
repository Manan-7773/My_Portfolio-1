import React from 'react';
import { Github, Instagram, Linkedin, ChevronDown } from 'lucide-react';
import profilePic from '../1000018762.jpg';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Manan-7773', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/manan_7773?igsh=bGRzNnZqYjB0aDBt', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/public-profile/settings', label: 'LinkedIn' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Manan Joshi
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-medium">
                DevOps Developer | CSE Student
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="text-cyan-400">📎</span>
                <span className="text-lg">mananj295@gmail.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800/50 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:bg-cyan-500/10 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center backdrop-blur-sm hover:border-cyan-400 transition-all duration-300 hover:scale-105 glow-box">
                <div className="text-center space-y-4">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 mx-auto flex items-center justify-center text-4xl font-bold text-white">
                    <img src={profilePic} alt="Profile" className="w-48 h-48 rounded-full object-cover border-4 border-cyan-400 shadow-lg" />
                  </div>
                  <p className="text-gray-300 text-lg">Profile Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="flex justify-center mt-16">
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;