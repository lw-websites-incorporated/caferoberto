/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './config/**/*.{js,ts}',
  ],
  safelist: [
    {
      pattern: /^(bg|text|border)-(red|green|blue|yellow|amber|rose|lime|orange|gray|slate|neutral|stone|purple|pink|teal|cyan|indigo|violet|fuchsia|emerald|sky|zinc|brown)-(\d{2,3})$/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-opensans)', 'system-ui', 'sans-serif'],
        opensans: ['var(--font-opensans)', 'system-ui', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        primary: '#1D2B3A',
        secondary: '#1A1D21',
        accent: '#F2F4F7',
        'accent-gray': '#D6D9DE',
        dark: '#1A1D21',
      },
    },
  },
  plugins: [],
}
