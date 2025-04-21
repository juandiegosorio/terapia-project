import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#40e0d0",
          foreground: "#3c6aa9",
        },
        secondary: {
          DEFAULT: "#cc5eff",
          foreground: "#3c6aa9",
        },
        destructive: {
          DEFAULT: "#FF69B4",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f8f85d",
          foreground: "#3c6aa9",
        },
        accent: {
          DEFAULT: "#FF69B4",
          foreground: "#3c6aa9",
        },
        popover: {
          DEFAULT: "#98ff96",
          foreground: "#3c6aa9",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#3c6aa9",
        },
        therapy: {
          teal: "#40e0d0",
          purple: "#cc5eff",
          pink: "#FF69B4",
          yellow: "#f8f85d",
          green: "#98ff96",
          blue: "#3c6aa9",
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'subtle-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'subtle-float': 'subtle-float 3s ease-in-out infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
