'use client';

import { useI18n } from "@/hooks/useI18n";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import Image from "next/image";

interface SkillScreenProps {
  category: 'Frontend' | 'Backend' | 'Tools' | 'Cloud & DevOps';
}

export default function SkillScreen({ category }: SkillScreenProps) {
  const { t } = useI18n();
  const { portfolioData } = usePortfolioData();

  if (!portfolioData) return null;

  const { basics } = portfolioData;
  const skillCategory = basics.skills?.find(s => s.name === category);

  if (!skillCategory) return null;

  return (
    <div className="h-full overflow-auto pb-8">
      <div className="max-w-4xl mx-auto p-8 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-primary">
            {category}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('skillScreen.description')}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategory.keywords.map((skill, index) => (
            <a
              key={index}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-hover rounded-lg hover:bg-primary/10 transition-all hover:scale-105 group"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
              </div>
              <div className="text-muted-foreground group-hover:text-primary transition-colors">
                →
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-6">
          <p className="text-sm text-muted-foreground text-center">
            {t('skillScreen.footer')}
          </p>
        </div>
      </div>
    </div>
  );
}
