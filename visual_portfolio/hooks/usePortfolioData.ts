import { useState, useEffect } from "react";
import type { PortfolioData } from "@/types/portfolioTypes";
import fallbackData from "@/public/data/portfolio.json";

const PORTFOLIO_DATA_URL =
  "https://gist.githubusercontent.com/NicolasDelValle/00ff1302aeebbe61c304a8d9253aa6b1/raw/portfolioData.json";

export function usePortfolioData() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      try {
        // Intentar cargar desde Gist
        const response = await fetch(PORTFOLIO_DATA_URL);

        if (!response.ok) {
          throw new Error("Gist not available");
        }

        const data = await response.json();

        if (mounted) {
          console.log("✅ Datos cargados desde Gist");
          setPortfolioData(data);
          setIsLoading(false);
        }
      } catch (err) {
        console.warn(
          "⚠️ Error cargando desde Gist, usando datos locales:",
          err
        );

        if (mounted) {
          // Usar datos de fallback
          setPortfolioData(fallbackData as PortfolioData);
          setError(err instanceof Error ? err : new Error("Unknown error"));
          setIsLoading(false);
        }
      }
    };

    loadData();

    return () => {
      mounted = false;
    };
  }, []);

  return { portfolioData, isLoading, error };
}
