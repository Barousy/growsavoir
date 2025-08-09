
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" }
    },
  },
  plugins: [],
} satisfies Config;
