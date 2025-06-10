export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add Flowbite paths
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  plugins: [
    require("@tailwindcss/forms"),
    require("flowbite/plugin")
  ]
}