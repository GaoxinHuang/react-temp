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
    },
  },
  babel: {},
  devServer: {},
};
