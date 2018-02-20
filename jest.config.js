module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  moduleNameMapper: {
    // Mocking assets imported in components:
    // http://facebook.github.io/jest/docs/en/webpack.html#handling-static-assets
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },
  snapshotSerializers: [
    '<rootDir>/node_modules/jest-serializer-vue',
  ],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/test/unit/coverage',
  mapCoverage: true,
  coverageThreshold: {
    global: {
      lines: 100,
    },
  },
  testPathIgnorePatterns: [
    '<rootDir>/src/components/buttonGroup',
    '<rootDir>/test',
    '<rootDir>/templates',
  ],
};
