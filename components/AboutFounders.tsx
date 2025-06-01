import React from 'react';
import { FOUNDERS_DATA } from '../constants';
import FounderProfile from './FounderProfile';
import useIntersectionObserver from './useIntersectionObserver';


interface AboutFoundersProps {
  id: string;
}

const AboutFounders: React.FC<AboutFoundersProps> = ({ id }) => {
  const [titleRef, isTitleVisible] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.15 });
  
  const animationDelays = ['delay-0', 'delay-200', 'delay-400']; // Stagger delays

  return (
    <section id={id} className="py-24 sm:py-32 bg-[#0F0F0F] px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 
          ref={titleRef} 
          className={`text-4xl sm:text-5xl font-bold text-center text-white mb-16 sm:mb-20 
                      animate-on-scroll initial-slide-down ${isTitleVisible ? 'is-visible' : ''}`}
        >
          Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Founding Team</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {FOUNDERS_DATA.map((founder, index) => (
            <FounderProfile 
              key={founder.id} 
              founder={founder} 
              animationDelay={animationDelays[index % animationDelays.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFounders;