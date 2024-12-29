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
      backgroundImage: {
        "gradient-bg":
          "linear-gradient(339deg,rgba(0, 0, 0, 0) 11.27%,rgba(171, 44, 169, 0.2) 82.75% ),radial-gradient(41.38% 20.56% at 92.19% 62.7%, #280e3b 0%, #000 57%)",
        "card-gradient-bg":
          "linear-gradient(0,rgba(41, 10, 45, 1) 100%,rgba(0, 0, 0, 1) 100% )",
        "text-gradient":
          "linear-gradient(93deg, rgba(255, 255, 255, 0.82) 5.48%, rgba(59, 20, 87, 0.82) 97.88%)",
        "text-gradient-sub":
          "linear-gradient(90deg, rgba(200, 153, 219, 0.69) 0.48%, rgba(69, 46, 100, 0.71) 100%)",
      },
      colors: {
        _purple: {
          400: "#B186C8", // Slightly lighter than 500
          500: "#9E6FB1", // Base color
          600: "#8B619E", // Slightly darker than 500
          700: "#794E8A", // More pronounced dark shade
          800: "#663A76", // Darker shade
          900: "#280A2C", // Deepest shade
        },
        black: "#000000",
      },
    },
  },
  plugins: [tailwindScrollbar],
} satisfies Config;
