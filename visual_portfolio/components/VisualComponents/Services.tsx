'use client';

import { useI18n } from '@/hooks/useI18n';
import type { Service } from '@/types/portfolioTypes';

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps) {
  const { language, t } = useI18n();

  // Si no hay services, no mostrar la sección
  if (!services || services.length === 0) {
    return null;
  }

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t('portfolio.services')}
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            {t('portfolio.servicesDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-background dark:bg-background-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary group hover:-translate-y-1"
            >
              {/* Icono */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
