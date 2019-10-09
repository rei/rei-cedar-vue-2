const config = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx}',
    'src/directives/**/*.{js,jsx}',
    'src/mixins/**/*.{js,jsx}',
    'src/utils/**/*.{js,jsx}',
    '!src/components/**/examples/**/*.{js,jsx}', // not component examples
    '!src/components/icon/{comps,build}/**/*.{js,jsx}', // not icon components
    '!**/*.backstop.js', // not backstop files
    '!**/node_modules/**', // not node_modules
  ],
  coverageDirectory: 'coverage',
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
  ],
  moduleNameMapper: {
    'distdir(.*)$': '<rootDir>/dist/$1',
    'componentdir(.*)$': '<rootDir>/src/components/$1',
  },
  modulePathIgnorePatterns: [
    'rollup.config.test.js',
    '<rootDir>/test/e2e/',
    '<rootDir>/templates/__tests__',
  ],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!lodash-es/.*)', // https://stackoverflow.com/questions/42260218/jest-setup-syntaxerror-unexpected-token-export
  ],
};

module.exports = config;
