// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: "#3525cd",
        "on-primary": "#ffffff",
        background: "#f9f9ff",
        "on-background": "#151c27",
        card: "#ffffff",
        border: "#c7c4d8", // mapped from outline-variant
        "muted-foreground": "#464555", // mapped from on-surface-variant
        foreground: "#151c27",
        error: "#ba1a1a",
        tertiary: "#00505f",
        "tertiary-container": "#006a7c",
      },
      borderRadius: {
        xl: "16px",
      },
    },
  },
}