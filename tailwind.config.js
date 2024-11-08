/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        thicccboi: ["THICCCBOI", "sans-serif"],
      },
      colors: {
        "secondary-500": "rgb(240 205 144 /  var(--tw-bg-opacity))", // Supports opacity
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        html: { fontFamily: "THICCCBOI, sans-serif" },
        body: { fontFamily: "THICCCBOI, sans-serif" },
      });
    },
  ],
};
