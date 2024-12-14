/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'primary-green': '#26B888',
        'primary-red': '#DA1E28',
        gray: '#F5F5F5',
        green: '#ECF4E2',
        lightGreen: '#F2F6EC',
        lightGray: '#F8F8F8',
      },
    },
  },
  plugins: [],
};
