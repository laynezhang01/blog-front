export default {
  darkMode: ['selector', "[class~='dark']", 'class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: 'rgba(var(--background), <alpha-value>)',
        header: {
          bg: 'rgba(var(--header-background), <alpha-value>)',
        },
        card: {
          bg: 'rgba(var(--card-background), <alpha-value>)',
          shadow: 'rgba(var(--card-shadow))',
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        font: {
          primary: 'rgba(var(--primary), <alpha-value>)',
          secondary: 'rgba(var(--secondary), <alpha-value>)',
          tertiary: 'rgba(var(--tertiary), <alpha-value>)',
        },
        tag: {
          text: 'rgba(var(--primary), <alpha-value>)',
          date: 'rgba(var(--secondary), <alpha-value>)',
          author: 'rgba(var(--tertiary), <alpha-value>)',
        },
        button: {
          primary: 'rgba(var(--button-primary), <alpha-value>)',
          secondary: 'rgba(var(--button-secondary), <alpha-value>)',
          link: 'rgba(var(--link), <alpha-value>)',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        nav: {
          DEFAULT: 'rgba(var(--nav), <alpha-value>)',
          shadow: 'rgba(var(--nav-shadow), <alpha-value>)',
          ring: 'rgba(var(--nav-ring), <alpha-value>)',
        },
        banner: {
          bg: 'var(--banner-bg)',
          wave1: 'var(--banner-wave-1)',
          wave2: 'var(--banner-wave-2)',
          wave3: 'var(--banner-wave-3)',
          wave4: 'var(--banner-wave-4)',
        },
        line1: {
          DEFAULT: 'var(--line1)',
        },
        orange: {
          DEFAULT: 'var(--orange)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        cursor: 'cursor 1s ease-in-out infinite',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        cursor: {
          '0%': {
            opacity: 0,
          },
          '50%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
        bounce: {
          '0%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0, 0, .2, 1)',
          },
        },
        spin: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(0.5turn)',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
