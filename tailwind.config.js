/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        c_Lato: ["Lato", "sans-serif"],
      },
      colors: {
        main: "#252525",
      },
      backgroundImage: {
        btn: "linear-gradient(180deg, #FFB469 0%, #E57709 100%)",
        "linear-green": "linear-gradient(135deg, #3EED8B 0%, #0A9949 100%)",
        "dd/400": "linear-gradient(90deg, #50C577 0%, #2DBEFC 100%)",
      },
      boxShadow: {
        btn: "0px 8px 16px 0px rgba(229, 119, 9, 0.35)",
        "key-green-gradient": "0px 8px 16px 0px rgba(80, 197, 119, 0.35)",
      },
    },
  },
  plugins: [],
}
