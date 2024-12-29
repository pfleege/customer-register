import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monofett: ["var(--font-monofett)"],
        specialElite: ["var(--font-special-elite)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [scrollbarHide],
} satisfies Config;
