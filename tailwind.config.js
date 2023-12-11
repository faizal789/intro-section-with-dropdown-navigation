/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "almost-white-neutral": "hsl(0, 0%, 98%)",
        "medium-gray-neutral": "hsl(0, 0%, 41%)",
        "almost-black-neutral": "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        ["sans"]: ["Epilogue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
