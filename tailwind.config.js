/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nice-green": "#445D48",
        "nice-nude": "#FDE5D4",
        "bg-colour": "#001524",
        "txt-colour": "#D6CC99",
        "react-logo1": "#FBFAE2",
        "react-logo2": "#4FA07B",
        "react-logo3": "#DC6638",
        "bg-opacity": "rgba(255,255,255,0.1)",
        "bg-opacity-hover": "rgba(255,255,255,0.3)",
      },
      gridTemplateColumns: {
        "auto-fit-custom": "repeat(auto-fit, minmax(250px, 1fr))", // Custom 12-column grid
      },
      fontFamily: {
        amatic: ["Amatic SC", "sans-serif"],
      },
      height: {
        128: "32rem",
        230: "230px",
        220: "220px",
      },
      width: {
        90: "90px",
        300: "300px",
      },
      borderRadius: {
        50: "50%",
      },
      rotate: {
        30: "30deg",
        neg30: "-30deg",
      },
      boxShadow: {
        card: "2px -2px 32px 2px #FDE5D4",
        skills: "1px -1px 1px 6px #fff",
      },
      inset: {
        custom: "-2.3em",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
