/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        optiflowTheme: {
          primary: "#020831",
          secondary: "#23B68B",
          accent: "#CFBC0C",
          neutral: "#767F7D",
          "base-100": "#ffffff",
          info: "#12C7D2",
          success: "#68C162",
          warning: "#F48411",
          error: "#BC0D0D",
        },
      },
    ],
  },
  plugins: [animations, require("daisyui")],
};

