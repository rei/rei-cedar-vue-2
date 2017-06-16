const baseConfig = require('./build/webpack.base.conf.js');
const merge = require('webpack-merge');
const path = require('path');

module.exports = {
  components: './src/components/**/*.vue',
  require: [
    './src/css/main.postcss',
  ],
  assetsDir: './static',
  webpackConfig: merge(baseConfig, {
    module: {
      rules: [
        {
          test: /\.postcss$/,
          use: [
            'style-loader',
            'css-loader?importLoaders=1',
            'postcss-loader',
          ],
        },
      ],
    },
  }),
  propsParser(filePath, source) { // eslint-disable-line
    const props = require('vue-docgen-api').parse(filePath); // eslint-disable-line
    // Set component displayName as component folder name
    props.displayName = path.basename(filePath, path.extname(filePath));
    return props;
  },
};
