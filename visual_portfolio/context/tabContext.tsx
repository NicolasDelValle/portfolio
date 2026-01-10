'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export interface Tab {
  id: string;
  name: string;
  icon?: ReactNode;
  visualIcon?: ReactNode | string;
  screen: ReactNode;
}

interface TabContextType {
  tabs: Tab[];
  activeTabId: string | null;
  openTab: (tab: Tab) => void;
  closeTab: (tabId: string) => void;
  setActiveTab: (tabId: string) => void;
  getActiveScreen: () => ReactNode;
}

const TabContext = createContext<TabContextType | null>(null);

export function useTabContext() {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabContext must be used within TabProvider');
  }
  return context;
}

interface TabProviderProps {
  children: ReactNode;
  initialTab?: Tab;
}

export function TabProvider({ children, initialTab }: TabProviderProps) {
  const [tabs, setTabs] = useState<Tab[]>(initialTab ? [initialTab] : []);
  const [activeTabId, setActiveTabId] = useState<string | null>(initialTab?.id || null);

  const openTab = (tab: Tab) => {
    // Verificar si la tab ya existe
    const existingTab = tabs.find(t => t.id === tab.id);

    if (existingTab) {
      // Si ya existe, solo activarla
      setActiveTabId(tab.id);
    } else {
      // Si no existe, agregarla y activarla
      setTabs(prev => [...prev, tab]);
      setActiveTabId(tab.id);
    }
  };

  const closeTab = (tabId: string) => {
    const tabIndex = tabs.findIndex(t => t.id === tabId);
    const newTabs = tabs.filter(t => t.id !== tabId);
    setTabs(newTabs);

    // Si cerramos la tab activa, activar otra
    if (activeTabId === tabId) {
      if (newTabs.length > 0) {
        // Activar la tab anterior o la siguiente
        const newActiveIndex = tabIndex > 0 ? tabIndex - 1 : 0;
        setActiveTabId(newTabs[newActiveIndex]?.id || null);
      } else {
        setActiveTabId(null);
      }
    }
  };

  const setActiveTab = (tabId: string) => {
    if (tabs.find(t => t.id === tabId)) {
      setActiveTabId(tabId);
    }
  };

  const getActiveScreen = () => {
    const activeTab = tabs.find(t => t.id === activeTabId);
    return activeTab?.screen || null;
  };

  return (
    <TabContext.Provider
      value={{
        tabs,
        activeTabId,
        openTab,
        closeTab,
        setActiveTab,
        getActiveScreen,
      }}
    >
      {children}
    </TabContext.Provider>
  );
}
