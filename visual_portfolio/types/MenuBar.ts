import { ReactNode } from "react";

interface ActionItem {
  name: string;
  action: () => void;
}

export type MenuItem = string | ReactNode | ActionItem;
