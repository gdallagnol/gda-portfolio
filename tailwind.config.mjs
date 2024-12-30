/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'blue-black': '#1E283A',
        'blue-gray': '#849499',
        'cold-gray': '#374664',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui'],
      },
    },
  },
  plugins: [],
};
