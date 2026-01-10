'use client';

import Image from 'next/image';
import FileIcon from '@/components/icons/FileIcon';
import { extensionsToIcon } from '@/lib/const';

interface TabProps {
  name: string;
  icon?: React.ReactNode | string;
  isActive: boolean;
  onActivate: () => void;
  onClose: () => void;
  fileIcon?: string;
}



export default function Tab({ name, icon, isActive, onActivate, onClose, fileIcon }: TabProps) {
  const renderIcon = (icon: React.ReactNode | string | undefined) => {
    if (!icon && !fileIcon) return <FileIcon width={14} height={14} className="flex-shrink-0" />;

    if (fileIcon) {
      const IconComponent = extensionsToIcon[fileIcon];
      return typeof IconComponent === 'function' ? <IconComponent /> : IconComponent;
    }

    if (typeof icon === 'string') {
      if (/\p{Emoji}/u.test(icon)) {
        return <span className="text-sm">{icon}</span>;
      }
      return (
        <Image
          src={icon}
          alt=""
          width={14}
          height={14}
          className="flex-shrink-0"
        />
      );
    }

    return icon;
  };

  return (
    <div
      className={`flex items-center gap-1 px-3 py-2 border-r border-border cursor-pointer group min-w-fit relative ${isActive ? 'bg-background text-foreground' : 'hover:bg-hover'
        }`}
      onClick={onActivate}
    >
      {isActive && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
      )}

      {renderIcon(icon)}
      <span className="text-[13px] truncate max-w-[150px]">{name}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className={`ml-2 opacity-0 group-hover:opacity-100 rounded p-1 transition-opacity ${isActive ? 'hover:bg-hover' : 'hover:bg-background-elevated'
          }`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"
          />
        </svg>
      </button>
    </div>
  );
}
