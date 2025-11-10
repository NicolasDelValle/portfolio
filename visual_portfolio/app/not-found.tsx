'use client';

import Link from 'next/link';
import { useI18n } from '@/hooks/useI18n';

export default function NotFound() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {t('common.pageNotFound') || 'Page Not Found'}
        </h2>
        <p className="text-lg text-foreground/60 mb-8 max-w-md mx-auto">
          {t('common.pageNotFoundDescription') || 'The page you are looking for does not exist or has been moved.'}
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          {t('common.backToHome') || 'Back to Home'}
        </Link>
      </div>
    </div>
  );
}
