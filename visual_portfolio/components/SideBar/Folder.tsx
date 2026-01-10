'use client';

import { ReactNode, createContext, useContext, useState } from 'react';
import { ChevronIcon, FolderIcon } from '@/components/icons';
import { useFolderContext } from './FolderTree';

// Contexto para manejar la profundidad automáticamente
export const DepthContext = createContext(0);
const PathContext = createContext('');
const IndexContext = createContext(0);

interface FolderProps {
  name: string;
  children?: ReactNode;
  defaultOpen?: boolean;
}

export default function Folder({ name, children, defaultOpen = false }: FolderProps) {
  const depth = useContext(DepthContext);
  const parentPath = useContext(PathContext);
  const indexInParent = useContext(IndexContext);

  // Estado local como fallback
  const [localIsOpen, setLocalIsOpen] = useState(defaultOpen);

  // Intentar usar el contexto global
  const folderContext = useFolderContext();

  // Crear path único basado en el nombre y el índice
  const currentPath = parentPath
    ? `${parentPath}/${name}-${indexInParent}`
    : `${name}-${indexInParent}`;

  // Inicializar el estado en el contexto si existe y aún no está definido
  const isOpenFromContext = folderContext?.isOpen(currentPath, defaultOpen);

  // Obtener estado de apertura
  const isOpen = folderContext ? isOpenFromContext : localIsOpen;

  const indentSize = 20; // 20px por nivel de profundidad

  const handleToggle = () => {
    if (folderContext) {
      folderContext.toggleFolder(currentPath);
    } else {
      setLocalIsOpen(!localIsOpen);
    }
  };

  return (
    <div className="select-none">
      <button
        onClick={handleToggle}
        className="w-full flex items-center gap-1 py-1 text-sm hover:bg-hover transition-colors text-left group relative z-[1]"
        style={{ paddingLeft: `${depth * indentSize + 8}px` }}
      >
        <ChevronIcon isOpen={isOpen} className="flex-shrink-0" />
        <FolderIcon isOpen={isOpen} className="flex-shrink-0 text-primary" />
        <span className="truncate">{name}</span>
      </button>
      {isOpen && children && (
        <div className="relative">
          {/* Línea vertical conectando los hijos - 1px con más opacidad */}
          <div
            className="absolute top-0 bottom-0 w-[0.5px] bg-foreground opacity-60 z-[2] pointer-events-none"
            style={{ left: `${depth * indentSize + 8 + 8}px` }}
          />
          {/* Incrementar depth y actualizar path para los hijos */}
          <DepthContext.Provider value={depth + 1}>
            <PathContext.Provider value={currentPath}>
              {Array.isArray(children)
                ? children.map((child, index) => (
                  <IndexContext.Provider key={index} value={index}>
                    {child}
                  </IndexContext.Provider>
                ))
                : <IndexContext.Provider value={0}>
                  {children}
                </IndexContext.Provider>
              }
            </PathContext.Provider>
          </DepthContext.Provider>
        </div>
      )}
    </div>
  );
}
