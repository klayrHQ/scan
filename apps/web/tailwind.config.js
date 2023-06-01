/** @type {import('tailwindcss').Config} */
const sharedConfig = require("tailwindconfig");
module.exports = {
  ...sharedConfig,
  content: [
    "./slices/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.tsx",
  ],
}
