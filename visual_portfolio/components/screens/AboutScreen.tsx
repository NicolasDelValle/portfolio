'use client';

import { useI18n } from "@/hooks/useI18n";
import { usePortfolioData } from "@/hooks/usePortfolioData";

export default function AboutScreen() {
  const { t, language } = useI18n();
  const { portfolioData } = usePortfolioData();

  if (!portfolioData) return null;

  const { basics } = portfolioData;

  return (
    <div className="h-full overflow-auto pb-8">
      <div className="max-w-4xl mx-auto p-8 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-primary">
            {basics.name}
          </h1>
          <p className="text-2xl text-muted-foreground">
            {basics.label}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* About */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            {t('aboutScreen.summary')}
          </h2>
          <p className="text-foreground leading-relaxed text-lg">
            {basics.summary[language]}
          </p>
        </section>

        {/* Location */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            {t('aboutScreen.location')}
          </h2>
          <div className="flex items-center gap-2 text-foreground">
            <span className="text-xl">📍</span>
            <span className="text-lg">
              {basics.location.city}, {basics.location.country}
            </span>
          </div>
        </section>

        {/* Contact Info */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            {t('aboutScreen.contact')}
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xl">📧</span>
              <a
                href={`mailto:${basics.email}`}
                className="text-primary hover:underline text-lg"
              >
                {basics.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">📱</span>
              <a
                href={`tel:${basics.phone}`}
                className="text-primary hover:underline text-lg"
              >
                {basics.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Social Profiles */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            {t('aboutScreen.profiles')}
          </h2>
          <div className="flex flex-wrap gap-4">
            {basics.profiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-hover rounded-lg hover:bg-primary/20 transition-colors"
              >
                <span className="font-semibold">{profile.network}</span>
                <span className="text-muted-foreground">@{profile.username}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
