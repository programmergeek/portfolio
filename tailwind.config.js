module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "nunito-sans": ["'Nunito Sans'", "sans-serif"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
