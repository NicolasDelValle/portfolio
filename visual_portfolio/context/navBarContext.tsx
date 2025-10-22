'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type NavBarState = {
  isMenuOpen: boolean;
  activeItem: string | null;
  setActiveItem: (item: string | null) => void;
  toggleMenu: () => void;
};

const NavBarContext = createContext<NavBarState | undefined>(undefined);

export function NavBarProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const value = {
    isMenuOpen,
    activeItem,
    setActiveItem,
    toggleMenu
  };

  return (
    <NavBarContext.Provider value={value}>
      {children}
    </NavBarContext.Provider>
  );
}

export function useNavBar() {
  const context = useContext(NavBarContext);
  if (context === undefined) {
    throw new Error('useNavBar must be used within a NavBarProvider');
  }
  return context;
}
