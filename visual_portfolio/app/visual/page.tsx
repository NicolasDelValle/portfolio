'use client';

import NavBar from "@/components/NabBar/NavBar";
import SideBar from "@/components/SideBar/SideBar";
import { useI18n } from "@/hooks/useI18n";
import Link from "next/link";
import { useEffect } from "react";

export default function VisualPage() {
  const { t } = useI18n();

  useEffect(() => {
    // Desactivar los efectos de fondo en esta página
    document.body.classList.add('no-background-effects');

    return () => {
      // Restaurar los efectos al salir de la página
      document.body.classList.remove('no-background-effects');
    };
  }, []);

  return (
    <div className="h-full overflow-hidden">
      <NavBar />
      <div className="h-full flex flex-row overflow-hidden">
        <SideBar />
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-md text-center space-y-4">
            <div className="text-6xl">🚧</div>
            <h1 className="text-2xl font-bold">{t('portfolio.underConstruction')}</h1>
            <p className="text-gray-600 dark:text-gray-400">{t('portfolio.underConstructionMessage')}</p>
            <Link
              href="/"
              className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              {t('portfolio.backToPortfolio')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
