import React from 'react';
import { Founder } from '../types';
import LinkedInIcon from './icons/LinkedInIcon';
import useIntersectionObserver from './useIntersectionObserver';


interface FounderProfileProps {
  founder: Founder;
  animationDelay?: string; // e.g., 'delay-100', 'delay-200'
}

const FounderProfile: React.FC<FounderProfileProps> = ({ founder, animationDelay = 'delay-0' }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`bg-[#181818] p-6 sm:p-8 rounded-xl shadow-2xl text-center transform transition-all duration-500 ease-out hover:shadow-blue-500/30 hover:-translate-y-2 border border-gray-700/50 
                  animate-on-scroll initial-slide-up ${isVisible ? `is-visible ${animationDelay}` : ''}`}
    >
      <img
        src={founder.imageUrl}
        alt={founder.name}
        className="w-32 h-32 sm:w-36 sm:h-36 rounded-full mx-auto mb-5 sm:mb-6 border-4 border-blue-500/70 object-cover shadow-lg"
        loading="lazy"
      />
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1 sm:mb-1.5">{founder.name}</h3>
      <p className={`${founder.accentColor || 'text-blue-400'} text-sm sm:text-md mb-3 sm:mb-4`}>{founder.title}</p> {/* Added optional accent color */}
      <p className="text-gray-300 text-sm sm:text-base mb-5 sm:mb-6 px-1 sm:px-2 leading-relaxed">{founder.bio}</p>
      <a
        href={founder.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
        aria-label={`${founder.name}'s LinkedIn Profile`}
      >
        <LinkedInIcon className="w-7 h-7 sm:w-8 sm:h-8" />
      </a>
    </div>
  );
};

export default FounderProfile;