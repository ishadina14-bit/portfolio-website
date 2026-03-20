/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#020617',
        electric: '#38bdf8',
        violetdeep: '#7c3aed',
        mist: 'rgba(148, 163, 184, 0.14)',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(56, 189, 248, 0.16)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at top left, rgba(56, 189, 248, 0.22), transparent 30%), radial-gradient(circle at 85% 15%, rgba(124, 58, 237, 0.24), transparent 25%), linear-gradient(180deg, #020617 0%, #0f172a 100%)',
      },
    },
  },
  plugins: [],
};
