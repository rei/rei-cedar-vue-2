require('@babel/register');

// http://nightwatchjs.org/getingstarted#settings-file
module.exports = {
  src_folders: ['test/e2e/specs'],
  output_folder: 'test/e2e/reports',
  custom_assertions_path: ['test/e2e/custom-assertions'],
  custom_commands_path: [
    // 'test/e2e/custom-commands',
    './node_modules/nightwatch-axe/src/commands',
  ],

  webdriver: {
    start_process: true,
    host: '127.0.0.1',
    port: 9515, // set to 9515 because the chromedriver log shows it starting on that port
    server_path: require('chromedriver').path, //required because start_process: true
  },

  test_settings: {
    default: {
      silent: true,
      globals: {
        devServerURL: `http://localhost:${process.env.PORT}/#/kitchen-sink`,
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },
  },
};
