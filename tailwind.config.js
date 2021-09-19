const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        serif: ["Josefin Sans", "serif"],
      },
      colors: {
        "fem-blue": "hsl(235, 24%, 19%)",
        "fem-dark-blue": "hsl(235, 21%, 11%)",
      },
      backgroundImage: (theme) => ({
        "desktop-light": `url('/images/bg-desktop-light.jpg')`,
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
