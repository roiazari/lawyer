import { useEffect, useState, useRef } from 'react';
import React from 'react'; // הוספת ייבוא React אם הקובץ הוא JSX/TSX

interface CounterNumberProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const CounterNumber: React.FC<CounterNumberProps> = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLSpanElement>(null); // רפרנס לאלמנט

  // 1. הגדרת Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // אם הרכיב נראה (isIntersecting הוא true), נשמור את זה בסטייט
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // ניתן לבטל את המעקב ברגע שהמונה נכנס פעם אחת
          observer.unobserve(entry.target); 
        }
      },
      {
        root: null, // ברירת מחדל: ה-viewport
        rootMargin: '0px',
        threshold: 0.5, // 50% מהאלמנט צריך להיות גלוי
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // ניקוי כאשר הרכיב נעלם
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // 2. הפעלת האנימציה רק כאשר הרכיב נכנס ל-Viewport
  useEffect(() => {
    if (!isIntersecting) return; // מתחילים רק אם הרכיב נצפה

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end); // בסיום, הגדר את הערך הסופי
      }
    };

    requestAnimationFrame(animate);
    // חשוב: איפוס הסטייט של המונה כדי לוודא שאינו רץ פעמיים אם הסטייט של האפליקציה השתנה.
    return () => setCount(0); 
  }, [end, duration, isIntersecting]); // תלויות: isIntersecting מפעיל את האפקט

  // 3. הצגת הרכיב עם הרפרנס
  return <span ref={ref}>{count}{suffix}</span>;
};

export default CounterNumber;