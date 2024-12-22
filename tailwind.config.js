import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryColor: "#4A90E2 ",
        primaryAccent: "#1d62b4",
        backGround: "#F5F5F5",
        darkBg: "#1E1E2C",
        darkText: "#EDEDED",
      },
      fontFamily: {
        lato: ["Lato", "serif"],
      },
      backgroundImage: {
        banner: "url('./src/assets/banner.jpg')",
      },
    },
  },
  plugins: [daisyui],
};
