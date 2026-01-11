'use client';

import { useI18n } from "@/hooks/useI18n";
import { TriangleAlert } from "lucide-react";
import Link from "next/link";

export default function InitialScreen() {
  const { t } = useI18n();

  return (
    <div className="h-full overflow-auto pb-8">
      <div className="max-w-4xl mx-auto p-8 space-y-8">
        {/* Mobile Warning */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 flex items-start gap-3">
          <TriangleAlert className="text-warning" />
          <div className="flex-1">
            <p className="font-semibold text-yellow-600 dark:text-yellow-500">
              {t('initialScreen.mobileWarning.title')}
            </p>
            <p className="text-sm text-yellow-700 dark:text-yellow-400 mt-1">
              {t('initialScreen.mobileWarning.description')}
            </p>
          </div>
        </div>

        {/* HR/Non-Technical Users Notice */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <TriangleAlert className="text-warning" />
            <div className="flex-1">
              <p className="font-semibold text-yellow-600 dark:text-yellow-500">
                {t('initialScreen.hrNotice.title')}
              </p>
              <p className="text-sm text-yellow-700 dark:text-yellow-400 mt-1">
                {t('initialScreen.hrNotice.description')}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center">

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              {t('initialScreen.hrNotice.button')}
            </Link>
            
            <p className="text-xs text-yellow-700 dark:text-yellow-400">
              {t('initialScreen.hrNotice.logoTip')}
            </p>
          </div>
        </div>

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-primary">
            {t('initialScreen.title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('initialScreen.subtitle')}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Main Content */}
        <div className="space-y-6">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">
              {t('initialScreen.whatIsThis.title')}
            </h2>
            <p className="text-foreground leading-relaxed">
              {t('initialScreen.whatIsThis.description')}
            </p>
            <p className="text-foreground leading-relaxed">
              {t('initialScreen.detailedInfo.description')}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">
              {t('initialScreen.visualExperience.title')}
            </h2>
            <p className="text-foreground leading-relaxed">
              {t('initialScreen.visualExperience.description')}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">
              {t('initialScreen.howToNavigate.title')}
            </h2>
            <ul className="space-y-2 list-disc list-inside text-foreground">
              <li>{t('initialScreen.howToNavigate.item1')}</li>
              <li>{t('initialScreen.howToNavigate.item2')}</li>
              <li>{t('initialScreen.howToNavigate.item3')}</li>
              <li>{t('initialScreen.howToNavigate.item4')}</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">
              {t('initialScreen.explore.title')}
            </h2>
            <p className="text-foreground leading-relaxed">
              {t('initialScreen.explore.description')}
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-6">
          <p className="text-sm text-muted-foreground text-center">
            {t('initialScreen.footer')}
          </p>
        </div>
      </div>
    </div>
  );
}
