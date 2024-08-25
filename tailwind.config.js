/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: {
          "100": "#4a4a4a",
          "200": "#2a314f",
        },
        slategray: {
          "100": "#5e6382",
          "200": "rgba(94, 99, 130, 0.09)",
        },
        midnightblue: "#041449",
        darkslateblue: "#38477d",
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        inter: "Inter",
      },
      borderRadius: {
        "18xl": "37px",
        "24xl": "43px",
      },
    },
    fontSize: {
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      "28xl": "47px",
      "19xl": "38px",
      "9xl": "28px",
      base: "16px",
      xl: "20px",
      sm: "14px",
      mini: "15px",
      "75xl": "94px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
