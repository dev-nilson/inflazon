/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        amazonBlue: {
          light: "#232f3e",
          DEFAULT: "#131921",
        }
      }
    },
  },
  plugins: [],
}
