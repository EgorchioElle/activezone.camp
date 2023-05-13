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
        'primary-200': '#5B4DFF',
        'gradient-100': 'rgba(0, 172, 193, 0.3)',
        'gradient-200': 'rgba(255, 77, 156, 0.2)'
      },
      backgroundColor: {
        'primary-100': '#FF4D9C',
        'primary-200': '#5B4DFF',
        'gradient-100': 'rgba(0, 172, 193, 0.3)',
        'gradient-200': 'rgba(255, 77, 156, 0.2)'
      },
      boxShadow: {
        'main-button': '8px 8px 0 #5B4DFF',
        'nav-shadow': '0 4px 0 rgba(0, 0, 0, 0.25)'
      },
      transitionDuration: {
        DEFAULT: '400ms'
      },
      maxWidth: {
        '10xl': '1920px'
      },
      maxHeight: {
        'lg': '1080px'
      },
      height: {
        '4screens': '400vh'
      },
      backgroundImage: {
        'hero': 'url(../images/hero-image.png);',
        'decorations': 'url(../images/svg/decorations.svg);'
      },
      width: {
        '10xl': '1920px',
        '6xl': '768px',
        '128': '512px'
      },
      keyframes: {
        slideFadeIn: {
          '0%': { transform: 'translateX(-200%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        wave: {
          '0%': { transform: 'translateY(0)', filter: 'hue-rotate(0)' },
          '50%': { transform: 'translateY(-10px)', filter: 'hue-rotate(-45deg)' },
          '100%': { transform: 'translateY(0)', filter: 'hue-rotate(0)' }
        },
        waveShadow: {
          '0%': { transform: 'translateY(0)', filter: 'hue-rotate(0)' },
          '50%': { transform: 'translateY(10px)', filter: 'hue-rotate(-45deg)' },
          '100%': { transform: 'translateY(0)', filter: 'hue-rotate(0)' }
        }
      },
      animation: {
        'slide-fade-in': 'slideFadeIn 2s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'wave': 'wave 5s ease-in-out infinite',
        'wave-shadow': 'waveShadow 5s ease-in-out infinite'
      }
    }
  },
  plugins: [],
}
