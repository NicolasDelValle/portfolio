
import React, { useState } from 'react'
import { Resizable } from 're-resizable';
import { useI18n } from "@/hooks/useI18n";

import SubMenu from './SubMenu';
import ScreenTrigger from './ScreenTrigger';
import Folder from './Folder';
import { FolderTree } from './FolderTree';

function SideBar() {
  const [isResizing, setIsResizing] = useState(false);
  const { t } = useI18n();

  return (
    <Resizable
      className={`bg-background-secondary overflow-hidden transition-colors duration-200 ${isResizing ? 'border-r-primary border-r-2' : ''
        }`}
      style={!isResizing ? { boxShadow: 'inset -1px 0 0 0 var(--border)' } : {}}
      defaultSize={{
        width: 320,
      }}
      minHeight='100%'
      enable={{
        top: false,
        right: true,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
      handleStyles={{
        right: {
          width: '4px',
          right: '-2px',
          backgroundColor: 'transparent',
          zIndex: 5,
        }
      }}
      handleClasses={{
        right: ` overflow-hidden transition-colors duration-200 ${isResizing ? 'border-r-primary border-r-2' : 'border-r-border border-r-[1px]'}`
      }}
      onResizeStart={() => setIsResizing(true)}
      onResizeStop={() => setIsResizing(false)}
    >
      <SubMenu />
      <FolderTree>
        <div>
          <Folder name={t('sidebar.projects')}>
            {/* Aquí irían los elementos del proyecto */}
            <Folder name={t('sidebar.projects')}>
              {/* Aquí irían los elementos del proyecto */}
            </Folder>
            <Folder name={t('sidebar.projects')}>
              {/* Aquí irían los elementos del proyecto */}
              <Folder name={t('sidebar.projects')}>
                {/* Aquí irían los elementos del proyecto */}
              </Folder>
              <Folder name={t('sidebar.projects')}>
                {/* Aquí irían los elementos del proyecto */}
              </Folder>
            </Folder>
            <Folder name={t('sidebar.projects')}>
              {/* Aquí irían los elementos del proyecto */}
            </Folder>

          </Folder>
          <ScreenTrigger />
        </div>
      </FolderTree>
    </Resizable>
  )
}

export default SideBar