import { useCallback } from "react";
import { DropdownProps } from "@/types/dropdownTypes";

export function useDropdown({
  onClick,
  onClose,
  onMouseEnter,
  onClickOverlay,
}: Pick<
  DropdownProps,
  "onClick" | "onClose" | "onMouseEnter" | "onClickOverlay"
>) {
  const handleButtonClick = useCallback(() => {
    onClick();
  }, [onClick]);

  const handleMouseEnter = useCallback(() => {
    if (onMouseEnter) {
      onMouseEnter();
    }
  }, [onMouseEnter]);

  const handleItemClick = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleOverlayClick = useCallback(() => {
    onClickOverlay?.();
  }, [onClickOverlay]);

  return {
    handleButtonClick,
    handleMouseEnter,
    handleItemClick,
    handleOverlayClick,
  };
}
