// /** @type {import('tailwindcss').Config} */
// module.exports = {
// content: [],
// theme: {
// extend: {},
// },
// plugins: [],
// }
//
//

const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "././pages/**/*.{html,js}",
    "././components/**/*.{html,js}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",

        "primary-dark": "#0D2438",
        "secondary-dark": "#102D44",
        "ternary-dark": "#1E3851",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  customUtilities: {},
  plugins: ["@tailwindcss/forms"],
};
