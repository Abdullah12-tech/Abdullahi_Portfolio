/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: '#06060e',
        abyss: '#0d0d1a',
        surface: '#13132a',
        elevated: '#1a1a35',
        border: {
          DEFAULT: 'var(--c-border)',
          light: 'var(--c-border-light)',
        },
        brand: {
          violet: '#7c3aed',
          'violet-light': '#9f6ef5',
          'violet-dark': '#5b21b6',
          cyan: '#06b6d4',
          'cyan-light': '#22d3ee',
          amber: '#f59e0b',
          'amber-light': '#fbbf24',
          green: '#10b981',
        },
        text: {
          primary: 'var(--c-text-primary)',
          secondary: 'var(--c-text-secondary)',
          muted: 'var(--c-text-muted)',
          accent: 'var(--c-text-accent)',
        },
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.05em' }],
        '10xl': ['10rem', { lineHeight: '0.9', letterSpacing: '-0.06em' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-violet': `
          radial-gradient(at 40% 20%, hsla(270, 80%, 30%, 0.6) 0px, transparent 50%),
          radial-gradient(at 80% 0%, hsla(200, 80%, 25%, 0.4) 0px, transparent 50%),
          radial-gradient(at 0% 50%, hsla(270, 70%, 20%, 0.3) 0px, transparent 50%),
          radial-gradient(at 80% 50%, hsla(200, 70%, 20%, 0.3) 0px, transparent 50%),
          radial-gradient(at 0% 100%, hsla(250, 80%, 15%, 0.4) 0px, transparent 50%)
        `,
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'typewriter': 'typewriter 3s steps(40) 1s infinite alternate',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
        'beam': 'beam 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          from: { textShadow: '0 0 10px #7c3aed, 0 0 20px #7c3aed' },
          to: { textShadow: '0 0 20px #7c3aed, 0 0 40px #7c3aed, 0 0 80px #7c3aed' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        beam: {
          '0%': { transform: 'translateX(-200%) rotate(45deg)' },
          '100%': { transform: 'translateX(400%) rotate(45deg)' },
        },
      },
      boxShadow: {
        'glow-violet': '0 0 20px rgba(124, 58, 237, 0.4)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.4)',
        'glow-amber': '0 0 20px rgba(245, 158, 11, 0.4)',
        'card': '0 1px 1px rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.4)',
        'card-hover': '0 1px 1px rgba(0,0,0,0.5), 0 16px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
