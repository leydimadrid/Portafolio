module.exports = {
  content: ["./src/**/*.{html,ts,js, jsx, tsx}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
