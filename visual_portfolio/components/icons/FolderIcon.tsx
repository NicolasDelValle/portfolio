interface FolderIconProps {
  className?: string;
  isOpen?: boolean;
}

export default function FolderIcon({ className = '', isOpen = false }: FolderIconProps) {
  if (isOpen) {
    // Carpeta abierta
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className={className}
      >
        <path d="M1.5 14h11l.48-.37 2.63-7-.48-.63H14V3.5l-.5-.5H7.71l-.86-.85L6.5 2h-5l-.5.5v11l.5.5zM2 3h4.29l.86.85.35.15H13v2H8.5l-.35.15-.86.85H3.5l-.47.34-1 3.08L2 3zm10.13 10H2.19l1.67-5H7.5l.35-.15.86-.85h5.79l-2.37 6z" />
      </svg>
    );
  }

  // Carpeta cerrada
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
    >
      <path d="M14.5 3H7.71l-.85-.85L6.51 2h-5l-.5.5v11l.5.5h13l.5-.5v-10L14.5 3zm-.51 8.49V13h-12V7h4.49l.35-.15.86-.86H14v1.5l-.01 4zm0-6.49h-6.5l-.35.15-.86.86H2v-3h4.29l.85.85.36.15H14l-.01.99z" />
    </svg>
  );
}
