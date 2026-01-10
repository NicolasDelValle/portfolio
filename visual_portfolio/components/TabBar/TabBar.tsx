'use client';

import { useTabContext } from '@/context/tabContext';
import Tab from './Tab';

export default function TabBar() {
  const { tabs, activeTabId, setActiveTab, closeTab } = useTabContext();

  if (tabs.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center bg-background-secondary overflow-x-auto">
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          name={tab.name}
          icon={tab.visualIcon}
          isActive={activeTabId === tab.id}
          onActivate={() => setActiveTab(tab.id)}
          onClose={() => closeTab(tab.id)}
        />
      ))}
    </div>
  );
}
