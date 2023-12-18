/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        paleViolet: "hsl(276, 100%, 81%)",
        moderateViolet: "hsl(276, 55%, 52%)",
        destrautedDarkViolet: "hsl(271, 15%, 43%)",
        grayishBlue: "hsl(206, 6%, 79%)",
        veryDarkGrayishViolet: "hsl(271, 36%, 24%)",
        darkGrayishViolet: "hsl(270, 7%, 64%)",
        lightMagneta: "hsl(293, 100%, 63%)",
        lightViolet: "hsl(264, 100%, 61%)",
        lightGrayishViolet: "hsl(270, 20%, 96%)",
        veryDarkDestrautedViolet: "hsl(271, 36%, 24%)",
        veryLightMagneta: "hsl(289, 100%, 72%)",
      },
    },
  },
  plugins: [],
};
