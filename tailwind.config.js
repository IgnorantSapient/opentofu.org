/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docusaurus.config.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "#933EFF",
          hover: "#7732D0",
        },
        gray: {
          700: "#505661",
        },
        brand: "#933EFF",
        brandMuted: "#AA4EE7",
        brandLight: "#AA67FF",
        dark1: "#0C192B",
        dark2: "#14253D",
        light1: "#E5E6E6",
        light2: "#F9F9F9",
        light3: "#FFFAFA",
      },
    },
    fontFamily: {
      sans: ['"DM Sans"', "system-ui"],
    },
  },
  plugins: [],
};