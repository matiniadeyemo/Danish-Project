/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9111bb',
        midnight: '#14143c',
        shadow: '#72728a'
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.05)' },
        },
        bounceDelay: {
          '0%, 80%, 100%': { transform: 'scaleY(0.4)' },
          '40%': { transform: 'scaleY(1.0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-in-out',
        fadeInUp: 'fadeInUp 0.8s ease-out',
        fadeUp: 'fadeUp 0.6s ease-out',
        pulseSlow: 'pulseSlow 2s ease-in-out infinite',
        bounceDelay: 'bounceDelay 1s infinite ease-in-out',
      },
    },
  },
}
