var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './play/app.js',
    preview: './play/preview.js',
  },
  dist: 'dist-play',
  // autoprefixer: false,
  webpack: {
    output: {
      publicPath: '',
    },
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
        {
          test: /\.md$/,
          use: [
            'html-loader',
            'markdown-loader',
          ],
        },
      ],
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: './static', to: 'static' }
      ])
    ]
  },
  port: 5000,
  // compile Vue template
  templateCompiler: true,
  hmrEntry: ['preview'],
  // no code split for 3rd party libraries
  vendor: false,
  copy: false,
  html: [{
    chunks: ['app'],
    filename: 'index.html',
    title: 'REI Cedar Playground',
    template: './play/my-index.ejs', // to hard code inclusion of cedar fonts
  }, {
    chunks: ['preview'],
    filename: 'preview.html',
  }],
};
