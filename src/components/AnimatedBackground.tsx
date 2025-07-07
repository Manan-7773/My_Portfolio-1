import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated waves */}
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
            <path 
              d="M0,400 C320,300 480,500 800,400 C1120,300 1280,500 1440,400 L1440,800 L0,800 Z" 
              fill="url(#wave1)" 
              className="animate-wave"
            />
            <path 
              d="M0,500 C320,400 480,600 800,500 C1120,400 1280,600 1440,500 L1440,800 L0,800 Z" 
              fill="url(#wave2)" 
              className="animate-wave-slow"
            />
            <defs>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0891b2" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;