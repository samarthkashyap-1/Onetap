/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#011C37",
        sec: "#77D5FC",
      },
    },

    fontFamily: {
      audiowide: ["Audiowide", "sans-serif"],
    },
  },
  plugins: [],
};

