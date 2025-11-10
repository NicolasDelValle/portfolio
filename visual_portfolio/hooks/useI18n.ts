"use client";

import { useLanguage } from "@/context/languageContext";

export const useI18n = () => {
  const { language, setLanguage, t } = useLanguage();

  const changeToEnglish = () => setLanguage("en");
  const changeToSpanish = () => setLanguage("es");

  return {
    language,
    t,
    changeToEnglish,
    changeToSpanish,
    setLanguage,
  };
};
