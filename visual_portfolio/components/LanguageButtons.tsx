'use client';

import { useI18n } from '@/hooks/useI18n';

export default function LanguageButtons() {
  const { language, changeToEnglish, changeToSpanish } = useI18n();

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50">
      <button
        onClick={changeToEnglish}
        className={`
          px-4 py-2 rounded-full font-medium text-sm shadow-lg transition-all duration-200 hover:scale-105
          ${language === 'en'
            ? 'bg-blue-600 text-white shadow-blue-500/25'
            : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white border border-gray-200'
          }
        `}
        aria-label="Change to English"
      >
        🇺🇸 EN
      </button>

      <button
        onClick={changeToSpanish}
        className={`
          px-4 py-2 rounded-full font-medium text-sm shadow-lg transition-all duration-200 hover:scale-105
          ${language === 'es'
            ? 'bg-blue-600 text-white shadow-blue-500/25'
            : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white border border-gray-200'
          }
        `}
        aria-label="Cambiar a Español"
      >
        🇪🇸 ES
      </button>
    </div>
  );
}