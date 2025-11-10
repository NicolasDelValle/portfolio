'use client';

import { useI18n } from '@/hooks/useI18n';
import Image from 'next/image';
import type { MultilingualText } from '@/types/portfolioTypes';
import ContainedBackground from '../ContainedBackground';

interface HeroProps {
  name: string;
  label: string;
  image: string;
  summary: MultilingualText;
}

export default function Hero({ name, label, image, summary }: HeroProps) {
  const { language, t } = useI18n();

  return (
    <section id="hero" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 relative">
      {/* Background effects only in Hero */}
      <ContainedBackground variant="particles" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Image */}
          <div className="flex-shrink-0">
            <div className="hero-image-wrapper">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary">
                <Image
                  src='/Nicolas Del Valle.png'
                  alt={name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left max-w-xl">
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-2">
              {t('portfolio.hello')}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 md:mb-4 leading-tight">
              {name}
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-primary dark:text-blue-400 font-semibold mb-4 md:mb-6">
              {label}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-8 px-2 md:px-0">
              {summary[language]}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start px-4 sm:px-0">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 shadow-md hover:shadow-lg text-center"
              >
                {t('portfolio.getInTouch')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
