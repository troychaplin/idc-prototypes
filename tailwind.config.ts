/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./blocks/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      typography: (theme: (path: string) => string | undefined) => ({
        DEFAULT: {
          css: {
            "h1, h2, h3, h4": {
              "font-weight": "600",
            },
            a: {
              "font-weight": "semibold",
              "text-decoration": "none",
              "&:hover": {
                "text-decoration": "underline",
              },
            },
            "--tw-prose-body": theme("colors.idc-black[900]"),
            "--tw-prose-headings": theme("colors.idc-black[800]"),
            // "--tw-prose-lead": theme("colors.pink[700]"),
            "--tw-prose-links": theme("colors.idc-blue[600]"),
            // "--tw-prose-bold": theme("colors.pink[900]"),
            // "--tw-prose-counters": theme("colors.pink[600]"),
            "--tw-prose-bullets": theme("colors.idc-black[600]"),
            // "--tw-prose-hr": theme("colors.pink[300]"),
            // "--tw-prose-quotes": theme("colors.pink[900]"),
            // "--tw-prose-quote-borders": theme("colors.pink[300]"),
            // "--tw-prose-captions": theme("colors.pink[700]"),
            // "--tw-prose-code": theme("colors.pink[900]"),
            // "--tw-prose-pre-code": theme("colors.pink[100]"),
            // "--tw-prose-pre-bg": theme("colors.pink[900]"),
            // "--tw-prose-th-borders": theme("colors.pink[300]"),
            // "--tw-prose-td-borders": theme("colors.pink[200]"),
          },
        },
      }),
      colors: {
        "idc-black": {
          DEFAULT: "#000000",
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#000000",
        },
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
  plugins: [require("@tailwindcss/typography")],
};
export default config;
