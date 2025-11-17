// src/components/FadeInOnScroll.tsx

import React, { useEffect, useState, useRef } from 'react';

interface FadeInOnScrollProps {
  children: React.ReactNode;
  delay?: number; // השהייה במילישניות
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // מפעיל את האנימציה רק אם הפריט נכנס לתצוגה ועדיין לא גלוי
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // עוצר את הצפייה לאחר ההפעלה הראשונה
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2, // מפעילים כאשר 20% מהאלמנט גלוי
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  // מחלקות CSS המשתמשות במעבר (transition) קלאסי 
  const classes = `
    transition-all duration-700 ease-out
    // המצב הסופי: גלוי לחלוטין ובמיקום רגיל
    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} 
  `;

  return (
    <div
      ref={ref}
      className={classes}
      // הוספת השהייה למעבר (transition-delay) כדי ליצור את האפקט המדורג
      style={{ transitionDelay: `${delay}ms` }} 
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;