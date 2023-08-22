/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#673ab7",

          secondary: "#f000b8",

          accent: "#1dcdbc",

          neutral: "#2b3440",

          "base-100": "#f0ebf8",

          info: "#1a73e8",

          success: "#34a853",

          warning: "#fbbd23",

          error: "#d93025",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
