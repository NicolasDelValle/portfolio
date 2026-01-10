'use client';

import { ReactNode, useEffect, useState } from 'react';

interface GlowBorderCardProps {
  children: ReactNode;
  className?: string;
  glowSpeed?: number;
  borderRadius?: string;
  disabled?: boolean;
}

export default function GlowBorderCard({
  children,
  className = "",
  glowSpeed = 2,
  borderRadius = "rounded-lg",
  disabled = false
}: GlowBorderCardProps) {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    if (disabled) return;

    const interval = setInterval(() => {
      setAngle(prev => (prev + glowSpeed) % 360);
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [glowSpeed, disabled]);

  if (disabled) {
    return (
      <div className={`relative ${borderRadius} ${className}`}>
        <div className={`bg-white dark:bg-gray-800 ${borderRadius} shadow-md border border-gray-200 dark:border-gray-700`}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${borderRadius} ${className}`}>
      {/* Animated glow border */}
      <div
        className={`absolute inset-0 ${borderRadius} p-[2px] opacity-80`}
        style={{
          background: `conic-gradient(from ${angle}deg, 
            rgba(59, 130, 246, 0.3) 0deg,
            rgba(59, 130, 246, 1) 45deg,
            rgba(139, 92, 246, 1) 90deg,
            rgba(139, 92, 246, 0.3) 135deg,
            rgba(6, 182, 212, 0.3) 180deg,
            rgba(6, 182, 212, 1) 225deg,
            rgba(59, 130, 246, 1) 270deg,
            rgba(59, 130, 246, 0.3) 315deg,
            rgba(59, 130, 246, 0.3) 360deg
          )`
        }}
      >
        {/* Inner content background */}
        <div className={`w-full h-full bg-white dark:bg-gray-800 ${borderRadius}`}>
          {children}
        </div>
      </div>
      
      {/* Additional outer glow */}
      <div
        className={`absolute inset-[-4px] ${borderRadius} opacity-40 blur-sm`}
        style={{
          background: `conic-gradient(from ${angle}deg, 
            transparent 0deg,
            rgba(59, 130, 246, 0.6) 30deg,
            rgba(139, 92, 246, 0.6) 60deg,
            transparent 90deg,
            transparent 180deg,
            rgba(6, 182, 212, 0.6) 210deg,
            rgba(59, 130, 246, 0.6) 240deg,
            transparent 270deg,
            transparent 360deg
          )`
        }}
      />
    </div>
  );
}