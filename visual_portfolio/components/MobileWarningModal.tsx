'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useI18n } from '@/hooks/useI18n';

interface MobileWarningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileWarningModal: React.FC<MobileWarningModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const { t } = useI18n();

  if (!isOpen) return null;

  const handleGoToTraditional = () => {
    router.push('/');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full mx-4 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {t('portfolio.mobileWarning.title') || 'Experiencia de Escritorio'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            aria-label="Cerrar"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-3">
          <p className="text-gray-700 dark:text-gray-300">
            {t('portfolio.mobileWarning.message') || 
              'Esta experiencia está diseñada para dispositivos de escritorio y puede no funcionar correctamente en dispositivos móviles.'}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {t('portfolio.mobileWarning.suggestion') || 
              'Te recomendamos visitar nuestro portfolio tradicional optimizado para dispositivos móviles.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={handleGoToTraditional}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            {t('portfolio.mobileWarning.goToTraditional') || 'Ir al Portfolio Tradicional'}
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium py-2 px-4 rounded-md transition-colors"
          >
            {t('portfolio.mobileWarning.continueAnyway') || 'Continuar de Todos Modos'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileWarningModal;
