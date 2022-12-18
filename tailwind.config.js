/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // "app-primary" : "#DF4F04",
        "app-primary" : "#06122c",
        "app-light" : "#0a1e48"
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}