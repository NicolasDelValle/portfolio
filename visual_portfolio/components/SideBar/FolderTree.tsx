'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface FolderState {
  [key: string]: boolean;
}

interface FolderContextType {
  openFolders: FolderState;
  toggleFolder: (path: string) => void;
  isOpen: (path: string, defaultOpen?: boolean) => boolean;
}

const FolderContext = createContext<FolderContextType | null>(null);

export function useFolderContext() {
  const context = useContext(FolderContext);
  return context; // No lanzar error, retornar null si no existe
}

interface FolderTreeProps {
  children: ReactNode;
}

// Componente wrapper que mantiene el estado de todas las carpetas
export function FolderTree({ children }: FolderTreeProps) {
  const [openFolders, setOpenFolders] = useState<FolderState>({});

  const toggleFolder = (path: string) => {
    setOpenFolders(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  const isOpen = (path: string, defaultOpen = false) => {
    if (path in openFolders) {
      return openFolders[path];
    }
    return defaultOpen;
  };

  return (
    <FolderContext.Provider value={{ openFolders, toggleFolder, isOpen }}>
      {children}
    </FolderContext.Provider>
  );
}

