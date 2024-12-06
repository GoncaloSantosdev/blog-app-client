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
          blue: "#0177ED",
        },
        blue: {
          50: "#EFF6FF",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          500: "#6B7280",
          700: "#374151",
          900: "#111827",
        },
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
      },
    },
  },
  plugins: [],
};
