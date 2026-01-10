'use client';

import { useI18n } from "@/hooks/useI18n";
import { usePortfolioData } from "@/hooks/usePortfolioData";

export default function ContactScreen() {
  const { t } = useI18n();
  const { portfolioData } = usePortfolioData();

  if (!portfolioData) return null;

  const { basics } = portfolioData;

  return (
    <div className="h-full overflow-auto pb-8">
      <div className="max-w-4xl mx-auto p-8 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-primary">
            {t('contactScreen.title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('contactScreen.subtitle')}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div className="p-6 bg-hover rounded-lg space-y-3">
            <div className="text-4xl">📧</div>
            <h3 className="text-xl font-semibold">{t('contactScreen.email')}</h3>
            <a
              href={`mailto:${basics.email}`}
              className="text-primary hover:underline block"
            >
              {basics.email}
            </a>
          </div>

          {/* Phone */}
          <div className="p-6 bg-hover rounded-lg space-y-3">
            <div className="text-4xl">📱</div>
            <h3 className="text-xl font-semibold">{t('contactScreen.phone')}</h3>
            <a
              href={`tel:${basics.phone}`}
              className="text-primary hover:underline block"
            >
              {basics.phone}
            </a>
          </div>

          {/* Location */}
          <div className="p-6 bg-hover rounded-lg space-y-3">
            <div className="text-4xl">📍</div>
            <h3 className="text-xl font-semibold">{t('contactScreen.location')}</h3>
            <p className="text-foreground">
              {basics.location.city}, {basics.location.country}
            </p>
          </div>

          {/* Social */}
          <div className="p-6 bg-hover rounded-lg space-y-3">
            <div className="text-4xl">🌐</div>
            <h3 className="text-xl font-semibold">{t('contactScreen.social')}</h3>
            <div className="flex flex-col gap-2">
              {basics.profiles.map((profile, index) => (
                <a
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {profile.network}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-6">
          <p className="text-sm text-muted-foreground text-center">
            {t('contactScreen.footer')}
          </p>
        </div>
      </div>
    </div>
  );
}
