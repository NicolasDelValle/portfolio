'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '@/hooks/useI18n';
import { useTheme } from '@/context/themeContext';
import Button from '@/components/ui/Button/Button';

interface NavbarProps {
  visualEnabled?: boolean;
}

function Navbar({ visualEnabled = false }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, changeToEnglish, changeToSpanish, t } = useI18n();
  const { theme, toggleTheme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Solo mostrar "Visual" si está habilitado
  const navItems = visualEnabled ? [{ key: 'visual', id: 'visual' }] : [];

  return (
    <nav className=" backdrop-blur-md border-b border-border dark:border-border sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity duration-200">

            <Image
              src="/nico-logo.svg"
              alt="Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href="/visual"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                {t(`common.${item.key}`)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Theme and Language Controls - Desktop */}
            <div className={`flex items-center space-x-3 ${navItems.length > 0 ? 'ml-6 border-l border-gray-200 dark:border-gray-700 pl-6' : ''}`}>
              {/* Theme Toggle Switch */}
              <div className="flex items-center space-x-2">

                <button
                  onClick={toggleTheme}
                  className={`
                    relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900
                    ${theme === 'dark'
                      ? 'bg-blue-600 dark:bg-blue-500'
                      : 'bg-gray-300 dark:bg-gray-600'
                    }
                  `}
                  aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                >
                  <span
                    className={`
                      flex h-4 w-4 transform rounded-full bg-white shadow-lg transition-all duration-300 ease-in-out items-center justify-center
                      ${theme === 'dark' ? 'translate-x-6' : 'translate-x-1'}
                    `}
                  >
                    {theme === 'dark' ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-2.5 h-2.5 text-blue-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-2.5 h-2.5 text-yellow-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        />
                      </svg>
                    )}
                  </span>
                </button>

              </div>

              {/* Language Switcher */}
              <div className="flex items-center space-x-1">
                <Button
                  onClick={changeToEnglish}
                  variant={language === 'en' ? 'language' : 'languageInactive'}
                  size="sm"
                  aria-label="Change to English"
                >
                  EN
                </Button>
                <Button
                  onClick={changeToSpanish}
                  variant={language === 'es' ? 'language' : 'languageInactive'}
                  size="sm"
                  aria-label="Cambiar a Español"
                >
                  ES
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-md transition-colors duration-200"
              aria-label={isMobileMenuOpen ? t('common.close') : t('common.menu')}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
          ? 'max-h-96 opacity-100'
          : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
          <div className="pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href="/visual"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md text-base font-medium transition-colors duration-200"
              >
                {t(`common.${item.key}`)}
              </Link>
            ))}

            {/* Theme Toggle - Mobile */}
            <div className="pt-2 mt-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('common.theme')}</span>
                <div className="flex items-center space-x-2">

                  <button
                    onClick={toggleTheme}
                    className={`
                      relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900
                      ${theme === 'dark'
                        ? 'bg-blue-600 dark:bg-blue-500'
                        : 'bg-gray-300 dark:bg-gray-600'
                      }
                    `}
                    aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                  >
                    <span
                      className={`
                        flex h-4 w-4 transform rounded-full bg-white shadow-lg transition-all duration-300 ease-in-out items-center justify-center
                        ${theme === 'dark' ? 'translate-x-6' : 'translate-x-1'}
                      `}
                    >
                      {theme === 'dark' ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-2.5 h-2.5 text-blue-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-2.5 h-2.5 text-yellow-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                          />
                        </svg>
                      )}
                    </span>
                  </button>

                </div>
              </div>
            </div>

            {/* Language Switcher - Mobile */}
            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
              <p className="px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">{t('common.language')}</p>
              <div className="flex space-x-2 px-3">
                <Button
                  onClick={changeToEnglish}
                  variant={language === 'en' ? 'language' : 'languageInactive'}
                  size="sm"
                  className="flex-1"
                  aria-label="Change to English"
                >English
                </Button>
                <Button
                  onClick={changeToSpanish}
                  variant={language === 'es' ? 'language' : 'languageInactive'}
                  size="sm"
                  className="flex-1"
                  aria-label="Cambiar a Español"
                >Español
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;