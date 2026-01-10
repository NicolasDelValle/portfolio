'use client';

import { useI18n } from '@/hooks/useI18n';
import type { Service } from '@/types/portfolioTypes';
import ServiceCard from './ServiceCard';


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
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/80 backdrop-blur-md overflow-x-hidden">

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground" >
            {t('portfolio.services')}
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            {t('portfolio.servicesDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
