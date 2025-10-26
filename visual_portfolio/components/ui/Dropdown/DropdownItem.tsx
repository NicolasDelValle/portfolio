import React, { isValidElement } from 'react';
import { DropdownItemProps } from '@/types/dropdownTypes';

export function DropdownItem({ item, index, onClose, onClick }: DropdownItemProps) {
  // String simple
  if (typeof item === 'string') {
    return (
      <button
        key={index}
        className="w-full text-left px-4 my-1 hover:bg-primary text-foreground dark:hover:text-foreground hover:text-hover transition-colors text-[13px] rounded-md"
        onClick={onClose}
      >
        {item}
      </button>
    );
  }

  // Objeto con name y action
  if (typeof item === 'object' && item !== null && 'name' in item && 'action' in item) {
    return (
      <button
        key={index}
        className="w-full text-left px-4 my-1 hover:bg-primary text-foreground dark:hover:text-foreground hover:text-hover transition-colors text-[13px] rounded-md"
        onClick={() => {
          item.action();
          onClick?.();
        }}
      >
        {item.name}
      </button>
    );
  }

  // Componente React
  if (isValidElement(item)) {
    return (
      <>
        {item}
      </>
    );
  }

  // Fallback para casos no esperados
  return null;
}