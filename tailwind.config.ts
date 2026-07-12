import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      "max-md": { max: "991px" },
      "max-sm": { max: "767px" },
      "max-xs": { max: "480px" },
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
      },
    },
    extend: {
      colors: {
        gold: "#c49b66",
        ink: "#161617",
        void: "#0F0F0F",
        panel: "#0a0a0c",
        muted: "#8f8f8f",
        border: "#222222",
        card: "#222222",
      },
      fontFamily: {
        display: ["Josefin Sans", "sans-serif"],
        body: ["Rubik", "sans-serif"],
        heading: ['"Baloo 2"', "sans-serif"],
      },
      keyframes: {
        "push-in": {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "60%": { opacity: "1", transform: "translateX(10%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "push-out": {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "60%": { opacity: "0", transform: "translateX(110%)" },
          "100%": { opacity: "0", transform: "translateX(100%)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "push-in": "push-in 0.6s ease forwards",
        "push-out": "push-out 0.6s ease forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;