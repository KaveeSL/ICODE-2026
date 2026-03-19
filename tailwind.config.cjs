/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"]
      },
      colors: {
        uom: {
          maroon: "#7A0019",
          maroonDark: "#520013",
          gold: "#F6A800",
          goldSoft: "#FBE4A6"
        },
        background: "hsl(40 30% 98%)",
        foreground: "hsl(24 10% 10%)",
        muted: "hsl(35 30% 94%)",
        border: "hsl(30 15% 85%)"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,0.15)"
      }
    }
  },
  plugins: []
};
