const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#1A73E8",
        secondary: "#FF5722",
      },
      fontFamily: {
        sans: ['"Roboto"', "Arial", "sans-serif"],
        heading: ['"Poppins"', "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
});
