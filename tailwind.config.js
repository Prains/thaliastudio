/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      text: ["Open Sans", "sans-serif"],
      title: ["Comfortaa", "cursive"],
    },
    extend: {
      dropShadow: {
        button: "0px 2px 10px #58FF92",
        buttonActive: "inset 0px 2px 15px rgba(88, 255, 146, 0.5)",
      },
      colors: {
        buttonGreen: "#D8F8E3",
        textDefault: "#282828",
        textActive: "#58FF92",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
