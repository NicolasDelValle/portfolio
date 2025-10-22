import { type MenuItem } from '@/types/MenuBar';
import Divider from '@mui/material/Divider';
import React, { isValidElement } from 'react'

interface DropdownProps {
  isOpen: boolean;
  name: string;
  onClick: () => void;
  onClose: () => void;
  onMouseEnter: () => void;
  items: MenuItem[];
}

function Dropdown({ isOpen, name, onClick, onClose, onMouseEnter, items }: DropdownProps) {

  const renderMenuItem = (item: MenuItem, index: number) => {

    if (typeof item === 'string') {
      return (
        <button
          key={index}
          className="w-full text-left px-4 py-1.5 hover:bg-selection text-foreground transition-colors text-[13px] rounded-sm"
          onClick={onClose}
        >
          {item}
        </button>
      );
    }

    if (typeof item === 'object' && item !== null && 'name' in item && 'action' in item) {
      return (
        <button
          key={index}
          className="w-full text-left px-4 py-1.5 hover:bg-selection text-foreground transition-colors text-[13px] rounded-sm"
          onClick={() => {
            item.action();
            onClick();
          }}
        >
          {item.name}
        </button>
      );
    }

    if (isValidElement(item)) {
      return (
        <div key={index} className="px-4 py-1.5">
          {item}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="flex items-center text-[13px] relative z-20">
      <div className="relative">
        <button
          className={`px-2 py-0 hover:bg-hover transition-colors rounded-md z-50 ${isOpen ? 'bg-hover' : ''
            }`}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          aria-expanded={isOpen}
          aria-haspopup="menu"
        >
          {name}
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={onClose}
            />
            <div
              className="absolute top-full px-1 py-1 left-0 z-20 bg-background border border-border shadow-lg min-w-[200px] w-fit rounded-md"
              role="menu"
              aria-orientation="vertical"
            >
              {items.map(renderMenuItem)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Dropdown