import Dropdown from '@/components/ui/Dropdown';
import { useNavBar } from '@/context/navBarContext';
import { useI18n } from '@/hooks/useI18n';
import { Divider, IconButton, Tooltip } from '@mui/material';
import { CircleUserRound } from 'lucide-react';

function UserIcon() {
  const { t } = useI18n();
  const { isMenuOpen, activeItem, setActiveItem, toggleMenu } = useNavBar();
  const iconName = 'user';
  const isOpen = activeItem === iconName && isMenuOpen;

  const handleClick = () => {
    if (isMenuOpen && activeItem === iconName) {
      toggleMenu();
    } else {
      setActiveItem(iconName);
      if (!isMenuOpen) toggleMenu();
    }
  };

  return (

    <Dropdown
      isOpen={isOpen}
      onClick={handleClick}
      onClose={toggleMenu}
      onClickOverlay={toggleMenu}
      config={{
        orientation: "bottom",
        position: "end"
      }}
      trigger={
        <Tooltip
          title={t('iconBar.account.tooltip')}
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
          <IconButton aria-label="account" size="small" >
            <CircleUserRound size={16} className="text-foreground hover:opacity-80 transition-all" />
          </IconButton>
        </Tooltip>
      }
      items={[
        t('iconBar.account.signIn'),
        <Divider className="bg-border" key={Math.random()} />,
        t('iconBar.account.backupSettings'),
        t('iconBar.account.syncSettings'),
        <Divider className="bg-border" key={Math.random()} />,
        t('iconBar.account.accountSettings'),
      ]}
    />

  );
}

export default UserIcon