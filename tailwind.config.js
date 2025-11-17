/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      rotate: {
        'y-180': '180deg',
        'y-0': '0deg',
      },
      // הסר Perspective מכאן
    },
  },
  // 🛑 מחק את כל תוסף ה-plugins שדנו בו!
  plugins: [],
};