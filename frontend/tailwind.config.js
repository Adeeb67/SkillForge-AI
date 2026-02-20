/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },

      colors: {
        primary: "#6366F1",
        sidebar: "#F6F7FB",
        card: "#FFFFFF",
        textMain: "#111827",
        textSoft: "#6B7280",
      },

      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.05)",
      },

      borderRadius: {
        xl: "14px",
      },
    },
  },
  plugins: [],
};
