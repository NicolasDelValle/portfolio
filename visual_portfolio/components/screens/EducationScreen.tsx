'use client';

import { useI18n } from '@/hooks/useI18n';
import { usePortfolioData } from '@/hooks/usePortfolioData';

interface EducationScreenProps {
  educationId: number;
}

export default function EducationScreen({ educationId }: EducationScreenProps) {
  const { language } = useI18n();
  const { portfolioData } = usePortfolioData();

  if (!portfolioData?.education) return null;

  const edu = portfolioData.education.find((e) => e.id === educationId);
  if (!edu) return null;

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
          <span>🎓</span>
          <span className="text-primary font-semibold">
            {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-2">{edu.area[language]}</h1>
        <h2 className="text-2xl text-primary mb-3">{edu.studyType[language]}</h2>
        <p className="text-xl text-foreground-muted mb-2">{edu.institution}</p>
        {edu.location && (
          <div className="flex items-center gap-2 text-foreground-muted">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{edu.location}</span>
          </div>
        )}
        {edu.score && (
          <div className="mt-3">
            <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary rounded font-semibold">
              GPA: {edu.score}
            </span>
          </div>
        )}
      </div>

      <hr className="border-border my-6" />

      {/* Relevant Courses */}
      {edu.courses && edu.courses[language].length > 0 && (
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <span>📚</span>
            Relevant Courses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {edu.courses[language].map((course, index) => (
              <div
                key={index}
                className="flex items-start gap-2 p-3 bg-background-tertiary border border-border rounded"
              >
                <span className="text-primary mt-0.5">•</span>
                <span className="text-foreground-muted">{course}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-border">
        <p className="text-xs text-foreground-muted text-center">
          🎓 Academic achievement and continuous learning
        </p>
      </div>
    </div>
  );
}
