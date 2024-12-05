/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          black: "#191919",
          gray: "#292929",
          white: "#FFFFFF",
        },
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
      },
    },
  },
  plugins: [],
};
