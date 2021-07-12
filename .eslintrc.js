module.exports = {
  env: {
    browser: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  extends: ['plugin:react-hooks/recommended'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 0,
    'arrow-body-style': 0,
  },
};
