const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{assets,config,layout,locales,sections,snippets,src,templates}/**/*.{js,ts,jsx,tsx,vue,svelte,liquid,json}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['orbitron', 'sans-serif'],
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
          '70px',
          {
            lineHeight: '100%',
          },
        ],
        'heading-3': [
          '50px',
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
        'heading-1-mobile': [
          '46px',
          {
            lineHeight: '100%',
            letterSpacing: '-1.8px',
          },
        ],
        'heading-2-mobile': [
          '34px',
          {
            lineHeight: '100%',
            letterSpacing: '-1.36px',
          },
        ],
        'heading-3-mobile': [
          '28px',
          {
            lineHeight: '100%',
            letterSpacing: '-1.12px',
          },
        ],
        'heading-4-mobile': [
          '22px',
          {
            lineHeight: '100%',
            letterSpacing: '-0.8px',
          },
        ],
        'body-sm': [
          '20px',
          {
            lineHeight: '120%',
            letterSpacing: '-2%',
          },
        ],
        'body-xs': [
          '18',
          {
            lineHeight: '110%',
          },
        ],
        'body-mobile': [
          '18',
          {
            lineHeight: '110%',
          },
        ],
        menu: [
          '12px',
          {
            lineHeight: '4%',
          },
        ],
        button: [
          '12px',
          {
            lineHeight: '100%',
            letterSpacing: '8%',
          },
        ],
      },
      colors: {
        accent: 'hsla(var(--color-accent) / <alpha-value>)',
        primary: 'hsla(var(--color-primary) / <alpha-value>)',
        secondary: 'hsla(var(--color-secondary) / <alpha-value>)',
        theme: 'hsla(var(--color-theme) / <alpha-value>)',
        content: 'hsla(var(--color-text) / <alpha-value>)',
      },
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(0deg, rgba(25, 225, 252, 0.30) 3.07%, rgba(1, 1, 1, 0.00) 73.13%)',
        'gradient-heading':
          'radial-gradient(50% 50% at 50% 50%, rgba(72, 250, 249, 0.13) 0%, rgba(130, 207, 207, 0.00) 100%)',
        'gradient-strokes':
          'linear-gradient(90deg, #48faf900, #48FAF9, #48faf900)',
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
