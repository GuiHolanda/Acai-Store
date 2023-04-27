/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(88 28 135)",
        "light-gray": "rgb(113 113 122)",
        "dark-gray": "rgb(63 63 70)",
      },
    },
  },
  plugins: [],
};
