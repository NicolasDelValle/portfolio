'use client';

import { useI18n } from '@/hooks/useI18n';
import Image from 'next/image';
import type { Skill } from '@/types/portfolioTypes';

interface SkillsProps {
  skills: Skill[];
}

// Función para determinar si es un emoji o una URL/ruta
const isEmoji = (str: string) => {
  // Detecta si es un emoji (caracteres unicode especiales)
  const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F1E0}-\u{1F1FF}]/u;
  return emojiRegex.test(str);
};

export default function Skills({ skills }: SkillsProps) {
  const { t } = useI18n();

  // Si no hay skills, no mostrar la sección
  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <section id="skills" className="py-16  flex items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t('portfolio.skills')}
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            {t('portfolio.skillsDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-background dark:bg-background-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary group"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary group-hover:text-primary/80 transition-colors">
                {skill.name}
              </h3>
              <div className="flex flex-col gap-2">
                {skill.keywords.map((keyword, idx) => {
                  const content = (
                    <>
                      {/* Icono - puede ser emoji, URL o imagen local */}
                      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                        {isEmoji(keyword.icon) ? (
                          <span className="text-xl" role="img" aria-label={keyword.name}>
                            {keyword.icon}
                          </span>
                        ) : (
                          <Image
                            src={keyword.icon}
                            alt={`${keyword.name} logo`}
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                        )}
                      </div>
                      <span className="font-medium">{keyword.name}</span>
                      {/* Icono de link externo cuando hay URL */}
                      {keyword.url && (
                        <svg
                          className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      )}
                    </>
                  );

                  // Si tiene URL, renderiza como link
                  if (keyword.url) {
                    return (
                      <a
                        key={idx}
                        href={keyword.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="flex items-center gap-3 px-4 py-2.5 bg-primary/5 hover:bg-primary/10 text-foreground rounded-lg transition-all duration-200 hover:translate-x-1 border border-transparent hover:border-primary/20 group"
                        aria-label={`Visit ${keyword.name} official website`}
                      >
                        {content}
                      </a>
                    );
                  }

                  // Si no tiene URL, renderiza como div
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 px-4 py-2.5 bg-primary/5 text-foreground rounded-lg cursor-default border border-transparent"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
