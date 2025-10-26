import React from 'react'

interface OverlayProps {
  onClick?: () => void;
  classname?: string;
}

function Overlay({ onClick = () => { }, classname }: OverlayProps) {
  return (
    <div
      className={`fixed inset-0 z-10 ${classname}`}
      onClick={onClick}
    />
  )
}

export default Overlay