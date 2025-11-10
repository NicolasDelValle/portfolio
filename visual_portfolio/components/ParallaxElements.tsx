'use client';

import { useEffect, useState, useCallback } from 'react';

interface Shape {
  id: number;
  type: 'circle' | 'square';
  x: number;
  y: number;
  size: number;
  speed: number;
  blur: number;
  opacity: number;
  rotationSpeed: number;
  colorVariation: number;
  pulseDuration: number;
}

export default function ParallaxElements() {
  const [scrollY, setScrollY] = useState(0);
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar si es mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Generar formas aleatorias con diferentes características
    const shapeCount = isMobile ? 10 : 20; // Menos elementos en mobile
    const maxSize = isMobile ? 80 : 120; // Tamaños más pequeños
    const minSize = isMobile ? 30 : 40;

    const generatedShapes: Shape[] = Array.from({ length: shapeCount }, (_, i) => {
      // Blur muy variado: algunos sin blur, otros con mucho
      const blurOptions = [2, 3, 4, 5, 6, 8, 10, 12, 15];
      const randomBlur = blurOptions[Math.floor(Math.random() * blurOptions.length)];

      return {
        id: i,
        type: Math.random() > 0.5 ? 'circle' : 'square',
        x: Math.random() * 100, // porcentaje horizontal
        y: Math.random() * 250 - 50, // porcentaje vertical (más allá del viewport)
        size: Math.random() * (maxSize - minSize) + minSize, // Tamaño reducido
        speed: Math.random() * 0.6 + 0.15, // 0.15-0.75 (diferentes velocidades)
        blur: randomBlur, // blur aleatorio entre opciones discretas
        opacity: Math.random() * 0.15 + 0.15, // 15%-30% (0.15-0.30)
        rotationSpeed: (Math.random() - 0.5) * 0.2, // rotación más o menos rápida
        colorVariation: Math.random() * 60 - 30, // -30 a +30 para variación de color
        pulseDuration: Math.random() * 4 + 4, // 4-8 segundos de duración del pulse
      };
    });
    setShapes(generatedShapes);
  }, [isMobile]);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    // Usar requestAnimationFrame para mejor rendimiento
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <style jsx>{`
        @keyframes slowPulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
      {shapes.map((shape) => {
        const translateY = scrollY * shape.speed;
        const rotation = scrollY * shape.rotationSpeed;
        const scale = 1 + (scrollY * 0.00005 * shape.speed); // Efecto de zoom sutil

        // Convertir RGB y aplicar variación de color
        const rgbString = getComputedStyle(document.documentElement)
          .getPropertyValue('--primary-rgb')
          .split(',')
          .map(n => parseInt(n.trim()));

        const r = Math.max(0, Math.min(255, rgbString[0] + shape.colorVariation));
        const g = Math.max(0, Math.min(255, rgbString[1] + shape.colorVariation));
        const b = Math.max(0, Math.min(255, rgbString[2] + shape.colorVariation));

        return (
          <div
            key={shape.id}
            className={`absolute will-change-transform ${shape.type === 'circle' ? 'rounded-full' : 'rounded-none'
              }`}
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              backgroundColor: `rgba(${r}, ${g}, ${b}, ${shape.opacity})`,
              filter: `blur(${shape.blur}px)`,
              transform: `translateY(${translateY}px) rotate(${rotation}deg) scale(${scale})`,
              animation: `slowPulse ${shape.pulseDuration}s ease-in-out infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
