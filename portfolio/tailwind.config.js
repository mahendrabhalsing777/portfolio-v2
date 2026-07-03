export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0D12',
        surface: '#11151C',
        surfaceHover: '#161B24',
        border: 'rgba(255,255,255,0.07)',
        gold: '#D4A24C',
        goldSoft: 'rgba(212,162,76,0.12)',
        teal: '#34D8B0',
        tealSoft: 'rgba(52,216,176,0.12)',
        ink: '#EDEFF3',
        muted: '#8A93A6',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 50px rgba(212,162,76,.18)',
        glowTeal: '0 0 40px rgba(52,216,176,.18)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '44px 44px',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(30px, -20px)' },
        },
        pulseDot: {
          '0%': { boxShadow: '0 0 0 0 rgba(52,216,176,0.5)' },
          '70%': { boxShadow: '0 0 0 8px rgba(52,216,176,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(52,216,176,0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        drift: 'drift 12s ease-in-out infinite',
        pulseDot: 'pulseDot 2s infinite',
      },
    },
  },
  plugins: [],
}
