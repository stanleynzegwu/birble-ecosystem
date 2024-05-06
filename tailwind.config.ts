import type { Config } from "tailwindcss";
// import { addVariablesForColors, matchUtilities } from "./lib/utils";

const config = {
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
      fontSize: {
        "2xl": ["1.75rem", "1.2"],
        "3xl": ["2rem", "1.25"],
        "4xl": ["2.5rem", "1"],
        "6xl": ["3.75rem", "1.2"],
        "7xl": ["4.5rem", "1.25"],
      },

      backgroundImage: {
        "gradient-one":
          "linear-gradient(to right, hsl(var(--primary-violet)), hsl(var(--primary-purple)))",
        "gradient-two":
          "linear-gradient(135deg, hsl(var(--primary-violet)) 0%, hsl(var(--primary-purple)) 50%, #6FC1CB 70%)",
      },
      screens: {
        "2lg": "1300px",
        "1210px": "1210px",
        xs: "400px",
        "2xs": "500px",
      },
      colors: {
        border: {
          DEFAULT: "hsl(var(--border))", //
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        color: {
          beb: "#BEB8E6",
          b10: "#100832",
        },
        background: {
          DEFAULT: "hsl(var(--background))", // default
          one: "hsl(var(--background-1))",
          two: "hsl(var(--background-2))",
          three: "hsl(var(--background-3))",
          four: "hsl(var(--background-4))",
          five: "hsl(var(--background-5))",
          six: "hsl(var(--background-6))",
          seven: "hsl(var(--background-7))",
          eight: "hsl(var(--background-8))",
          blackopacified: "hsl(var(--black-opacified))",
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          violet: "hsl(var(--primary-violet))",
          purple: "hsl(var(--primary-purple))",
          foreground: "hsl(var(--primary-foreground))",
          grey: "hsl(var(--foreground-6))",
          slate: "hsl(var(--foreground-7))",
          emerald: "hsl(var(--primary-emerald))", // reptide in
          indigo: "hsl(var(--primary-indigo))",
          green: "hsl(var(--primary-green))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          grey: "hsl(var(--secondary-grey))",
          violet: "hsl(var(--secondary-violet))",
          trueGray: "hsl(var(--secondary-trueGrey))",
        },
        alert: {
          destructive: "hsl(var(--alert-destructive))",
          warning: "hsl(var(--alert-warning))",
          success: "hsl(var(--alert-success))",
          info: "hsl(var(--alert-info))",
          foreground: "hsl(var(--alert-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--neutral-stone))",
          foreground: "hsl(var(--foreground-7))",
        },
        popover: {
          DEFAULT: "hsl(var(--background-5))",
          foreground: "hsl(var(--foreground-4))",
        },
        carousel: {
          DEFAULT: "hsl(var(--carousel))",
        },
        card: {
          DEFAULT: "hsl(var(--background-3))",
          foreground: "hsl(var(--foreground-1))",
          coolGray: "#3A3A4D",
          steelGrey: "#222236",
        },
        modal: {
          DEFAULT: "hsl(var(--modal-primary))", // default
        },
        blur: {
          purple: "hsl(var(--blur-1))",
          purpleTwo: "hsl(var(--secondary-purple))",
          pink: "hsl(var(--blur-2))",
          blue: "hsl(var(--blur-3))",
        },
        blueGray: {
          "bg-1": "hsl(var(--blueGray-bg-1))",
          "bg-2": "hsl(var(--blueGray-bg-2))",
        },
        violet: {
          50: "#fdf2ff",
          100: "#fbe5ff",
          200: "#f6c9ff",
          300: "#f39fff",
          400: "#ee67ff",
          500: "#df2eff",
          600: "#c70dec",
          700: "#ad07c9",
          800: "#8c08a0",
          900: "#750d82",
          950: "#4f0059",
        },
        purple: {
          50: "#f4f3ff",
          100: "#ebeafd",
          200: "#dad7fd",
          300: "#bfb8fa",
          400: "#9e8ff6",
          500: "#7e62f0",
          600: "#6335e5",
          700: "#5c2ed3",
          800: "#4d26b1",
          900: "#412191",
          950: "#271362",
        },
        darkGrayishBlue:"#161636",
        mintGreen:"#81dfcf",
      },
      borderRadius: {
        lg: "var( --large-radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        button: "var(--small-radius)",
      },
      borderWidth: {
        // Define custom border widths
        "0.8": "0.8px",
        "0.6": "0.6px",
      },
      blur: {
        "4xl": "70px",
        "5xl": "85px",
        "6xl": "90px",
        "7xl": "100px",
        "8xl": "150px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    // require("tailwind-scrollbar"),
    // addVariablesForColors,
    // matchUtilities,
  ],
} satisfies Config;

export default config;