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
        field: "var(--color-field-border)",
      },
      fontFamily: {
        // BRAND.md §4: mono is the identity. `display` drives headings and
        // anything structural; `sans` keeps long-form copy readable.
        display: ['"JetBrains Mono"', '"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
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
