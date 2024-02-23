/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#84cc16",
          light: "#d9f99d",
        },
        white: {
          DEFAULT: "#F9FAF9",
          light: "#F5F5F5",
        },
        dark: {
          DEFAULT: "#151922",
          main: "#42454e",
          light: "#7F7B86",
          muted: "#BBB8BE",
          gray: "#E4E8E2",
        },
        danger: {
          DEFAULT: "#F74912",
          light: "#F60000",
          accent: "#FF6565",
        },
        info: {
          DEFAULT: "#396DF2",
          yellow: "#F2C70D",
        },
        piechat: {
          direct: "#0088FE",
          other: "#00C49F",
          paid: "#FFBB28",
          social: "#FF8042",
        },
      },
    },
  },
  plugins: [],
};
