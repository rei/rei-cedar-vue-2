// babelrc cooy
// {
//   "presets": [
//     [
//       "env",
//       {
//         "modules": false
//       }
//     ],
//     "stage-2"
//   ],
//   "plugins": [
//     "transform-runtime"
//   ],
//   "comments": false,
//   "env": {
//     "test": {
//       "presets": [
//         "env",
//         "stage-2"
//       ],
//       "plugins": [
//         "istanbul"
//       ]
//     }
//   }
// }

/* eslint-disable */

module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        corejs: "3",
        useBuiltIns: "usage"
      }
    ]
  ];
  const plugins = ['@babel/plugin-transform-runtime'];

  return {
    presets,
    plugins
  };
}