import { ReactNode } from "react";

export interface DropdownProps {
  isOpen: boolean;
  name?: string;
  onClick: () => void;
  onClickOverlay?: () => void;
  onClose: () => void;
  onMouseEnter?: () => void;
  items: DropdownItem[];
  config?: DropdownConfigs;
  trigger?: ReactNode;
  className?: string;
}

export interface TriggerProps {
  onClick: () => void;
  onMouseEnter: () => void;
  className: string;
  "aria-expanded": boolean;
  "aria-haspopup": "menu";
}

interface DropdownConfigs {
  orientation?: "left" | "right" | "bottom" | "top";
  position?: "start" | "center" | "end";
}

export const DEFAULT_CONFIG: DropdownConfigs = {
  orientation: "bottom",
  position: "start",
};

export interface DropdownItemProps {
  item: DropdownItem;
  index: number;
  onClose: () => void;
  onClick?: () => void;
}

type DropdownItem = string | ReactNode | ActionItem | (() => string);

interface ActionItem {
  name: string;
  action: () => void;
}
