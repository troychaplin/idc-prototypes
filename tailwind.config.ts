import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "idc-blue": {
          DEFAULT: "#3678b9",
          50: "#f3f6fc",
          100: "#e6eef8",
          200: "#c7daf0",
          300: "#95bbe4",
          400: "#5d99d3",
          500: "#3678b9",
          600: "#2862a1",
          700: "#214e83",
          800: "#1f446d",
          900: "#1f3a5b",
          950: "#14253d",
        },
        "idc-orange": {
          DEFAULT: "#ffac33",
          50: "#fff8eb",
          100: "#ffedc6",
          200: "#ffd888",
          300: "#ffbe4a",
          400: "#ffac33",
          500: "#f98007",
          600: "#dd5b02",
          700: "#b73c06",
          800: "#942e0c",
          900: "#7a260d",
          950: "#461102",
        },
      },
      margin: {
        "offset-center": "calc(-50vw + 50%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
