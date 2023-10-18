/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "788px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        primary: "#011C37",
        sec: "#77D5FC",
      },
    },

    fontFamily: {
      audiowide: ["Audiowide", "sans-serif"],
      Tilt: ["Tilt Neon", "sans-serif"],
      pixel: ["Pixelify Sans", "sans-serif"],
      Merri: ["Merriweather", "sans-serif"],
      Dancing: ["Dancing Script", "sans-serif"],
      paci: ["Pacifico", "sans-serif"],
    },
  },
  plugins: [],
};

