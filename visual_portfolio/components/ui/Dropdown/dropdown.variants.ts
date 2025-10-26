import { cva } from "class-variance-authority";

export const dropdownVariants = cva(
  // Clases base que siempre se aplican
  "absolute z-20 bg-background border border-border shadow-lg min-w-[200px] w-fit flex flex-col rounded-md px-1 py-1",
  {
    variants: {
      orientation: {
        top: "bottom-full mb-1",
        bottom: "top-full mt-1",
        left: "right-full mr-1",
        right: "left-full ml-1",
      },
      position: {
        start: "",
        center: "",
        end: "",
      },
    },
    // Compound variants para combinaciones específicas
    compoundVariants: [
      // Para orientación vertical (top/bottom)
      {
        orientation: ["top", "bottom"],
        position: "start",
        class: "left-0",
      },
      {
        orientation: ["top", "bottom"],
        position: "center",
        class: "left-1/2 -translate-x-1/2",
      },
      {
        orientation: ["top", "bottom"],
        position: "end",
        class: "right-0",
      },
      // Para orientación horizontal (left/right)
      {
        orientation: ["left", "right"],
        position: "start",
        class: "top-0",
      },
      {
        orientation: ["left", "right"],
        position: "center",
        class: "top-1/2 -translate-y-1/2",
      },
      {
        orientation: ["left", "right"],
        position: "end",
        class: "bottom-0",
      },
    ],
    defaultVariants: {
      orientation: "bottom",
      position: "start",
    },
  }
);

export const dropdownButtonVariants = cva(
  "px-2 py-0 hover:bg-hover transition-colors rounded-md z-50",
  {
    variants: {
      isOpen: {
        true: "bg-hover",
        false: "",
      },
    },
  }
);
