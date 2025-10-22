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
    },
  },
  plugins: [],
};
