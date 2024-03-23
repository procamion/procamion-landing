import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#F89C2C',
        secondary: '#F6C443',
        yellow: '#F9D949',
        dark: '#252523',
        gray: { DEFAULT: '#757575', '100': '#B0B0B0' },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '1.5rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1072px',
          xl: '1328px',
        },
      },
    },
  },
  plugins: [],
};
export default config;
