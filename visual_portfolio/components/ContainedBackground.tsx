'use client';

import { useEffect, useRef } from 'react';

interface ContainedBackgroundProps {
  variant?: 'particles' | 'code-rain' | 'both';
  className?: string;
}

export default function ContainedBackground({
  variant = 'particles',
  className = ''
}: ContainedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (variant === 'code-rain' || variant === 'both') return; // Por ahora solo partículas

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match container
    const setCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    setCanvasSize();

    const resizeObserver = new ResizeObserver(setCanvasSize);
    resizeObserver.observe(container);

    // Particles configuration
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const particleCount = 40; // Menos partículas para contenedores
    const connectionDistance = 150;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2.5 + 1,
      });
    }

    // Get theme colors
    const getThemeColor = () => {
      const isDark = document.documentElement.classList.contains('dark');
      return {
        particle: isDark ? 'rgba(0, 122, 204, 0.5)' : 'rgba(9, 105, 218, 0.4)',
        line: isDark ? 'rgba(0, 122, 204, 0.2)' : 'rgba(9, 105, 218, 0.15)',
      };
    };

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const colors = getThemeColor();

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = colors.particle;
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 8;
        ctx.shadowColor = colors.particle;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = colors.line.replace(/[\d.]+\)/, `${opacity * 0.3})`);
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0  ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.8 }}
      />
    </div>
  );
}
