module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: ['eslint:recommended', 'airbnb-base', 'plugin:prettier/recommended', 'plugin:mocha/recommended'],
  plugins: ['prettier', 'mocha', 'chai-expect'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'prettier/prettier': 'off',
    'func-names': 'off',
  },
};
