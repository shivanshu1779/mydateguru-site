/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        border: "#e5e7eb",
        muted: "#f9fafb",
        "muted-foreground": "#6b7280",
        background: "#ffffff",
        foreground: "#111827",
      },
    },
  },
  plugins: [],
}
