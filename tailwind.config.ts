import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gridMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(400px)' }
        },
        trail: {
          '0%': { 
            transform: 'translateX(-100%) rotate(var(--rotation))',
            opacity: '0'
          },
          '10%': { opacity: '0.3' },
          '90%': { opacity: '0.3' },
          '100%': { 
            transform: 'translateX(100%) rotate(var(--rotation))',
            opacity: '0'
          }
        },
        glow: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.3' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        borderGlow: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' }
        }
      },
      animation: {
        'gridMove': 'gridMove 40s linear infinite',
        'trail': 'trail 6s linear infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'borderGlow': 'borderGlow 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};

export default config; 