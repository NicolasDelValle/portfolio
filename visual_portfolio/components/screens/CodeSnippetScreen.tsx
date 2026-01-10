'use client';

import { useI18n } from '@/hooks/useI18n';
import { usePortfolioData } from '@/hooks/usePortfolioData';
import { AdvancedCodeEditor } from '@/components/ui/CodeEditor';

interface CodeSnippetScreenProps {
  snippetId: number;
}

export default function CodeSnippetScreen({ snippetId }: CodeSnippetScreenProps) {
  const { language } = useI18n();
  const { portfolioData } = usePortfolioData();

  if (!portfolioData?.codeSnippets) return null;

  const snippet = portfolioData.codeSnippets.find((s) => s.id === snippetId);
  if (!snippet) return null;

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2 py-1 bg-primary bg-opacity-20 text-primary rounded text-xs font-semibold">
            {snippet.category}
          </span>
          {snippet.featured && (
            <span className="px-2 py-1 bg-yellow-500 bg-opacity-20 text-yellow-600 dark:text-yellow-400 rounded text-xs font-semibold">
              ⭐ Featured
            </span>
          )}
        </div>

        <h1 className="text-2xl font-bold mb-2">{snippet.title[language]}</h1>
        <p className="text-foreground-muted mb-3">{snippet.description[language]}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {snippet.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-background-tertiary border border-border rounded text-xs text-foreground-muted"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Code Editor */}
      <div className="flex-1 overflow-auto p-6">
        <AdvancedCodeEditor
          initialCode={snippet.code}
          language={snippet.language}
          readOnly={true}
        />
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border bg-background-secondary">
        <p className="text-xs text-foreground-muted text-center">
          💡 Useful code snippet for {snippet.category} development
        </p>
      </div>
    </div>
  );
}
