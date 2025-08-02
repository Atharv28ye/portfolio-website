module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollFade: {
          "0%": { opacity: 0, y: 20 },
          "100%": { opacity: 1, y: 0 },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: 0.5 },
          "100%": { transform: "scale(2)", opacity: 0 },
        },
      },
      animation: {
        scrollFade: "scrollFade 0.8s ease-out forwards",
        ripple: "ripple 0.6s ease-out forwards",
      },
      transitionTimingFunction: {
        easeBack: "cubic-bezier(0.68,-0.55,0.27,1.55)",
      },
      perspective: {
        500: "500px",
      },
    },
  },
  plugins: [],
};
