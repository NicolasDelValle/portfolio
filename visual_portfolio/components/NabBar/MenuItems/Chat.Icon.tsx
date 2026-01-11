import Dropdown from '@/components/ui/Dropdown';
import { useNavBar } from '@/context/navBarContext';
import { useI18n } from '@/hooks/useI18n';
import { Divider, IconButton, Tooltip } from '@mui/material';
import { MessageSquare } from 'lucide-react';

function ChatIcon() {
  const { t } = useI18n();
  const { isMenuOpen, activeItem, setActiveItem, toggleMenu } = useNavBar();
  const iconName = 'chat';
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
          title={t('iconBar.chat.tooltip')}
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
          <IconButton aria-label="chat" size="small" >
            <MessageSquare size={16} className="text-foreground hover:opacity-80 transition-all" />
          </IconButton>
        </Tooltip>
      }
      items={[
        t('iconBar.chat.startChat'),
        t('iconBar.chat.openChatView'),
        <Divider className="bg-border" key={Math.random()} />,
        t('iconBar.chat.chatHistory'),
        t('iconBar.chat.clearHistory'),
        <Divider className="bg-border" key={Math.random()} />,
        t('iconBar.chat.settings'),
      ]}
    />

  );
}

export default ChatIcon