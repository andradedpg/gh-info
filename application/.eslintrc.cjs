/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended', 
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  env: {},
  rules: {
    "@typescript-eslint/no-var-requires": "error",
    "max-len": ["error", { "code": 80 }],
    "indent": ["error", 2]
  },
  "parserOptions": {
    "ecmaFeatures": {},
    "ecmaVersion": "latest",
    "sourceType": "script"
  },
};