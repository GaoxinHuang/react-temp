module.exports = {
  style: {},
  webpack: {},
  eslint: {},
  jest: {
    configure: {
      coveragePathIgnorePatterns: [
        'src/setupTests.ts',
        'src/mocks/.*',
        'src/main/.*',
        '.styled.tsx',
        'src/reportWebVitals.ts',
        'src/index.tsx',
      ],
      // TODO: 还是无法解决 Jest: SyntaxError: Unexpected token 'export' on "@bundled-es-modules/js-levenshtein"
      // transform: {
      //   '^.+\\.ts?$': 'ts-jest',
      //   "^.+\\.(js|jsx)$": "babel-jest"
      // },
      // preset: "ts-jest/presets/js-with-babel",
      // transformIgnorePatterns: ['/node_modules/(?!(@bundled-es-modules)/)']
    },
  },
  babel: {},
  devServer: {},
};
