import type { Config } from "tailwindcss";
import tailwindFlip from 'tailwindcss-flip';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nunito)'],
        nunito: ['var(--font-nunito)', 'sans-serif'],
        'noto-arabic': ['var(--font-noto-arabic)', 'sans-serif'],
      },
    },
  },
  plugins: [
    tailwindFlip,
  ],
};

export default config;
