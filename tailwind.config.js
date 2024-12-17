/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-green': '#26B888',
        'primary-green-ripple': '#069868',
        'primary-red': '#DA1E28',
        'custom-gray': '#F5F5F5',
        'custom-green': '#ECF4E2',
        'custom-lightGreen': '#F2F6EC',
        'custom-lightGray': '#F8F8F8',
        'custom-disabled': '#A3A3A3',
      },
    },
  },
  plugins: [],
};
