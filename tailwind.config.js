/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "rob": ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
