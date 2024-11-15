module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensures Tailwind processes all JSX files
  ],
  theme: {
    extend: {
      blur: {
        'custom': '1px', // You can define any custom blur value here
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
