/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'blue-black': '#1E283A',
        'blue-gray': '#849499',
        'cold-gray': '#374664',
        'lilac-blue': '#EDF4FD',
        background: '#FAFAFF',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui'],
      },
      // keyframes: {
      //   fadeIn: {
      //     from: { opacity: 0 },
      //     to: { opacity: 1 },
      //   },
      //   fadeOut: {
      //     from: { opacity: 1 },
      //     to: { opacity: 0 },
      //   },
      // },
      // animation: {
      //   'fade-in': 'fadeIn 0.6s ease-in-out forwards',
      //   'fade-out': 'fadeOut 0.6s ease-in-out forwards',
      // },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(10px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        fadeOut: 'fadeOut 0.5s ease-out',
      },

      transitionProperty: {
        display: 'display',
      },
    },
  },
  plugins: [],
};
