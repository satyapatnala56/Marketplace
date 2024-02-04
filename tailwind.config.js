/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'tags': "var(--tags)",
      'border-dark': '#273444',
      'border': 'var(--border)',
      'header': 'var(--header)',
      'divider': "var(--divider)",
      'primary': "var(--primary)",
      'text-color': "var(--text-color)",
      'secondary': "var(--secondary)",
      'white': "#fff"
    },
    extend: {
    }
  },
}