const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish", ...defaultTheme.fontFamily.sans],
        serif: ["Chonburi", ...defaultTheme.fontFamily.serif],
        pacifco: ["Pacifico", ...defaultTheme.fontFamily.serif],
        dancing: ["Dancing_Script", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        110: "110",
        120: "120",
        130: "130",
        140: "140",
        150: "150",
        160: "160",
        170: "170",
        180: "180",
        190: "190",
        200: "200",
      },
    },
  },
  plugins: [],
};
