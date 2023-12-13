/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        opac: {
          '0%': { filter: 'opacity(0%)' },
          '100%': { filter: 'opacity(100%)' }
        }
      },
      animation: {
        opac: 'opac 2s ease'
      }
    },
  },
  plugins: [],
}

