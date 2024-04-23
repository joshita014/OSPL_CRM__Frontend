/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBgColor: "#7446F5",
        secondaryBgColor: "#F6F6F8",
      },
    },
  },
  plugins: [],
};
