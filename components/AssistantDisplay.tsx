
import React from 'react';
import { Assistant, Feature } from '../types';
import useIntersectionObserver from './useIntersectionObserver';

interface AssistantDisplayProps {
  assistant: Assistant;
}

const AssistantDisplay: React.FC<AssistantDisplayProps> = ({ assistant }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 }); 

  const animationBaseClass = "animate-on-scroll";

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isComingSoon = assistant.ctaButtonText === "Coming Soon";

  const gradientClasses = `bg-gradient-to-r ${assistant.gradientFrom.replace('from-','from-').replace('-900','-600').replace('-800','-600').replace('-700','-500')} ${assistant.gradientTo.replace('to-','to-').replace('-800','-500').replace('-600','-500').replace('-500','-400')}`;

  const coreStylingClasses = `text-white font-semibold py-3 px-8 sm:py-3.5 sm:px-10 rounded-lg text-md sm:text-lg 
                              transition-all duration-300 ease-in-out shadow-lg 
                              focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-[#141414] ${assistant.accentColor.replace('text-','ring-')}
                              ${animationBaseClass} initial-scale-up-sm ${isVisible ? 'is-visible delay-700' : ''}`;

  const interactiveClasses = `hover:brightness-125 transform hover:scale-105 hover:shadow-current`;
  const disabledClasses = `opacity-60 cursor-not-allowed`;

  let ctaButtonElement;

  if (isComingSoon) {
    ctaButtonElement = (
      <button
        disabled
        aria-label={assistant.ctaButtonText}
        className={`${gradientClasses} ${coreStylingClasses} ${disabledClasses}`}
      >
        {assistant.ctaButtonText}
      </button>
    );
  } else if (assistant.externalLink) {
    ctaButtonElement = (
      <a
        href={assistant.externalLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={assistant.ctaButtonText}
        className={`${gradientClasses} ${coreStylingClasses} ${interactiveClasses}`}
      >
        {assistant.ctaButtonText}
      </a>
    );
  } else if (assistant.ctaButtonText) { // Default to a contact button if not external and not "Coming Soon"
    ctaButtonElement = (
      <button
        onClick={scrollToContact}
        aria-label={assistant.ctaButtonText}
        className={`${gradientClasses} ${coreStylingClasses} ${interactiveClasses}`}
      >
        {assistant.ctaButtonText}
      </button>
    );
  }


  return (
    <section
      ref={ref}
      id={assistant.id}
      aria-labelledby={`${assistant.id}-heading`}
      className={`min-h-screen flex flex-col justify-center items-center py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${assistant.gradientFrom} ${assistant.gradientTo} overflow-hidden`}
    >
      <div 
        className={`container mx-auto max-w-6xl bg-[#141414]/80 backdrop-blur-xl p-6 sm:p-10 md:p-12 rounded-2xl shadow-2xl border border-gray-700/40 
                    transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                    contain-layout contain-paint contain-style`} // Added contain property for performance
      >
        <div className={`text-center mb-10 md:mb-14 ${animationBaseClass} initial-slide-down ${isVisible ? 'is-visible delay-100' : ''}`}>
          <h2 id={`${assistant.id}-heading`} className={`text-4xl sm:text-5xl md:text-6xl font-bold ${assistant.accentColor} mb-3 sm:mb-4`}>{assistant.name}</h2>
          <p className="text-xl sm:text-2xl text-gray-300 font-light">{assistant.tagline}</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
          <div className="md:col-span-3 space-y-8">
            <p className={`text-gray-200 text-lg sm:text-xl leading-relaxed ${animationBaseClass} initial-slide-right ${isVisible ? 'is-visible delay-200' : ''}`}>
              {assistant.description}
            </p>
            <div className={`${animationBaseClass} initial-slide-right ${isVisible ? 'is-visible delay-300' : ''}`}>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 sm:mb-8">Key Features:</h3>
              <ul className="space-y-4 sm:space-y-5">
                {assistant.features.map((feature: Feature, index: number) => (
                  <li 
                    key={index} 
                    className={`flex items-start p-3 sm:p-4 bg-[#1f1f1f]/70 rounded-xl hover:bg-[#2a2a2a]/80 transition-all duration-200 ease-in-out transform hover:shadow-lg hover:-translate-y-1 
                                ${animationBaseClass} initial-slide-right ${isVisible ? `is-visible delay-${300 + (index + 1) * 100}` : ''}`}
                  >
                    <span className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-700/50 flex items-center justify-center mr-3 sm:mr-4 ${assistant.accentColor.replace('text-', 'bg-').replace('-400','-500/30')}`}>
                      {React.cloneElement(feature.icon, { className: `w-4 h-4 sm:w-5 sm:h-5 ${assistant.accentColor}` })}
                    </span>
                    <div>
                      <h4 className="font-semibold text-md sm:text-lg text-white">{feature.name}</h4>
                      <p className="text-gray-300 text-sm sm:text-base">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
             {/* CTA Section */}
            {assistant.ctaTagline && assistant.ctaButtonText && (
              <div className={`mt-10 pt-6 border-t border-gray-700/50 text-center md:text-left ${animationBaseClass} initial-fade ${isVisible ? 'is-visible delay-700' : ''}`}>
                <p className={`text-lg sm:text-xl ${assistant.accentColor} font-semibold mb-4 ${animationBaseClass} initial-slide-up ${isVisible ? 'is-visible delay-700' : ''}`}>
                  {assistant.ctaTagline}
                </p>
                {ctaButtonElement}
              </div>
            )}
          </div>

          <div className={`md:col-span-2 flex justify-center items-start pt-4 md:pt-0 group ${animationBaseClass} initial-scale-up-sm ${isVisible ? 'is-visible delay-400' : ''}`}>
            <img
              src={assistant.screenshotUrl}
              alt={`${assistant.name} application screenshot`}
              className="rounded-xl shadow-2xl w-full max-w-md lg:max-w-lg border-2 border-gray-600/70 object-cover transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-blue-500/30"
              style={{ aspectRatio: '16/10' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistantDisplay;
