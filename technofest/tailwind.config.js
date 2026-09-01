/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: "#fdf2f2",
          100: "#fde8e8",
          200: "#fbd0d0",
          300: "#f8a9a9",
          400: "#f27373",
          500: "#e54343",
          600: "#cc2929",
          700: "#800000",
          800: "#660000",
          900: "#4a0000",
          950: "#280000",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
