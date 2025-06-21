/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // navy blue
        background: "#f9fafb", // light background
        darkbg: "#111827",     // deep dark mode
        card: "#ffffff",       // white cards
        darkcard: "#1f2937",   // dark cards
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
