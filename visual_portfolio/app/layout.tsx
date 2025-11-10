import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/themeContext";
import { LanguageProvider } from "@/context/languageContext";

// Fuente principal de VS Code (similar a Segoe UI)
const vsCodeFont = Inter({
  variable: "--font-vscode-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Fuente monospace como VS Code
const vsCodeMono = Inter({
  variable: "--font-vscode-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nicolasdelvalle.dev'), // IMPORTANTE: Reemplaza con tu dominio real
  title: {
    default: 'Nicolás Del Valle - Full Stack Developer | React, Next.js, TypeScript',
    template: '%s | Nicolás Del Valle'
  },
  description: 'Full Stack Developer especializado en React, Next.js y TypeScript. Desarrollo web moderno, aplicaciones escalables y soluciones cloud. Contacto: contact@nicolasdelvalle.dev',
  keywords: [
    'Full Stack Developer',
    'Desarrollador Web',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Node.js',
    'Nicolás Del Valle',
    'Nicolas Del Valle',
    'Nico Del Valle',
    'Web Development Uruguay',
    'Desarrollo Web Montevideo',
    'Desarrollador Uruguay',
    'Programador Uruguay',
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Uruguay',
    'React Uruguay',
    'Next.js Uruguay',
    'Cloud Computing',
    'Azure Developer',
    'AWS Developer',
    'TypeScript Developer',
    'JavaScript Developer',
    'Web App Development',
    'Desarrollo de Aplicaciones Web',
    'Diseño Web Uruguay',
    'Programador Freelance Uruguay',
  ],
  authors: [{ name: 'Nicolás Del Valle', url: 'https://nicolasdelvalle.dev' }],
  creator: 'Nicolás Del Valle',
  publisher: 'Nicolás Del Valle',
  formatDetection: {
    email: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'es_UY',
    alternateLocale: ['en_US'],
    url: 'https://nicolasdelvalle.dev',
    siteName: 'Nicolás Del Valle - Portfolio',
    title: 'Nicolás Del Valle - Full Stack Developer',
    description: 'Full Stack Developer especializado en React, Next.js y TypeScript. Desarrollo web moderno y soluciones cloud.',
    images: [
      {
        url: '/og-image.png', // Necesitarás crear esta imagen
        width: 1200,
        height: 630,
        alt: 'Nicolás Del Valle - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nicolás Del Valle - Full Stack Developer',
    description: 'Full Stack Developer especializado en React, Next.js y TypeScript',
    images: ['/og-image.png'],
    // creator: '@tu_twitter', // Añade tu Twitter si lo tienes
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Añade estos después de verificar tu sitio
    // google: 'tu-codigo-de-verificacion',
    // yandex: 'tu-codigo-yandex',
    // bing: 'tu-codigo-bing',
  },
  alternates: {
    canonical: 'https://nicolasdelvalle.dev',
    languages: {
      'es-UY': 'https://nicolasdelvalle.dev',
      'en-US': 'https://nicolasdelvalle.dev/en',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="w-full h-full m-0 p-0">
      <body
        className={`${vsCodeFont.variable} ${vsCodeMono.variable} antialiased bg-background text-foreground transition-colors duration-200 w-full h-full m-0 p-0`}
      >
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}