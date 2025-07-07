import React from 'react';
import profilePic from '../1000018762.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <img src={profilePic} alt="Profile" className="rounded-full w-40 h-40 object-cover border-4 border-cyan-400 shadow-lg" />
        </div>
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          ABOUT ME
        </h2>
        
        <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8 glow-box hover:border-cyan-400 transition-all duration-300">
          <div className="space-y-8">
            {/* Professional Bio */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-cyan-400">Professional Bio</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Hi! I'm Manan Joshi, a B.Tech Computer Science student at Arya College of Engineering. 
                I'm passionate about building real-world projects using Python, Machine Learning, and 
                Full Stack technologies. I've created multiple dashboards using Streamlit, worked on 
                AI-based solutions, and enjoy turning ideas into reality through code. My goal is to 
                grow as a developer while contributing to innovative and meaningful tech initiatives.
              </p>
            </div>

            {/* Key Skills & Expertise */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-cyan-400">Key Skills & Expertise</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✅</span>
                  <span className="text-gray-300">Customer Success – Increasing adoption, reducing churn</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✅</span>
                  <span className="text-gray-300">Technical Problem Solving – Breaking down complex problems</span>
                </div>
                <div className="flex items-center space-x-3 md:col-span-2">
                  <span className="text-green-400">✅</span>
                  <span className="text-gray-300">Relationship Building – Comfortable with everyone from students to Fortune 500</span>
                </div>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-cyan-400">Fun Fact</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                "Always had a pet since I was 6. Currently owning a dog. Loving all animals: dogs, cats, 
                hedgehogs, raccoons – you name it!" 🐶🐱🦔
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;