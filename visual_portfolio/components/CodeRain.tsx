'use client';

import { useEffect, useRef } from 'react';

export default function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Code characters to display
    const chars = '01{}[]<>/\\|=+-*&^%$#@!~`;:.,'.split('');
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    // Get theme colors
    const getThemeColor = () => {
      const isDark = document.documentElement.classList.contains('dark');
      return isDark ? 'rgba(0, 122, 204, 0.8)' : 'rgba(9, 105, 218, 0.6)'; // Aumentada opacidad
    };

    // Animation loop
    let animationFrameId: number;
    let lastTime = 0;
    const fps = 15; // Slower framerate for code rain effect
    const fpsInterval = 1000 / fps;

    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = currentTime - lastTime;
      if (elapsed < fpsInterval) return;

      lastTime = currentTime - (elapsed % fpsInterval);

      // Semi-transparent black background for trail effect
      const isDark = document.documentElement.classList.contains('dark');
      ctx.fillStyle = isDark
        ? 'rgba(31, 31, 31, 0.05)'
        : 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = getThemeColor();
      ctx.font = `${fontSize}px monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        // Reset drop to top randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.35 }} // Aumentado de 0.15 a 0.35
    />
  );
}
