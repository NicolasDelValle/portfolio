/**
 * Detecta si el usuario está usando un dispositivo móvil
 * @returns true si es un dispositivo móvil, false si es desktop
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;

  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

  // Detectar dispositivos móviles por user agent
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  
  // También verificar por tamaño de pantalla como fallback
  const isSmallScreen = window.innerWidth <= 768;
  
  // Verificar si es touch device
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  return mobileRegex.test(userAgent) || (isSmallScreen && isTouchDevice);
};

/**
 * Hook personalizado para detectar dispositivos móviles con actualizaciones en resize
 */
export const useIsMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(isMobileDevice());
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return isMobile;
};

// Necesitamos importar React para el hook
import React from 'react';
