/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
   "./index.html",
   "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
       backgroundImage: {
        'btn-orange-gradient': 
          `linear-gradient(0deg, rgba(255, 106, 0, 0.1), rgba(255, 106, 0, 0.1)), radial-gradient(50% 50% at 50% 50%, #FF6A00 0%, #FF6A00 100%)`,
        'orange-gradient-text': 'linear-gradient(97.4deg, #FFA361 2.87%, #FF6A00 105.85%)',
        'purple-gradient-text': 'linear-gradient(97.4deg, #7B00F9 2.87%, #BC7AFF 105.85%)',
        'blue-gradient-text': 'linear-gradient(97.4deg, #007BFF 2.87%, #8CC4FF 105.85%)',
      },
      dropShadow: {
        'freepik': '0px 8px 6px #FBB03380',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 6px rgba(255,194,51,0.4)',
          },
          '50%': {
            boxShadow: '0 0 12px rgba(255,194,51,0.8)',
          },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

