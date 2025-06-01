
import React, { useState, useEffect, useRef } from 'react';

interface IntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
}

const useIntersectionObserver = <T extends Element,>(
  options?: IntersectionObserverOptions
): [React.RefObject<T>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Default threshold, trigger when 10% is visible
        ...options,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, options?.threshold, options?.root, options?.rootMargin]); // Re-run if options change

  return [elementRef, isVisible];
};

export default useIntersectionObserver;
