module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'comma-dangle': 'off',
    'linebreak-style': 'off',
    'require-jsdoc': 'off',
    'no-unused-vars': 'off',
    'no-prototype-builtins': 'off'
  }
};
