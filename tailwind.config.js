/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: { lg: '960px', xl: '1120px', '2xl': '1320px' },
    },
    extend: {
      colors: {
        brand: {
          50:'#eef6ff',100:'#d9ecff',200:'#b7d7ff',300:'#8bc0ff',400:'#58a5ff',
          500:'#2d8cff',600:'#1673e6',700:'#0c5ec2',800:'#0d4c99',900:'#0f3f7d',
        },
      },
      borderRadius: { xl: '1.25rem', '2xl': '1.75rem' },
      boxShadow: { soft: '0 10px 30px rgba(2,6,23,.06)', elev: '0 20px 40px rgba(2,6,23,.08)' },
      backgroundImage: {
        hero: 'linear-gradient(180deg,#ffffff 0%,#f7fbff 100%)',
        grid: 'radial-gradient(circle at 1px 1px, rgba(2,6,23,.06) 1px, transparent 0)',
      },
      fontFamily: {
        sans: ['var(--font-inter)','system-ui','ui-sans-serif','Segoe UI','Roboto','Arial'],
      },
    },
  },
  plugins: [],
}
