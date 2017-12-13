if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'release') {
  var isProduction = true;
} else {
  var isProduction = false;
}

// Used to extract main.postcss to it's own file
var prodLoaders =  [
    {
      loader: 'css-loader',
      options: { importLoaders: 1 },
    },
    'postcss-loader',
  ];

// Load/inject as normal
var nonProdLoaders = [
  'style-loader',
  { loader: 'css-loader', options: { importLoaders: 1 } },
  'postcss-loader'
]

exports.loaders = isProduction ? prodLoaders : nonProdLoaders;
