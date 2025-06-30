import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AssistantsShowcase from './components/AssistantsShowcase';
import AboutFounders from './components/AboutFounders';
import Footer from './components/Footer';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';
import { NAV_ITEMS, ASSISTANTS_DATA } from './constants';

const App: React.FC = () => {
  const assistantSections = ASSISTANTS_DATA.map(assistant => ({
    id: assistant.id,
    name: assistant.name, // Or a shorter name/icon for the dot
  }));

  return (
    <div className="text-gray-100 min-h-screen selection:bg-blue-500 selection:text-white">
      <Navbar navItems={NAV_ITEMS} />
      <ScrollProgressIndicator sections={assistantSections} />
      <main>
        <HeroSection />
        <AssistantsShowcase id="assistants" />
        <AboutFounders id="about" />
      </main>
      <Footer id="contact" />
      
      {/* Floating Badge */}
      <img
        src="/white_circle_360x360.svg"
        alt="UB Intelligence floating badge"
        className="fixed bottom-4 right-4 z-50 w-20 h-20 cursor-pointer transition-transform duration-300 hover:scale-110"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </div>
  );
};

export default App;