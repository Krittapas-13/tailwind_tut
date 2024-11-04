/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        papayawhip: {
          light: '#fef4e4',
          DEFAULT: '#ffefd5',
          dark: '#fee5bc',
        }
      },
      screens: {
        // Updated aspect ratio breakpoints for modern iPhones
        widescreen: { raw: "(min-aspect-ratio: 3/1)" },
        tallscreen: { raw: "(max-aspect-ratio: 9/16)" },

        // Common device breakpoints (optional, add if needed)
        "iphone-se": "375px",
        "iphone-xr": "414px",
        "iphone-14-pro": "393px",
        "iphone-14-pro-max": "430px",
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
