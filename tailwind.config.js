const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{assets,config,layout,locales,sections,snippets,src,templates}/**/*.{js,ts,jsx,tsx,vue,svelte,liquid,json}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['bebas', 'sans-serif'],
        body: 'var(--font-body-family)',
      },
      fontSize: {
        'heading-1': [
          '100px',
          {
            lineHeight: '100%',
          },
        ],
        'heading-2': [
          '80px',
          {
            lineHeight: '100%',
          },
        ],
        'heading-3': [
          '60px',
          {
            lineHeight: '100%',
          },
        ],
        'heading-4': [
          '40px',
          {
            lineHeight: '100%',
          },
        ],
        'heading-5': [
          '30px',
          {
            lineHeight: '100%',
            letterSpacing: '1.8px',
          },
        ],
        'body-sm': [
          '18px',
          {
            lineHeight: '120%',
          },
        ],
        body: [
          '20px',
          {
            lineHeight: '120%',
          },
        ],
        'menu-sm': [
          '14px',
          {
            lineHeight: '100%',
            fontWeight: '500',
          },
        ],
        menu: [
          '12px',
          {
            lineHeight: '18px',
          },
        ],
        button: [
          '12px',
          {
            lineHeight: '100%',
            letterSpacing: '0.96px',
          },
        ],
      },
      colors: {
        accent: 'hsla(var(--color-accent) / <alpha-value>)',
        primary: 'hsla(var(--color-primary) / <alpha-value>)',
        secondary: 'hsla(var(--color-secondary) / <alpha-value>)',
        grey: '#F2F2F2',
      },
      gridTemplateColumns: {
        20: 'repeat(20, minmax(0, 1fr))',
      },
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(0deg, rgba(25, 225, 252, 0.30) 3.07%, rgba(1, 1, 1, 0.00) 73.13%)',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('is-active', '&.is-active')
      addVariant('group-is-active', ':merge(.group).is-active &')
    }),
  ],
}
