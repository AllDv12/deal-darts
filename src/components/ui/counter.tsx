import { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimalPlaces?: number;
}

export const Counter = ({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '', 
  decimalPlaces = 0 
}: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);
  
  useEffect(() => {
    // Reset counter when end value changes
    countRef.current = 0;
    startTimeRef.current = null;
    
    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for a smoother animation
      const easeOutQuad = (t: number): number => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      
      // Calculate current count value
      countRef.current = easedProgress * end;
      
      // Update state with formatted value
      setCount(countRef.current);
      
      // Continue animation if not complete
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Ensure we end exactly at the target value
        countRef.current = end;
        setCount(end);
      }
    };
    
    // Start animation
    const animationId = requestAnimationFrame(animate);
    
    // Clean up
    return () => cancelAnimationFrame(animationId);
  }, [end, duration]);
  
  // Format the count value
  const formattedCount = decimalPlaces === 0 
    ? Math.floor(count).toLocaleString()
    : count.toFixed(decimalPlaces);
  
  return (
    <span>
      {prefix}{formattedCount}{suffix}
    </span>
  );
};
