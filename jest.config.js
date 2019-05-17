const config = {
  verbose: true,
  moduleFileExtensions: [
    'js',
    'json',
  ],
  moduleNameMapper: {
    'srcdir(.*)$': '<rootDir>/src/$1',
    'cssdir(.*)$': '<rootDir>/src/css/$1',
    'assetsdir(.*)$': '<rootDir>/src/assets/$1',
    'componentsdir(.*)$': '<rootDir>/src/components/$1',
    'directivesdir(.*)$': '<rootDir>/src/directives/$1',
    'mixinsdir(.*)$': '<rootDir>/src/mixins/$1',
    'distdir(.*)$': '<rootDir>/dist/$1',
  },
  modulePathIgnorePatterns: [
    'rollup.config.test.js',
    '<rootDir>/test/e2e/',
    '<rootDir>/templates/__tests__',
    '<rootDir>/src/components/themer',
    '<rootDir>/src/components/tabs',
  ],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
  },
};

module.exports = config;
