import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transform: {
        '3d': 'rotateY(15deg) rotateX(15deg)', // Apply a 3D rotation on hover
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

    },
    boxShadow: {
      lg: '0px 4px 24px rgba(23, 92, 230, 0.15)',
    },
    primary: '#1A202C', // Primary color
    secondary: '#2D3748', // Secondary color
    'primary-light': '#CBD5E0', // Lighter primary color
  },
  plugins: [],
} satisfies Config;
