import Dropdown from '@/components/ui/Dropdown';
import { useTheme } from '@/context/themeContext';
import { useNavBar } from '@/context/navBarContext';
import { useI18n } from '@/hooks/useI18n';
import { Divider, IconButton, Tooltip } from '@mui/material';
import { ChevronRight, Settings } from 'lucide-react';
import { useState } from 'react'

interface SubMenuProps {
  activeSubMenu: string | null;
  setActiveSubMenu: (menu: string | null) => void;
}

function Theme({ activeSubMenu, setActiveSubMenu }: SubMenuProps) {
  const { setDarkMode, setLightMode } = useTheme();
  const { t } = useI18n();
  const isOpen = activeSubMenu === 'theme';

  return (
    <Dropdown
      isOpen={isOpen}
      onClick={() => setActiveSubMenu('theme')}
      onMouseEnter={() => setActiveSubMenu('theme')}
      onClose={() => setActiveSubMenu(null)}
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

function Language({ activeSubMenu, setActiveSubMenu }: SubMenuProps) {
  const { setLanguage, t } = useI18n();
  const isOpen = activeSubMenu === 'language';

  return (
    <Dropdown
      isOpen={isOpen}
      onClick={() => setActiveSubMenu('language')}
      onMouseEnter={() => setActiveSubMenu('language')}
      onClose={() => setActiveSubMenu(null)}
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
  const { isMenuOpen, activeItem, setActiveItem, toggleMenu } = useNavBar();
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const iconName = 'settings';
  const isOpen = activeItem === iconName && isMenuOpen;

  const handleClick = () => {
    if (isMenuOpen && activeItem === iconName) {
      toggleMenu();
      setActiveSubMenu(null);
    } else {
      setActiveItem(iconName);
      if (!isMenuOpen) toggleMenu();
    }
  };

  const handleClose = () => {
    toggleMenu();
    setActiveSubMenu(null);
  };

  return (

    <Dropdown
      isOpen={isOpen}
      onClick={handleClick}
      onClose={handleClose}
      onClickOverlay={handleClose}
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
        t('iconBar.settings.commandPalette'),
        t('iconBar.settings.settings'),
        t('iconBar.settings.extensions'),
        <Divider className="bg-border" key={Math.random()} />,
        t('iconBar.settings.keyboardShortcuts'),
        t('iconBar.settings.userSnippets'),
        <Divider className="bg-border" key={Math.random()} />,
        <Theme key={Math.random()} activeSubMenu={activeSubMenu} setActiveSubMenu={setActiveSubMenu} />,
        <Language key={Math.random()} activeSubMenu={activeSubMenu} setActiveSubMenu={setActiveSubMenu} />,
        <Divider className="bg-border" key={Math.random()} />,
        t('iconBar.settings.checkForUpdates'),
      ]}
    />

  );
}

export default GearIcon