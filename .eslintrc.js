module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/first': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
  },
};
