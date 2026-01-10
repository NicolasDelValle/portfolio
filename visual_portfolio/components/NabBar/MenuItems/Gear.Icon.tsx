import Dropdown from '@/components/ui/Dropdown';
import { useTheme } from '@/context/themeContext';
import { useI18n } from '@/hooks/useI18n';
import { Divider, IconButton, Tooltip } from '@mui/material';
import { ChevronRight, Settings } from 'lucide-react';
import { useState } from 'react'

function Theme() {
  const { setDarkMode, setLightMode } = useTheme();
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dropdown
      isOpen={isOpen}
      onClick={() => setIsOpen(true)}
      onMouseEnter={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      className="w-full text-left px-4 my-1 hover:bg-primary text-foreground dark:hover:text-foreground hover:text-hover transition-colors text-[13px] rounded-md flex flex-row justify-between items-center"
      config={{
        orientation: "left",
        position: "start"
      }}
      trigger={
        <button>
          <span>
            {t('settings.theme')}
          </span>
          <ChevronRight className='opacity-50' width={16} height={16} />
        </button>
      }
      items={[
        { name: t('settings.light'), action: setLightMode },
        { name: t('settings.dark'), action: setDarkMode },
      ]}
    />
  );
}

function Language() {
  const { setLanguage, t } = useI18n();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dropdown
      isOpen={isOpen}
      onClick={() => setIsOpen(true)}
      onMouseEnter={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      className="w-full text-left px-4 my-1 hover:bg-primary text-foreground dark:hover:text-foreground hover:text-hover transition-colors text-[13px] rounded-md flex flex-row justify-between items-center"
      config={{
        orientation: "left",
        position: "start"
      }}
      trigger={
        <button>
          <span>
            {t('settings.language')}
          </span>
          <ChevronRight className='opacity-50' width={16} height={16} />
        </button>
      }
      items={[
        { name: t('settings.english'), action: () => setLanguage('en') },
        { name: t('settings.spanish'), action: () => setLanguage('es') },
      ]}
    />
  );
}

function GearIcon() {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (

    <Dropdown
      isOpen={isOpen}
      onClick={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      onClickOverlay={() => setIsOpen(false)}
      config={{
        orientation: "bottom",
        position: "end"
      }}
      trigger={
        <Tooltip
          title={t('settings.manage')}
          disableInteractive={isOpen}
          arrow
          className='shadow-2xl'
          placement="bottom"
          slotProps={{
            tooltip: {
              sx: {
                fontSize: '10px',
                padding: '0px 8px',
                marginTop: '1px !important',
                border: '1px solid var(--border)',
                backgroundColor: 'var(--background-secondary)',
                color: 'var(--foreground)',

              }
            },
            arrow: {
              sx: {
                color: 'var(--border)',

              }
            }
          }}
        >
          <IconButton aria-label="delete" size="small" >
            <Settings size={16} className="text-foreground hover:opacity-80 transition-all" />
          </IconButton>
        </Tooltip>
      }
      items={[
        t('settings.commandPalette'),
        <Divider className="bg-border" key={Math.random()} />,
        t('settings.newFile'),
        <Theme key={Math.random()} />,
        <Language key={Math.random()} />,
        <Divider className="bg-border" key={Math.random()} />,
        t('settings.close'),
        t('settings.exit')
      ]}
    />

  );
}

export default GearIcon