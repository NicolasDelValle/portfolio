import Dropdown from '@/components/ui/Dropdown';
import { useTheme } from '@/context/themeContext';
import { Divider, IconButton, Tooltip } from '@mui/material';
import { ChevronRight, MessageSquare } from 'lucide-react';
import { useState } from 'react'

function Theme() {
  const { setDarkMode, setLightMode } = useTheme();
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
            Theme
          </span>
          <ChevronRight className='opacity-50' width={16} height={16} />
        </button>
      }
      items={[
        { name: "Light", action: setLightMode },
        { name: "Dark", action: setDarkMode },
      ]}
    />
  );
}

function ChatIcon() {

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
          title="Manage"
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
            <MessageSquare size={16} className="text-foreground hover:opacity-80 transition-all" />
          </IconButton>
        </Tooltip>
      }
      items={[
        "Command Palette",
        <Divider className="bg-border" key={Math.random()} />,
        "New File",
        <Theme key={Math.random()} />,
        <Divider className="bg-border" key={Math.random()} />,
        "Close",
        "Exit"
      ]}
    />

  );
}

export default ChatIcon