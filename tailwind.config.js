/** @type {import('tailwindcss').Config} */
export default {
  // files where tailwind class names are going to be used
  content: ['./index.html', './src/**/*.{html,css,js,ts,jsx,tsx}'],


  theme: {
    extend: {
      // custom colors for the theme
      colors: {
        // shades of gray for the website to be darkish
        primary: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#111111',
        },
        
        // green shades for success messages
        success: {
          500: '#10b981',
          600: '#059669',
        },

        // orange shades for warnings
        warning: {
          500: '#f59e0b',
          600: '#d97706',
        },

        // red sahdes for errors
        error: {
          500: '#ef4444',
          600: '#dc2626',
        },
      },

      // custom fonts
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },

      // set transition duration
      transitionDuration: {
        500: '500ms',
      },

      // custom spacing value
      spacing: {
        '128': '32rem',
      },

      // Customs animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-in-out',
      },

      // custom keyframes for animations
      keyFrames: {
        fadeIn: {
          '0%': { opacity: 0},
          '100%': { opacity: 1},
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0},
          '100%': { transform: 'translateY(0)', opacity: 1},
        },
      },
      // dark overlay for background images
      backgroundImage: {
        'hero-pattern': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))',
      },
    },
  },
  plugins: [],
};
