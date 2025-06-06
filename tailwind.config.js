// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"], // Use Poppins or similar
    },
    extend: {
      colors: {
        primary: "#2563eb", // A modern blue
        bgLight: "#f5f8fd", // Soft light background
        textDark: "#16171a",
      },
      boxShadow: {
        soft: "0 4px 24px 0 rgba(30,41,59,0.07)",
      },
    },
  },
  plugins: [],
};

