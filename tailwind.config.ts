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
          bg: "#030014",
          surface: "#0a0618",
          elevated: "#120a24",
          purple: "#7c3aed",
          violet: "#9333ea",
          indigo: "#6366f1",
          blue: "#6366f1",
          orange: "#f97316",
          amber: "#fb923c",
          pink: "#ec4899",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      spacing: {
        "4.5": "1.125rem",
        "18": "4.5rem",
      },
      backgroundImage: {
        "nova-gradient":
          "linear-gradient(135deg, #7c3aed 0%, #9333ea 45%, #f97316 100%)",
        "nova-gradient-soft":
          "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(147,51,234,0.1) 50%, rgba(249,115,22,0.08) 100%)",
        "nova-radial":
          "radial-gradient(1200px circle at 50% -10%, rgba(124,58,237,0.28), transparent 55%)",
        "nova-radial-orange":
          "radial-gradient(800px circle at 80% 20%, rgba(249,115,22,0.12), transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(124, 58, 237, 0.55)",
        "glow-lg": "0 0 80px -20px rgba(147, 51, 234, 0.55)",
        "glow-orange": "0 0 50px -12px rgba(249, 115, 22, 0.45)",
        card: "0 24px 48px -24px rgba(0, 0, 0, 0.6)",
        "card-hover":
          "0 32px 64px -24px rgba(124, 58, 237, 0.25), 0 0 40px -10px rgba(249, 115, 22, 0.15)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-22px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.85" },
        },
        "orb-drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 15px) scale(0.95)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        shimmer: "shimmer 6s ease infinite",
        "pulse-glow": "pulse-glow 5s ease-in-out infinite",
        "orb-drift": "orb-drift 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
