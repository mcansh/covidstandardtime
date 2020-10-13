const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./**/{pages,components}/**/*.{js,jsx,ts,tsx}'],
  future: 'all',
  experimental: 'all',
  extend: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
  },
};
