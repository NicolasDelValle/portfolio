'use client';

import { useI18n } from '@/hooks/useI18n';
import { usePortfolioData } from '@/hooks/usePortfolioData';

export default function ResumeScreen() {
  const { language } = useI18n();
  const { portfolioData } = usePortfolioData();

  if (!portfolioData) return null;

  const { basics, work } = portfolioData;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold mb-2">{basics.name}</h1>
        <p className="text-2xl text-primary mb-4">{basics.label}</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground-muted">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {basics.email}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {basics.phone}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            {basics.location.city}, {basics.location.country}
          </span>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          {basics.profiles.map((profile) => (
            <a
              key={profile.network}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm"
            >
              {profile.network}
            </a>
          ))}
        </div>
      </div>

      <hr className="border-border my-8" />

      {/* Professional Summary */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <span>👨‍💻</span>
          Professional Summary
        </h2>
        <p className="text-foreground-muted leading-relaxed">
          {basics.summary[language]}
        </p>
      </section>

      {/* Work Experience */}
      {work && work.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>💼</span>
            Work Experience
          </h2>
          <div className="space-y-6">
            {work.map((job) => (
              <div key={job.id} className="border-l-2 border-primary pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{job.position[language]}</h3>
                    <p className="text-primary">{job.company}</p>
                  </div>
                  <div className="text-sm text-foreground-muted text-right">
                    <p>{formatDate(job.startDate)} - {job.current ? 'Present' : formatDate(job.endDate!)}</p>
                    <p>{job.location}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground-muted mb-2">{job.description[language]}</p>
                {job.highlights && job.highlights[language].length > 0 && (
                  <ul className="text-sm text-foreground-muted space-y-1 mt-2">
                    {job.highlights[language].slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education 
      {education && education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>🎓</span>
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="border-l-2 border-primary pl-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.area[language]}</h3>
                    <p className="text-primary">{edu.studyType[language]}</p>
                    <p className="text-foreground-muted">{edu.institution}</p>
                  </div>
                  <div className="text-sm text-foreground-muted text-right">
                    <p>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</p>
                    {edu.score && <p className="text-primary font-semibold">GPA: {edu.score}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}*/}

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span>🛠️</span>
          Technical Skills
        </h2>
        <div className="space-y-3">
          {basics.skills.map((skillCategory) => (
            <div key={skillCategory.name}>
              <h3 className="font-semibold mb-2">{skillCategory.name}</h3>
              <div className="flex flex-wrap gap-2">
                {skillCategory.keywords.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 bg-background-tertiary border border-border rounded text-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications
      {certifications && certifications.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>📜</span>
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-3 bg-background-tertiary border border-border rounded"
              >
                <h3 className="font-semibold mb-1">{cert.name}</h3>
                <p className="text-sm text-primary">{cert.issuer}</p>
                <p className="text-xs text-foreground-muted">{formatDate(cert.date)}</p>
              </div>
            ))}
          </div>
        </section>
      )} */}

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-border mb-8">
        <p className="text-xs text-foreground-muted text-center">
          📄 Complete professional resume • Last updated: {new Date().toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', { year: 'numeric', month: 'long' })}
        </p>
      </div>
    </div>
  );
}
