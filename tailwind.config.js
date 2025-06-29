/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'forest-green': '#0d5d29',
        'olive-green': '#8b9340',
        'light-green': '#e8f4ea',
        'accent-green': '#16a34a',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        'reseau-sante': {
          'primary': '#0d5d29',
          'secondary': '#8b9340',
          'accent': '#16a34a',
          'neutral': '#3d4451',
          'base-100': '#ffffff',
          'info': '#3abff8',
          'success': '#36d399',
          'warning': '#fbbd23',
          'error': '#f87272',
        },
      },
    ],
  },
};