'use client';

import { useI18n } from "@/hooks/useI18n";
import { usePortfolioData } from "@/hooks/usePortfolioData";

interface ServiceScreenProps {
  serviceId: number;
}

export default function ServiceScreen({ serviceId }: ServiceScreenProps) {
  const { t, language } = useI18n();
  const { portfolioData } = usePortfolioData();

  if (!portfolioData) return null;

  const service = portfolioData.services?.find(s => s.id === serviceId);

  if (!service) return null;

  return (
    <div className="h-full overflow-auto pb-8">
      <div className="max-w-4xl mx-auto p-8 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="text-6xl">{service.icon}</div>
          <h1 className="text-4xl font-bold text-primary">
            {service.title[language]}
          </h1>
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Description */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            {t('serviceScreen.description')}
          </h2>
          <p className="text-foreground leading-relaxed text-lg">
            {service.description[language]}
          </p>
        </section>

        {/* Features */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            {t('serviceScreen.features')}
          </h2>
          <ul className="space-y-3">
            {service.features[language].map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div className="border-t border-border pt-6">
          <p className="text-sm text-muted-foreground text-center">
            {t('serviceScreen.footer')}
          </p>
        </div>
      </div>
    </div>
  );
}
