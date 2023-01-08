module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  ignorePatterns: ['node_modules/*', 'dist/*', '!.prettierrc.js', '.nuxt'],
  extends: ['plugin:nuxt/recommended', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        trailingComma: 'none',
        singleQuote: true,
        tabWidth: 2,
        endOfLine: 'auto'
      }
    ]
  }
}
