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
    '<rootDir>/unmigrated/',
    '<rootDir>/templates/__tests__',
    '<rootDir>/src/components/accordion',
    '<rootDir>/src/components/checkbox',
    '<rootDir>/src/components/Form',
    '<rootDir>/src/components/formError',
    '<rootDir>/src/components/formGroup',
    '<rootDir>/src/components/grid',
    '<rootDir>/src/components/input',
    '<rootDir>/src/components/labelStandalone',
    '<rootDir>/src/components/labelWrapper',
    '<rootDir>/src/components/modal',
    '<rootDir>/src/components/pagination',
    '<rootDir>/src/components/popover',
    '<rootDir>/src/components/popup',
    '<rootDir>/src/components/radio',
    '<rootDir>/src/components/select',
    '<rootDir>/src/components/tabs',
    '<rootDir>/src/components/tooltip',
    '<rootDir>/src/components/Utilities',

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
        "tsConfig": "./tsconfig.json"
    }
  }
};

module.exports = config;
