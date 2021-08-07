module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/prefer-default-export': 'off',
    semi: ['error', 'never'],
    'linebreak-style': 'off',
    'vue/no-boolean-default': 'error',
    'vue/match-component-file-name': ['error', {
      extensions: ['vue'],
    }],
    'vue/attributes-order': 'off',
    'vue/require-prop-types': 'warn',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
  },
};
