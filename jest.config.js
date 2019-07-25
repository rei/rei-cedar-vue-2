const config = {
  verbose: true,
  moduleFileExtensions: [
    'js',
    'json',
  ],
  moduleNameMapper: {
    'distdir(.*)$': '<rootDir>/dist/$1',
  },
  modulePathIgnorePatterns: [
    'rollup.config.test.js',
    '<rootDir>/test/e2e/',
    '<rootDir>/templates/__tests__',
    '<rootDir>/src/components/themer',
  ],
  transform: {
    '^.+\\.(js|jsx)?$': '<rootDir>/jestPreprocess.js',
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
  },
};

module.exports = config;
