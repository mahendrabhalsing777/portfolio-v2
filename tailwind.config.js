
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0D12',
        surface: '#12161F',
        surface2: '#171C27',
        border: '#232838',
        ink: '#E7E9EE',
        muted: '#8B93A7',
        gold: '#D4A24C',
        teal: '#4CD4B0',
        danger: '#E0654F',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(212,162,76,.18)',
        card: '0 20px 60px -20px rgba(0,0,0,.6)',
      },
      backgroundImage: {
        'console-grid':
          'linear-gradient(rgba(231,233,238,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(231,233,238,.035) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '44px 44px',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(30px, -40px) scale(1.08)' },
        },
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        drift: 'drift 14s ease-in-out infinite',
        blink: 'blink 1s step-start infinite',
        scan: 'scan 3s linear infinite',
      },
    },
  },
  plugins: [],
}

