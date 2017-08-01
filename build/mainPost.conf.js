var ExtractCssChunks = require("extract-css-chunks-webpack-plugin")


if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'release') {
  var isProduction = true;
} else {
  var isProduction = false;
}

var prodLoaders = ExtractCssChunks.extract({
  use: [
    {
      loader: 'css-loader',
      options: { importLoaders: 1 },
    },
    'postcss-loader',
  ],
});

var nonProdLoaders = [
  'style-loader',
  { loader: 'css-loader', options: { importLoaders: 1 } },
  'postcss-loader'
]

exports.loaders = isProduction ? prodLoaders : nonProdLoaders;
