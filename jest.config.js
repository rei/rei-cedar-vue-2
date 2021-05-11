const config = {
  verbose: true,
  collectCoverage: false,
  // collectCoverageFrom: [
  //   'src/components/**/*.{js,vue}',
  //   'src/mixins/**/*.{js}',
  //   'src/utils/**/*.{js}',
  //   '!src/components/**/examples/**/*.{js,vue}', // not component examples
  //   '!src/components/icon/{comps,build}/**/*.{js,vue}', // not icon components
  //   '!**/*.backstop.js', // not backstop files
  //   '!**/node_modules/**', // not node_modules
  // ],
  // coverageDirectory: 'coverage',
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
    'ts'
  ],
  moduleNameMapper: {
    'componentdir(.*)$': '<rootDir>/src/components/$1',
  },
  modulePathIgnorePatterns: [
    'rollup.config.test.js',
    '<rootDir>/test/e2e/',
    '<rootDir>/templates/__tests__',
  ],
  transform: {
  '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
    ".*\\.(vue|ts)$": "vue-jest",
    '^.+\\.(js|vue)?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(lodash-es|@rei\/cdr-tokens)/.*)', // https://stackoverflow.com/questions/42260218/jest-setup-syntaxerror-unexpected-token-export
  ],
  "globals": {
    "vue-jest": {
      "babelConfig": {
          "configFile": "./babel.config.js"
        },
    }
  }
};

module.exports = config;
