'use client';

import NavBar from "@/components/NabBar/NavBar";
import SideBar from "@/components/SideBar/SideBar";
import TabBar from "@/components/TabBar/TabBar";
import InitialScreen from "@/components/screens/InitialScreen";
import { useI18n } from "@/hooks/useI18n";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { useEffect, useMemo } from "react";
import { TabProvider, useTabContext } from "@/context/tabContext";
import Image from "next/image";
import { CircularProgress } from "@mui/material";

function VisualPageContent() {
  const { t } = useI18n();
  const { getActiveScreen } = useTabContext();
  const activeScreen = getActiveScreen();

  return (
    <div className="h-full overflow-hidden">
      <NavBar />
      <div className="h-full flex flex-row overflow-hidden">
        <SideBar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <TabBar />
          <div className="flex-1 overflow-auto">
            {activeScreen || (
              <div className="flex items-center justify-center h-full p-4">
                <div className="max-w-md text-center space-y-4">

                  <Image
                    src="/nico-logo.svg"
                    alt="Nico Logo"
                    priority
                    className='mx-auto mb-4 grayscale'
                    width={256}
                    height={256}
                  />

                  <h1 className="text-2xl font-bold">{t('portfolio.noFileOpen')}</h1>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('portfolio.selectFileMessage')}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualPageWrapper() {
  const { t } = useI18n();
  const { portfolioData, isLoading } = usePortfolioData();

  const initialTab = useMemo(() => ({
    id: "initial",
    name: t('screens.initial'),
    icon: "📄",
    screen: <InitialScreen />
  }), [t]);

  // Mostrar loading mientras se cargan los datos
  if (isLoading || !portfolioData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <Image
              src="/nico-logo.svg"
              alt="Nico Logo"
              priority
              className='animate-pulse'
              width={300}
              height={300}
            />
          </div>
          <CircularProgress />
        </div>
      </div>
    );
  }

  return (
    <TabProvider initialTab={initialTab}>
      <VisualPageContent />
    </TabProvider>
  );
}

export default function VisualPage() {
  useEffect(() => {
    // Desactivar los efectos de fondo en esta página
    document.body.classList.add('no-background-effects');

    return () => {
      // Restaurar los efectos al salir de la página
      document.body.classList.remove('no-background-effects');
    };
  }, []);

  return <VisualPageWrapper />;
}
