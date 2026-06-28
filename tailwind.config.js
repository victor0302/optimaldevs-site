/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        ink: "var(--color-text-primary)",
        muted: "var(--color-text-muted)",
        accent: "var(--color-accent)",
        "accent-light": "var(--color-accent-light)",
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.05em",
        eyebrow: "0.1em",
      },
      borderRadius: {
        button: "6px",
      },
      maxWidth: {
        prose: "560px",
      },
    },
  },
  plugins: [],
}
