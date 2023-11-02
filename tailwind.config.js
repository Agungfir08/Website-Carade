/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        epilogue: "Epilogue",
      },
      height: {
        15: "3.75rem",
      },
      width: {
        15: "3.75rem",
      },
    },
  },
  plugins: [],
});
