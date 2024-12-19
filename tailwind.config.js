/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        bgGreen: "#4F9160",
        ActivePink: "#DD2476",
        TextGreen: "#2A6239",
        TextGold: "#FFDD55",
      },
      backgroundImage: {
        Homehero: "url('/ChainBreak.png')",
        HomeMobilehero: "url('/MobileChainBreak.png')",
        HomeGradientHero: "linear-gradient(180deg, #2E3192 0%, #1BFFFF 100%)",
        HomeMission: "linear-gradient(90deg, #11998E 0%, #38EF7D 100%)",
        ButtonGreeenGradient:
          "linear-gradient(180deg, #4F9160 30%, #2A6239 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
