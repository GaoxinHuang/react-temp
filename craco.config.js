module.exports = {
  style: {},
  webpack: {},
  eslint: {
    configure: {
      parser: "@typescript-eslint/parser", // Specifies the ESLint parser
      parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
          jsx: true // Allows for the parsing of JSX
        }
      },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
      ],
      setting: {
        react: {
          version: 'detect',
        },
      },
      rules:{
        '@typescript-eslint/no-unused-vars': 'off'
      }
    },
  },
  jest: {},
  babel: {},
  devServer: {},
};
