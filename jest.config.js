// WHAT THE HECKY HAPPENED HERE
// https://jestjs.io/docs/en/configuration.html
const config = {
  verbose: true,
  moduleFileExtensions: [
    'js',
    'json'
  ],
  moduleNameMapper: {
    'distdir(.*)$': '<rootDir>/dist/$1',
  },
  modulePathIgnorePatterns: [
    'rollup.config.test.js',
    '<rootDir>/test/e2e/',
    '<rootDir>/templates/__tests__',
    '<rootDir>/src/components/themer',
    '<rootDir>/src/components/rating',
    '<rootDir>/src/components/select',
    '<rootDir>/src/components/pagination',
    '<rootDir>/src/components/dataTable',
    '<rootDir>/src/components/tabs',
  ],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
  },
};

module.exports = config;
