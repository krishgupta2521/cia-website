/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00ff41',
        'secondary': '#00ffff',
        'accent': '#ff00ff',
        'danger': '#ff0055',
        'dark-bg': '#000000',
        'darker-bg': '#0a0a0f',
        'surface': '#0d0d12',
        'border': 'rgba(0, 255, 65, 0.2)',
        'text': {
          'primary': '#00ff41',
          'secondary': '#00cc33',
          'muted': '#008822',
        },
      },
      fontFamily: {
        sans: ['Fira Code', 'Source Code Pro', 'Share Tech Mono', 'monospace'],
        mono: ['Fira Code', 'Source Code Pro', 'Share Tech Mono', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 255, 65, 0.3), 0 0 40px rgba(0, 255, 65, 0.1)',
        'glow-lg': '0 0 30px rgba(0, 255, 65, 0.5), 0 0 60px rgba(0, 255, 65, 0.2)',
        'accent': '0 0 25px rgba(0, 255, 65, 0.4)',
        'neon': '0 0 10px rgba(0, 255, 65, 0.8), 0 0 20px rgba(0, 255, 65, 0.4), 0 0 30px rgba(0, 255, 65, 0.2)',
        'cyan': '0 0 20px rgba(0, 255, 255, 0.4)',
        'magenta': '0 0 20px rgba(255, 0, 255, 0.4)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00ff41, #00ffff)',
        'gradient-accent': 'linear-gradient(135deg, #ff00ff, #00ffff)',
        'gradient-danger': 'linear-gradient(135deg, #ff0055, #ff00ff)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'smooth-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'terminal-blink': {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'scan-line': {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'smooth-float': 'smooth-float 3s ease-in-out infinite',
        'terminal-blink': 'terminal-blink 1s infinite',
        'glitch': 'glitch 0.3s infinite',
        'scan-line': 'scan-line 3s infinite',
      },
    },
  },
  plugins: [],
};
