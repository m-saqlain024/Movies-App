/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        default: "var(--default)",
        btnvariant: "var(--btnvariant)",
        btnvariant1: "var(--btnvariant1)",
      },
    },
  },
  plugins: [],
};
