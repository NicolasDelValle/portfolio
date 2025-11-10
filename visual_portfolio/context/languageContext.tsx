'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface Translations {
  [key: string]: string | Translations;
}

interface LanguageContextType {
  language: Language;
  translations: Translations;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

const getDefaultLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';

  // Check localStorage first
  const saved = localStorage.getItem('language') as Language;
  if (saved && ['en', 'es'].includes(saved)) {
    return saved;
  }

  // Check browser language
  const browserLang = navigator.language.split('-')[0];
  if (browserLang === 'es') return 'es';

  // Default to English
  return 'en';
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [translations, setTranslations] = useState<Translations>({});

  const loadTranslations = async (lang: Language) => {
    try {
      const response = await fetch(`/locales/${lang}.json`);
      const data = await response.json();
      setTranslations(data);
    } catch (error) {
      console.error('Error loading translations:', error);
      // Fallback to English if error
      if (lang !== 'en') {
        const fallbackResponse = await fetch('/locales/en.json');
        const fallbackData = await fallbackResponse.json();
        setTranslations(fallbackData);
      }
    }
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    loadTranslations(lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: string | Translations = translations;

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key;
  };

  useEffect(() => {
    const defaultLang = getDefaultLanguage();
    setLanguageState(defaultLang);
    loadTranslations(defaultLang);
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        translations,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};