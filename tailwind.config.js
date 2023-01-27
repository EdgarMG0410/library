/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'brand-brown': '#e5c6a7',
      'white': '#FFFFFF'
    },
    backgroundImage: {
      'gold-gradient': "linear-gradient(to right, #e5c6a7 , #AA9988)"
    },
    extend: {},
  },
  plugins: [],
}