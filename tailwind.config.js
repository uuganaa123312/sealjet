module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        fade: "fadeIn 0.3s ease-in",
      },
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0.3 },
          "100%": { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
};
