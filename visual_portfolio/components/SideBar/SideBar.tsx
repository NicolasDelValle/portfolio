
import React, { useState } from 'react'
import { Resizable } from 're-resizable';

function SideBar() {
  const [isResizing, setIsResizing] = useState(false);

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
        }
      }}
      handleClasses={{
        right: ` overflow-hidden transition-colors duration-200 ${isResizing ? 'border-r-primary border-r-2' : 'border-r-border border-r-[1px]'}`
      }}
      onResizeStart={() => setIsResizing(true)}
      onResizeStop={() => setIsResizing(false)}
    >
      Sample with default size
    </Resizable>
  )
}

export default SideBar