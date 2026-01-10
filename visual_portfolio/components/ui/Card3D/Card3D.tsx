'use client';

import { useState, useEffect, ReactNode } from 'react';

type TriggerMode = 'hover' | 'external' | 'always' | 'interval';

interface Card3DProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  translateZ?: number;
  // Nuevas props para control del efecto
  triggerMode?: TriggerMode;
  isActive?: boolean; // Para control externo
  intervalDuration?: number; // Para modo interval (ms)
  autoRotate?: boolean; // Rotación automática
  rotationSpeed?: number; // Velocidad de rotación automática
}

export default function Card3D({
  children,
  className = "",
  intensity = 150,
  translateZ = 20,
  triggerMode = 'hover',
  isActive = false,
  intervalDuration = 3000,
  autoRotate = false,
  rotationSpeed = 1
}: Card3DProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [internalActive, setInternalActive] = useState(false);
  const [autoRotateAngle, setAutoRotateAngle] = useState(0);

  // Efecto para modo interval
  useEffect(() => {
    if (triggerMode === 'interval') {
      const interval = setInterval(() => {
        setInternalActive(prev => !prev);
      }, intervalDuration);
      return () => clearInterval(interval);
    }
  }, [triggerMode, intervalDuration]);

  // Efecto para auto-rotación
  useEffect(() => {
    if (autoRotate) {
      const interval = setInterval(() => {
        setAutoRotateAngle(prev => (prev + rotationSpeed) % 360);
      }, 16); // ~60fps
      return () => clearInterval(interval);
    }
  }, [autoRotate, rotationSpeed]);

  // Determinar si el efecto debe estar activo
  const shouldBeActive = () => {
    switch (triggerMode) {
      case 'hover':
        return isHovered;
      case 'external':
        return isActive;
      case 'always':
        return true;
      case 'interval':
        return internalActive;
      default:
        return isHovered;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (triggerMode === 'hover' && isHovered) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * intensity;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * intensity;
      setMousePos({ x, y });
    }
  };

  const handleMouseEnter = () => {
    if (triggerMode === 'hover') {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (triggerMode === 'hover') {
      setIsHovered(false);
      setMousePos({ x: 0, y: 0 });
    }
  };

  // Calcular transform basado en el modo activo
  const getTransform = () => {
    const isEffectActive = shouldBeActive();

    if (!isEffectActive && !autoRotate) return 'none';

    let rotateX = 0;
    let rotateY = 0;
    let translateZValue = 0;

    // Efecto 3D basado en mouse o modo
    if (isEffectActive) {
      if (triggerMode === 'hover') {
        rotateX = -mousePos.y * 0.1;
        rotateY = mousePos.x * 0.1;
      } else if (triggerMode === 'always' || triggerMode === 'external' || triggerMode === 'interval') {
        // Efecto suave sin mouse
        rotateX = Math.sin(Date.now() * 0.001) * 5;
        rotateY = Math.cos(Date.now() * 0.0015) * 5;
      }
      translateZValue = translateZ;
    }

    // Auto-rotación adicional
    if (autoRotate) {
      rotateY += autoRotateAngle;
    }

    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZValue}px)`;
  };

  return (
    <div
      className={`transition-all duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: getTransform(),
        transformStyle: 'preserve-3d',
        transition: shouldBeActive() && triggerMode === 'hover' ? 'none' : 'all 0.3s ease'
      }}
    >
      {children}
    </div>
  );
}