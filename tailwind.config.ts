import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          "dark-blue": "hsl(233, 26%, 24%)",
          "lime-green": "hsl(136, 65%, 51%)",
          "bright-cyan": "hsl(192, 70%, 51%)",
        },
        neutral: {
          "grayish-blue": "hsl(233, 8%, 62%)",
          "light-grayish-blue": "hsl(220, 16%, 96%)",
          "very-light-gray": "hsl(0, 0%, 98%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }: PluginAPI) {
      addComponents({
        ".debug": {
          border: "1px solid",
          borderColor: "red",
        },
      });
    },
  ],
} satisfies Config;
