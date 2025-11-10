'use client';

import { useI18n } from '@/hooks/useI18n';
import { useEffect } from 'react';

interface StructuredDataProps {
  name: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  jobTitle: string;
  summary: string;
  image: string;
  url: string;
  sameAs: string[];
}

export default function StructuredData({
  name,
  email,
  phone,
  city,
  country,
  jobTitle,
  summary,
  image,
  url,
  sameAs,
}: StructuredDataProps) {
  const { language } = useI18n();

  useEffect(() => {
    // Schema.org JSON-LD para Person (Profesional)
    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: name,
      jobTitle: jobTitle,
      description: summary,
      email: email,
      telephone: phone,
      url: url,
      image: image,
      address: {
        '@type': 'PostalAddress',
        addressLocality: city,
        addressCountry: country,
      },
      sameAs: sameAs,
      knowsAbout: [
        'Web Development',
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'Full Stack Development',
        'Cloud Computing',
        'Azure',
        'AWS',
      ],
    };

    // Schema.org JSON-LD para ProfessionalService
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: `${name} - Web Development Services`,
      description: 'Full Stack Web Development, UI/UX Design, and Cloud Solutions',
      provider: {
        '@type': 'Person',
        name: name,
        email: email,
        telephone: phone,
      },
      areaServed: {
        '@type': 'Country',
        name: country,
      },
      serviceType: [
        'Web Development',
        'Frontend Development',
        'Backend Development',
        'UI/UX Design',
        'Cloud Solutions',
      ],
    };

    // Schema.org JSON-LD para WebSite
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: `${name} - Portfolio`,
      url: url,
      description: summary,
      author: {
        '@type': 'Person',
        name: name,
      },
      inLanguage: [language, 'es', 'en'],
    };

    // Insertar los scripts en el head
    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(personSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(serviceSchema);
    document.head.appendChild(script2);

    const script3 = document.createElement('script');
    script3.type = 'application/ld+json';
    script3.text = JSON.stringify(websiteSchema);
    document.head.appendChild(script3);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
    };
  }, [name, email, phone, city, country, jobTitle, summary, image, url, sameAs, language]);

  return null;
}
