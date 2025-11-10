'use client';

import AnimatedBackground from './AnimatedBackground';
import CodeRain from './CodeRain';

interface BackgroundEffectsProps {
  variant?: 'particles' | 'code-rain' | 'both' | 'none';
}

export default function BackgroundEffects({ variant = 'both' }: BackgroundEffectsProps) {
  return (
    <>
      {(variant === 'particles' || variant === 'both') && <AnimatedBackground />}
      {(variant === 'code-rain' || variant === 'both') && <CodeRain />}
    </>
  );
}
