/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideFromLeft: {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideFromBottom: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        popUp: {
          "0%": { transform: "scale(0%)", opacity: "0" },
          "80%": { transform: "scale(110%)", opacity: "1" },
          "100%": { transform: "scale(100%)", opacity: "0.9" },
        },
      },
      animation: {
        slideFromLeft: "slideFromLeft 0.5s ease-out",
        slideFromBottom: "slideFromBottom 1s ease-out",
        popUp1: "popUp 0.3s ease forwards 1s",
        popUp2: "popUp 0.3s ease forwards 1.1s",
        popUp3: "popUp 0.3s ease forwards 1.2s",
      },
    },
  },
  plugins: [],
};
