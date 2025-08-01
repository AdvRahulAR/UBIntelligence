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
    </div>
  );
};

export default App;