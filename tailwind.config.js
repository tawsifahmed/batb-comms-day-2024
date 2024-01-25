module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#96C61C',
        secondary: '#014FA1',
        dark: '#061e4c',
        pink: '#EA227A',
      },
      container: {
        center: true,
        padding: {
          default: '1rem',
        },
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: 'repeat(16, minmax(0, 1fr))',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
