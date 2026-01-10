'use client';

import { useI18n } from "@/hooks/useI18n";
import { usePortfolioData } from "@/hooks/usePortfolioData";

interface ProjectScreenProps {
  projectId: number;
}

export default function ProjectScreen({ projectId }: ProjectScreenProps) {
  const { t, language } = useI18n();
  const { portfolioData } = usePortfolioData();

  if (!portfolioData) return null;

  const project = portfolioData.projects?.find(p => p.id === projectId);

  if (!project) return null;

  return (
    <div className="h-full overflow-auto pb-8">
      <div className="max-w-4xl mx-auto p-8 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          {project.featured && (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              ⭐ {t('projectScreen.featured')}
            </div>
          )}
          <h1 className="text-4xl font-bold text-primary">
            {project.name[language]}
          </h1>
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Description */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            {t('projectScreen.description')}
          </h2>
          <p className="text-foreground leading-relaxed text-lg">
            {project.description[language]}
          </p>
        </section>

        {/* Technologies */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            {t('projectScreen.technologies')}
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Links */}
        {project.url && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              {t('projectScreen.links')}
            </h2>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <span>{t('projectScreen.viewOnGitHub')}</span>
              <span>→</span>
            </a>
          </section>
        )}
      </div>
    </div>
  );
}
