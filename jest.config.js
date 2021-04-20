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
    '<rootDir>/src/components/alert',

    '<rootDir>/src/components/breadcrumb',

    '<rootDir>/src/components/button',

    '<rootDir>/src/components/caption',

    '<rootDir>/src/components/card',

    '<rootDir>/src/components/checkbox',

    '<rootDir>/src/components/chip',

    '<rootDir>/src/components/flex-grid',

    '<rootDir>/src/components/formError',

    '<rootDir>/src/components/formGroup',

    '<rootDir>/src/components/grid',

    // '<rootDir>/src/components/icon',

    '<rootDir>/src/components/image',

    '<rootDir>/src/components/input',

    '<rootDir>/src/components/labelStandalone',

    '<rootDir>/src/components/labelWrapper',


    '<rootDir>/src/components/link',

    '<rootDir>/src/components/list',

    '<rootDir>/src/components/modal',
    '<rootDir>/src/components/pagination',
    '<rootDir>/src/components/popover',
    '<rootDir>/src/components/popup',


    '<rootDir>/src/components/quote',

    '<rootDir>/src/components/radio',

    '<rootDir>/src/components/rating',

    '<rootDir>/src/components/select',

    '<rootDir>/src/components/table',

    '<rootDir>/src/components/tabs',
    '<rootDir>/src/components/text',
    '<rootDir>/src/components/tooltip',



    

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
        // "tsConfig": "./tsconfig.json"
    }
  }
};

module.exports = config;
