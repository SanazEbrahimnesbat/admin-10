module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        admin10: {
          "primary": "#283144",
          "secondary": "#e879f9",
          "accent": "#00CFDD",
          "neutral": "#A1B0CB",
          "base-100": "#1C222F",
          "info": "#5A8DEE",
          "success": "#35BE7C",
          "warning": "#DF9C45",
          "error": "#FF5B5C",
        },
      },
    ],
  },
}