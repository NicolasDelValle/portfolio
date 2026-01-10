"use client";

import { useEffect, useState } from "react";

interface UseScrollDirectionOptions {
  threshold?: number; // Mínimo scroll para activar el efecto
  debounce?: number; // Debounce para evitar cambios muy frecuentes
}

export function useScrollDirection({
  threshold = 100,
  debounce = 10,
}: UseScrollDirectionOptions = {}) {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const [isAtTop, setIsAtTop] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsAtTop(currentScrollY < threshold);

      if (Math.abs(currentScrollY - lastScrollY) < debounce) {
        ticking = false;
        return;
      }

      if (currentScrollY > threshold) {
        setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      } else {
        setScrollDirection(null);
      }

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    // Set initial state
    updateScrollDirection();

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold, debounce]);

  return {
    scrollDirection,
    isAtTop,
    scrollY,
    isScrollingDown: scrollDirection === "down",
    isScrollingUp: scrollDirection === "up",
    shouldHideNavbar: scrollDirection === "down" && !isAtTop,
  };
}
