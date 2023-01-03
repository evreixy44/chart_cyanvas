/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx", "./lib/**/*.ts"],
  theme: {
    fontFamily: {
      sans: ["'M PLUS 1p'", "sans-serif"],
      bold: ["'M PLUS 1p'", "sans-serif"],
      extraBold: ["'M PLUS 1p'", "sans-serif"],
      monospace: [
        "Consolas",
        "Menlo",
        "Monaco",
        "source-code-pro",
        "monospace",
      ],
    },
    fontWeight: {
      sans: 300,
      semibold: 400,
      bold: 500,
      extrabold: 700,
    },
    extend: {
      colors: {
        theme: "#83ccd2",
      },
    },
  },
  plugins: [],
}
