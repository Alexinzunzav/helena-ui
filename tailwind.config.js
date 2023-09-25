/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'ibm-plex': ['IBM Plex Sans', 'sans'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        h_primary: '#333333',
        h_primary_hover: '#0E0E0F',
        h_primary_disabled: '#F3F3F3',
        h_secondary: '#ADD8FD',
        h_secondary_hover: '#7CC3FF',
        h_secondary_disabled: '#E4F3FF',
        h_terciary_hover: '#EBEBEB',
        h_text_light: '#F7F5F2',
        h_text_light_disabled: '#A6A6A6',
        h_text_dark: '#1F1F21'
      }
    },
  },
  plugins: [],
}
