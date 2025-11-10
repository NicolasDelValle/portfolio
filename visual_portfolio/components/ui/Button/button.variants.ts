import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  // Clases base que siempre se aplican
  "inline-flex items-center justify-center font-medium transition-all duration-200  disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
  {
    variants: {
      variant: {
        // Botón primario - Estilo "View Projects"
        primary:
          "bg-primary text-white hover:opacity-90 shadow-md hover:shadow-lg disabled:hover:opacity-50 disabled:shadow-md",

        // Botón outline - Estilo "Get in Touch"
        outline:
          "border-2 border-primary text-primary hover:bg-primary hover:text-white disabled:hover:bg-transparent disabled:hover:text-primary",

        // Botón de idioma activo - Estilo botones EN/ES activos
        language:
          "bg-primary text-onPrimary dark:text-onPrimary shadow-sm disabled:hover:bg-primary/10",

        // Botón de idioma inactivo
        languageInactive:
          "text-foreground hover:bg-hover hover:text-foreground disabled:hover:bg-transparent disabled:hover:text-foreground/60",

        // Botón ghost/transparente
        ghost: "text-foreground hover:bg-hover disabled:hover:bg-transparent",

        // Botón de navegación
        nav: "text-foreground hover:text-primary disabled:hover:text-foreground",

        // Botón destructivo/peligro
        destructive:
          "bg-accent text-white hover:opacity-90 shadow-md hover:shadow-lg disabled:hover:opacity-50",

        // Botón de éxito
        success:
          "bg-success text-white hover:opacity-90 shadow-md hover:shadow-lg disabled:hover:opacity-50",

        // Botón secundario
        secondary:
          "bg-secondary text-white hover:opacity-90 shadow-md hover:shadow-lg disabled:hover:opacity-50",
      },
      size: {
        sm: "px-3 py-1.5 text-sm rounded-md",
        md: "px-4 py-2 text-base rounded-md",
        lg: "px-6 py-3 text-base rounded-lg",
        xl: "px-8 py-4 text-lg rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
