'use client';

import { useTabContext } from '@/context/tabContext';
import Tab from './Tab';

export default function TabBar() {
  const { tabs, activeTabId, setActiveTab, closeTab } = useTabContext();

  if (tabs.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center bg-background-secondary overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-800 hover:scrollbar-thumb-gray-500 dark:hover:scrollbar-thumb-gray-500 scroll-smooth">
      <style jsx>{`
        div::-webkit-scrollbar {
          height: 8px;
        }
        
        div::-webkit-scrollbar-track {
          background: transparent;
        }
        
        div::-webkit-scrollbar-thumb {
          background: rgb(156 163 175);
          border-radius: 4px;
        }
        
        div::-webkit-scrollbar-thumb:hover {
          background: rgb(107 114 128);
        }
        
        :global(.dark) div::-webkit-scrollbar-thumb {
          background: rgb(75 85 99);
        }
        
        :global(.dark) div::-webkit-scrollbar-thumb:hover {
          background: rgb(107 114 128);
        }
      `}</style>
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
