/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.underline-on-hover': {
          position: 'relative',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          "&:after": {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '2px',
            backgroundColor: 'currentColor',
            transform: 'scaleX(0)',
            transformOrigin: 'bottom right',
            transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          },
          "&:hover:after": {
            transform: 'scaleX(1)',
            transformOrigin: 'bottom left',
          },
        }
      })
    })
  ]
}
