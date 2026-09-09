/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Deep pine — near-black, warm toward green rather than flat neutral black
        pine: {
          950: "#0a1712",
          900: "#0f2119",
          800: "#163325",
          700: "#204333",
          600: "#2f5b41",
          500: "#3f7250",
        },
        // Muted natural sage/moss for secondary accents
        moss: {
          400: "#8ba07e",
          500: "#6b8f63",
          600: "#547654",
        },
        // Warm sand / beige — the site's light base, not sterile white
        sand: {
          50: "#f8f5ee",
          100: "#f1ecdf",
          200: "#e7dfc9",
          300: "#dfd3b0",
          400: "#cbb98d",
        },
        // Discreet antique gold — used sparingly for accents only
        gold: {
          400: "#c2a15c",
          500: "#a9822e",
          600: "#8a6a26",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Manrope'", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        "fade-rise": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scroll-hint": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.6" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
      },
      animation: {
        "fade-rise": "fade-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in 1.1s ease forwards",
        "scroll-hint": "scroll-hint 2.2s ease-in-out infinite",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
