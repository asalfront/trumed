module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    jest: true,
    browser: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    'prefer-promise-reject-errors': 'off',
    'react/prop-types': 'off',
    "no-unused-vars": ["error", { "args": "after-used", "ignoreRestSiblings": true, "argsIgnorePattern": "^_", "varsIgnorePattern": "^_"} ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": ["variable", "function"],
        "format": ["camelCase", "UPPER_CASE", "PascalCase"],
        "leadingUnderscore": "allow"
      }
    ],
    "no-underscore-dangle": "off",
    "color-no-hex": "off"
  },
};