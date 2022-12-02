/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Babes: ["Bebas Neue", "cursive"],
        Ubuntu: ["Ubuntu", " sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
