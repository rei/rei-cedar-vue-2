const config = {
  verbose: true,
  moduleFileExtensions: [
    'js',
    'vue',
    'json',
  ],
  moduleNameMapper: {
    'srcdir(.*)$': '<rootDir>/src/$1',
    'cssdir(.*)$': '<rootDir>/src/css/$1',
    'assetsdir(.*)$': '<rootDir>/src/assets/$1',
    'componentsdir(.*)$': '<rootDir>/src/components/$1',
    'directivesdir(.*)$': '<rootDir>/src/directives/$1',
    'mixinsdir(.*)$': '<rootDir>/src/mixins/$1',
  },
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
  },
};

module.exports = config;
