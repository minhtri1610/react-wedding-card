import React, { useState, useEffect, useRef } from 'react';

interface LazyLoadSectionProps {
  children: React.ReactNode;
  offset?: string;
  minHeight?: string | number;
}

/**
 * A wrapper component that only renders its children when it enters the viewport.
 * This is crucial for "real" lazy loading of components and their assets (images, etc).
 */
const LazyLoadSection: React.FC<LazyLoadSectionProps> = ({ 
  children, 
  offset = '300px', 
  minHeight = '100px' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: offset, // Load slightly before it enters the viewport
        threshold: 0.01
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      observer.disconnect();
    };
  }, [offset]);

  return (
    <div 
      ref={sectionRef} 
      style={{ 
        minHeight: isVisible ? 'auto' : minHeight,
        width: '100%' 
      }}
    >
      {isVisible ? children : null}
    </div>
  );
};

export default LazyLoadSection;
