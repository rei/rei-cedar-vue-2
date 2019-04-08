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

module.exports = function (api) {
  api.cache(true);

  const presets = [ ... ];
  const plugins = [ ... ];

  return {
    presets,
    plugins
  };
}