'use client';

import { useI18n } from '@/hooks/useI18n';
import { usePortfolioData } from '@/hooks/usePortfolioData';

interface WorkExperienceScreenProps {
  workId: number;
}

export default function WorkExperienceScreen({ workId }: WorkExperienceScreenProps) {
  const { language, t } = useI18n();
  const { portfolioData } = usePortfolioData();

  if (!portfolioData?.work) return null;

  const job = portfolioData.work.find((w) => w.id === workId);
  if (!job) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
      year: 'numeric',
      month: 'long',
    });
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-foreground-muted mb-4">
          <span>💼</span>
          <span className="text-primary font-semibold">
            {formatDate(job.startDate)} - {job.current ? t('common.present') || 'Present' : formatDate(job.endDate!)}
          </span>
          {job.current && (
            <span className="px-2 py-1 text-xs bg-green-500 bg-opacity-20 text-green-600 dark:text-green-400 rounded">
              Current
            </span>
          )}
        </div>
        <h1 className="text-4xl font-bold mb-2">{job.position[language]}</h1>
        <h2 className="text-2xl text-primary mb-3">{job.company}</h2>
        <div className="flex items-center gap-2 text-foreground-muted">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{job.location}</span>
        </div>
      </div>

      <hr className="border-border my-6" />

      {/* Description */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <span>📝</span>
          Description
        </h3>
        <p className="text-foreground-muted leading-relaxed">
          {job.description[language]}
        </p>
      </section>

      {/* Key Achievements */}
      {job.highlights && job.highlights[language].length > 0 && (
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <span>🏆</span>
            Key Achievements
          </h3>
          <ul className="space-y-3">
            {job.highlights[language].map((highlight, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                <span className="text-foreground-muted">{highlight}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Technologies */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <span>🛠️</span>
          Technologies & Tools
        </h3>
        <div className="flex flex-wrap gap-2">
          {job.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-background-tertiary border border-border rounded text-sm font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-border">
        <p className="text-xs text-foreground-muted text-center">
          💡 This information is part of my professional experience
        </p>
      </div>
    </div>
  );
}
