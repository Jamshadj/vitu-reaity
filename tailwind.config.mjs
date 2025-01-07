/** @type {import('tailwindcss').Config} */
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
        customBrown: '#4F3737',
        textCustomGray: '#040707'
      },
      fontFamily: {
        freightNeo: ['"Freight Neo Pro"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
