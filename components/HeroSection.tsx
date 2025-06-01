import React from 'react';
import { UB_INTELLIGENCE_LOGO } from '../constants';

const HeroSection: React.FC = () => {
  const scrollToAssistants = () => {
    const assistantsSection = document.getElementById('assistants');
    if (assistantsSection) {
      assistantsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center text-center bg-[#0a0a0a] relative px-4 sm:px-6 lg:px-8"
      // Removed hero-gradient-bg, direct background color applied
    >
      {/* Optional: Subtle decorative elements if needed later
      <div className="absolute inset-0 opacity-5 overflow-hidden">
         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="#222" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#smallGrid)" /></svg>
      </div>
      */}
      <div className="relative z-10 py-16">
        <div className="mb-10 inline-block transform transition-transform duration-500 hover:scale-105">
          {React.cloneElement(UB_INTELLIGENCE_LOGO, { className: "text-5xl sm:text-6xl font-extrabold tracking-tight"})}
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-400 mb-8 leading-tight">
          Pioneering Intelligence,<br /> Empowering Your Future.
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          UB Intelligence crafts specialized AI Assistants to revolutionize industries, enhance productivity, and unlock new possibilities. Experience the future, today.
        </p>
        <button
          onClick={scrollToAssistants}
          aria-label="Discover Our AI Assistants"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3.5 px-10 sm:py-4 sm:px-12 rounded-xl text-lg sm:text-xl transition-all duration-300 ease-in-out transform hover:scale-110 shadow-2xl hover:shadow-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Discover Our AI Assistants
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 opacity-70 animate-bounce hidden md:block">
        <svg className="w-10 h-10 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;