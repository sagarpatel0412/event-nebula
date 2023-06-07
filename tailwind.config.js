/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.component.{js,ts,jsx,tsx}",
    "./containers/**/*.component.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Sedgwick: ["Sedgwick Ave Display", "cursive"],
        Dancing: ["Dancing Script", "cursive"],
        Roboto: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
