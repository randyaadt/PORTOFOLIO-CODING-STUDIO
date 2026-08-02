/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0B0F1A',
          900: '#111827',
          800: '#1B2436',
          700: '#293349',
        },
        paper: {
          50: '#FAF9F6',
          100: '#F3F1EC',
        },
        amber: {
          400: '#F5A623',
          500: '#E0921A',
        },
        indigo: {
          400: '#818CF8',
          500: '#6366F1',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
