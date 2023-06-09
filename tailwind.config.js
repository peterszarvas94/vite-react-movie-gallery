/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1c1c1c',
        'secondary': '#f6f6f1',
        'btn-primary': '#5c43f5',
        'btn-secondary': '#f5f5f0',
        'accent': '#fa7b6a',
      },
      fontFamily: {
        'title': '"VT323", monospace',
        'body': '"Space Mono", monospace',
      },
      boxShadow: {
        'strong': '10px 10px 0 0',
        'weak': '5px 5px 0 0',
        'light': '4px 4px 0 0',
      }
    },
  },
  plugins: [],
}

