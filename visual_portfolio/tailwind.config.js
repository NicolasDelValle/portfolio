/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--background)",
          secondary: "var(--background-secondary)",
          tertiary: "var(--background-tertiary)",
          elevated: "var(--background-elevated)",
          overlay: "var(--background-overlay)",
          card: "var(--background-card)",
          input: "var(--background-input)",
          code: "var(--background-code)",
        },
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        onPrimary: "var(--onPrimary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        success: "var(--success)",
        warning: "var(--warning)",
        muted: "var(--muted)",
        sidebar: "var(--sidebar)",
        border: "var(--border)",
        hover: "var(--hover)",
        selection: "var(--selection)",
      },
      fontFamily: {
        sans: [
          "var(--font-vscode-sans)",
          "Segoe UI",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-vscode-mono)",
          "Cascadia Code",
          "Consolas",
          "monospace",
        ],
      },
      textShadow: {
        "primary-glow": "var(--primary) 1px 0 10px",
        "primary-sm": "var(--primary) 1px 1px 3px",
        "primary-md": "var(--primary) 2px 2px 8px",
        "primary-lg": "var(--primary) 3px 3px 15px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-primary-glow": {
          textShadow: "var(--primary) 1px 0 10px",
        },
        ".text-shadow-primary-sm": {
          textShadow: "var(--primary) 1px 1px 3px",
        },
        ".text-shadow-primary-md": {
          textShadow: "var(--primary) 2px 2px 8px",
        },
        ".text-shadow-primary-lg": {
          textShadow: "var(--primary) 3px 3px 15px",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
