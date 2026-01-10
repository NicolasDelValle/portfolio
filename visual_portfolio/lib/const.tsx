import MarkdownIcon from "@/components/icons/MardownIcon";
import { ReactNode } from "react";

export const extensionsToIcon: { [key: string]: string | (() => ReactNode) } = {
  md: () => <MarkdownIcon width={14} height={14} className="flex-shrink-0" />,
};
