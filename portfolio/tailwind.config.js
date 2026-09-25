/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        // paper / ink
        paper: "#f4f1ea",
        cream: "#faf8f3",
        ink: "#0e1512",
        // single confident accent
        emerald: {
          DEFAULT: "#0f7a52",
          deep: "#0a4d34",
          bright: "#12b878",
          soft: "#dff2e9",
        },
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      boxShadow: {
        card: "0 20px 50px -20px rgba(14, 21, 18, 0.35)",
        cardHover: "0 30px 70px -25px rgba(14, 21, 18, 0.45)",
        float: "0 40px 90px -40px rgba(14, 21, 18, 0.5)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        ticker: "ticker 28s linear infinite",
      },
    },
  },
  plugins: [],
};
