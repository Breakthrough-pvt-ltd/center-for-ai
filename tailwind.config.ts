import type { Config } from "tailwindcss";
import tailwindScrollbar from "tailwind-scrollbar";

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
        purple: {
          400: "#B186C8", // Slightly lighter than 500
          500: "#9E6FB1", // Base color
          600: "#8B619E", // Slightly darker than 500
          700: "#794E8A", // More pronounced dark shade
          800: "#663A76", // Darker shade
          900: "#542862", // Deepest shade
        },
        black: "#000000",
      },
    },
  },
  plugins: [tailwindScrollbar],
} satisfies Config;
