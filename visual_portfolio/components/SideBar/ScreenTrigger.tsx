'use client';

import { ReactNode, useContext } from 'react';
import { useTabContext } from '@/context/tabContext';
import { DepthContext } from './Folder';
import Image from 'next/image';
import FileIcon from '../icons/FileIcon';

interface ScreenTriggerProps {
  id: string;
  name: string;
  icon?: ReactNode | string;
  screen: ReactNode;
  fileIcon?: string;
}

export default function ScreenTrigger({ id, name, icon, screen, fileIcon }: ScreenTriggerProps) {
  const { openTab, activeTabId } = useTabContext();
  const depth = useContext(DepthContext);
  const indentSize = 20;

  const isActive = activeTabId === id;

  const handleClick = () => {
    openTab({ id, name, icon, screen });
  };

  const renderIcon = () => {
    if (!icon && !fileIcon) return <FileIcon width={14} height={14} className="flex-shrink-0" />;

    if (fileIcon) {
      return extensionsToIcon[fileIcon] || (
        <Image
          src={fileIcon}
          alt=""
          width={14}
          height={14}
          className="flex-shrink-0"
        />
      );
    }

    // Si es un string, puede ser emoji, URL o path
    if (typeof icon === 'string') {
      // Detectar si es emoji
      if (/\p{Emoji}/u.test(icon)) {
        return <span className="text-sm flex-shrink-0">{icon}</span>;
      }
      // Si es URL o path, usar Image
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

    // Si es un ReactNode, renderizarlo directamente
    return <span className="flex-shrink-0">{icon}</span>;
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full flex items-center gap-1 py-1 text-[13px] text-left group relative z-[1] transition-colors ${isActive ? 'bg-hover' : 'hover:bg-hover'
        }`}
      style={{ paddingLeft: `${depth * indentSize + 8 + 24}px` }} // +24 para alinearse después del icono de carpeta
    >
      {renderIcon()}
      <span className="truncate">{name}</span>
    </button>
  );
}

