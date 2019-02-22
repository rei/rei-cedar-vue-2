// Configs for normal env
const normalPresets = [
  [
    '@vue/app',
    {
      useBuiltIns: false,
    },
  ],
];

const normalPlugins = [
  '@babel/transform-runtime',
];

// Config for test env
const testPresets = [
  [
    '@vue/app',
    {
      useBuiltIns: false,
      targets: {
        node: 'current',
      },
    },
  ],
];

const testPlugins = [
  'istanbul',
];


module.exports = (api) => {
  let presets = normalPresets;
  let plugins = normalPlugins;

  if (api.env('test')) {
    presets = testPresets;
    plugins = testPlugins;
  }

  return {
    presets,
    plugins,
  };
};
