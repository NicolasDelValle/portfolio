'use client';

import Image from 'next/image';
import type { Service } from '@/types/portfolioTypes';
import Card3D from '@/components/ui/Card3D';

interface ServiceCardProps {
  service: Service;
  language: 'en' | 'es';
}

export default function ServiceCard({ service, language }: ServiceCardProps) {
  return (
    <Card3D translateZ={50} className="shadow-primary bg-background dark:bg-background-card rounded-lg p-6 shadow-sm border border-border hover:border-primary group hover:-translate-y-1">
      {/* Icono */}
      <Card3D translateZ={100} triggerMode='always'>
        <div className="mb-4 transform group-hover:ms-16 group-hover:scale-150 transition-all duration-300">
          {service.icon.includes('.') && (service.icon.startsWith('http') || service.icon.startsWith('/') || service.icon.startsWith('./')) ? (
            <div
              className="relative p-3 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary) / 0.1) 0%, hsl(var(--primary) / 0.05) 100%)',
                boxShadow: '0 8px 32px hsl(var(--primary) / 0.2), inset 0 1px 0 hsl(var(--primary) / 0.1)',
                border: '1px solid hsl(var(--primary) / 0.2)'
              }}
            >
              <Image
                src={service.icon}
                alt={service.title[language]}
                width={64}
                height={64}
                className="object-contain relative z-10"
                style={{
                  filter: 'drop-shadow(0 4px 12px hsl(var(--primary) / 0.4)) brightness(1.1)'
                }}
              />
              {/* Glow adicional */}
              <div
                className="absolute inset-0 rounded-xl opacity-50"
                style={{
                  background: `radial-gradient(circle at center, hsl(var(--primary) / 0.3) 0%, transparent 70%)`,
                  filter: 'blur(8px)'
                }}
              />
            </div>
          ) : (
            <div className="text-5xl">
              {service.icon}
            </div>
          )}
        </div>
      </Card3D>
      {/* Título */}
      <h3 className="text-xl  font-bold mb-3 text-foreground group-hover:text-primary transition-all group-hover:text-shadow-primary-lg">
        {service.title[language]}
      </h3>

      {/* Descripción */}
      <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
        {service.description[language]}
      </p>

      {/* Features */}
      <ul className="space-y-2">
        {service.features[language].map((feature, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2 text-sm text-foreground/60"
          >
            <svg
              className="w-4 h-4 text-primary flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </Card3D >
  );
}