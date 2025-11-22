/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: "hsl(var(--primary))",

        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",

        border: "hsl(var(--border))",

        // Custom static palette
        "text-light": "#333333",
        "text-dark": "#FFFDF8",
        "background-light": "#FFFDF8",
      },

      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Work Sans", "sans-serif"],
      },

      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },

      letterSpacing: {
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.2em",
      },
    },
  },

  plugins: [],
};
