'use client';

import Navbar from '@/components/VisualComponents/Navbar';
import Hero from '@/components/VisualComponents/Hero';
import Skills from '@/components/VisualComponents/Skills';
// import Projects from '@/components/VisualComponents/Projects';
import Services from '@/components/VisualComponents/Services';
import Contact from '@/components/VisualComponents/Contact';
import StructuredData from '@/components/StructuredData';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import type { PortfolioData } from '@/types/portfolioTypes';
import fallbackData from '@/public/data/portfolio.json';
import { useI18n } from '@/hooks/useI18n';

// Portfolio data URL - GitHub Gist
const PORTFOLIO_DATA_URL = 'https://gist.githubusercontent.com/NicolasDelValle/00ff1302aeebbe61c304a8d9253aa6b1/raw/portfolioData.json';

export default function Home() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(fallbackData as PortfolioData);
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useI18n();

  useEffect(() => {
    // Try to load from Gist, use fallback data if it fails
    fetch(PORTFOLIO_DATA_URL)
      .then(res => {
        if (!res.ok) {
          console.warn('Gist not available, using local data');
          return null;
        }
        return res.json();
      })
      .then(data => {
        if (data) {
          setPortfolioData(data);
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error loading from Gist, using local data:', err);
        setIsLoading(false);
      });
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
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
        </div>
      </div>
    );
  }

  const { basics, services, config } = portfolioData;
  // const projects = portfolioData.projects; // Comentado temporalmente

  // Visual siempre habilitado según config, sin importar si viene del Gist o local
  const isVisualEnabled = config?.visual === true;

  return (
    <div className="min-h-screen">
      {/* Structured Data para SEO - Rich Snippets en Google */}
      <StructuredData
        name={basics.name}
        email={basics.email}
        phone={basics.phone}
        city={basics.location.city}
        country={basics.location.country}
        jobTitle={basics.label}
        summary={basics.summary[language]}
        image="https://nicolasdelvalle.dev/nico-logo.svg" // URL completa
        url="https://nicolasdelvalle.dev"
        sameAs={basics.profiles.map(p => p.url)}
      />

      <Navbar visualEnabled={isVisualEnabled} />

      <main>
        <Hero
          name={basics.name}
          label={basics.label}
          image={basics.image}
          summary={basics.summary}
        />

        <Skills skills={basics.skills || []} />

        <Services services={services || []} />

        {/* <Projects projects={projects || []} /> */}

        <Contact
          email={basics.email}
          phone={basics.phone}
          location={basics.location}
          profiles={basics.profiles}
        />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border text-center">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} {basics.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}