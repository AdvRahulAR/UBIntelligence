import React, { useState, useEffect, useRef } from 'react';
import { ProgressSection } from '../types';

interface ScrollProgressIndicatorProps {
  sections: ProgressSection[];
}

const ScrollProgressIndicator: React.FC<ScrollProgressIndicatorProps> = ({ sections }) => {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(sections.length > 0 ? sections[0].id : null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      const intersectingEntries = entries.filter(entry => entry.isIntersecting);
      
      if (intersectingEntries.length > 0) {
        // Find the entry that is most visible or "highest" on the page
        // This logic prioritizes entries that are more than 30% visible,
        // or if none, the one that's simply intersecting and highest on screen.
        let bestEntry = intersectingEntries.reduce((prev, current) => {
          if (prev.intersectionRatio > current.intersectionRatio) {
            return prev;
          }
          if (prev.intersectionRatio < current.intersectionRatio) {
            return current;
          }
          // If ratios are equal, pick the one higher on the page
          return (prev.target.getBoundingClientRect().top < current.target.getBoundingClientRect().top) ? prev : current;
        });
        
        // A section is "active" if it's at least 30% visible.
        // This helps avoid highlighting sections that are barely on screen.
        if (bestEntry.intersectionRatio > 0.3) {
           setActiveSectionId(bestEntry.target.id);
        } else if (intersectingEntries.length === 1 && intersectingEntries[0].intersectionRatio > 0.05) {
          // If only one section is slightly visible, make it active.
          setActiveSectionId(intersectingEntries[0].target.id);
        }
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      rootMargin: '-40% 0px -40% 0px', // Active when section is in the middle 20% of the viewport
      threshold: [0.01, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], // Multiple thresholds for better ratio data
    });

    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        sectionRefs.current[section.id] = element;
        observerRef.current?.observe(element);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sections]);

  const handleDotClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!sections || sections.length === 0) return null;

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 pr-3 sm:pr-4 hidden md:flex flex-col space-y-2 items-center">
      {sections.map(section => (
        <button
          key={section.id}
          title={`Go to ${section.name}`}
          aria-label={`Scroll to ${section.name} section`}
          onClick={() => handleDotClick(section.id)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]
                      ${activeSectionId === section.id ? 'bg-blue-500 scale-125 ring-blue-500' : 'bg-gray-600 hover:bg-gray-400'}`}
        />
      ))}
    </div>
  );
};

export default ScrollProgressIndicator;
