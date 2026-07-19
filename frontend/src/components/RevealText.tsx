import React, { useEffect, useRef } from 'react';

interface RevealTextProps {
  text: string;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}

export const RevealText: React.FC<RevealTextProps> = ({ text, delay = 0.08, className = '', as: Component = 'span' }) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const words = text.split(' ');

  return (
    <Component 
      ref={containerRef} 
      className={`reveal-text ${className}`} 
      data-reveal-delay={delay}
    >
      {words.map((word, index) => (
        <span 
          key={index} 
          className="reveal-word" 
          style={{ transitionDelay: `${index * delay}s`, marginRight: '0.25em' }}
        >
          {word}
        </span>
      ))}
    </Component>
  );
};
