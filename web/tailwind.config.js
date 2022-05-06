module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      borderRadius: {
        md: "4px",
      },
      colors: {
        brand: {
          500: "#8257e6",
          300: "#996DFF",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
