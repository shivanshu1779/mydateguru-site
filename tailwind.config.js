/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d6f0ff',
          200: '#aee0ff',
          300: '#7bcdff',
          400: '#49b6ff',
          500: '#1f9dff',
          600: '#0f7bd6',
          700: '#0c61aa',
          800: '#0d4d85',
          900: '#0f3f6b',
        }
      }
    },
  },
  plugins: [],
}
