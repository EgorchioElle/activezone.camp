/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': '#FF4D9C',
        'primary-200': '#5B4DFF'
      },
      backgroundColor: {
        'primary-100': '#FF4D9C',
        'primary-200': '#5B4DFF'
      },
      boxShadow: {
        'main-button': '8px 8px 0 #5B4DFF',
        'nav-shadow': '0 4px 0 rgba(0, 0, 0, 0.25)'
      },
      transitionDuration: {
        DEFAULT: '400ms'
      }
    }
  },
  plugins: [],
}
