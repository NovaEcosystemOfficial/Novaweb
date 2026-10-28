import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nova: {
          bg: "#0a0a0b",
          surface: "#121214",
          elevated: "#1a1a1e",
          purple: "#7c7c88",
          violet: "#a1a1aa",
          indigo: "#71717a",
          blue: "#67e8f9",
          orange: "#c4c4cc",
          amber: "#d4d4d8",
          pink: "#a78bfa",
        },
        glitch: {
          bg: "#0a0a0b",
          surface: "#121214",
          elevated: "#1a1a1e",
          graphite: "#2a2a30",
          silver: "#c8c8d0",
          muted: "#8a8a96",
          cyan: "#22d3ee",
          violet: "#8b5cf6",
        },
      },
      fontFamily: {
        sans: ["var(--font-space)", "system-ui", "sans-serif"],
      },
      spacing: {
        "4.5": "1.125rem",
        "18": "4.5rem",
      },
      backgroundImage: {
        "nova-gradient":
          "linear-gradient(135deg, #e8e8ed 0%, #9a9aa3 55%, #5c5c66 100%)",
        "nova-gradient-soft":
          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
        "nova-radial":
          "radial-gradient(900px circle at 50% -15%, rgba(255,255,255,0.06), transparent 55%)",
        "nova-radial-orange":
          "radial-gradient(700px circle at 85% 15%, rgba(34,211,238,0.04), transparent 50%)",
        "glitch-accent":
          "linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)",
      },
      boxShadow: {
        glow: "0 1px 0 rgba(255,255,255,0.06)",
        "glow-lg": "0 12px 40px -24px rgba(0,0,0,0.8)",
        "glow-orange": "0 12px 32px -20px rgba(0,0,0,0.7)",
        card: "0 16px 40px -28px rgba(0, 0, 0, 0.75)",
        "card-hover": "0 20px 48px -28px rgba(0, 0, 0, 0.85)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "0.45" },
        },
        "orb-drift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(12px, -8px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-slow": "float-slow 10s ease-in-out infinite",
        shimmer: "shimmer 8s ease infinite",
        "pulse-glow": "pulse-glow 8s ease-in-out infinite",
        "orb-drift": "orb-drift 22s ease-in-out infinite",
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
