const baseConfig = require('./build/webpack.base.conf.js');
const merge = require('webpack-merge');

module.exports = {
  components: './src/components/**/*.vue',
  require: [
    './src/css/main.postcss',
  ],
  assetsDir: './static',
  mixins: [
    './src/mixins/modifier.js',
    './src/mixins/theme.js',
  ],
  highlightTheme: 'monokai',
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
};
