const glob = require('glob');

const ignore = [
  './src/components/**/node_modules/**',
  './src/components/**/examples/**',
  './src/components/Utilities/**',
];

const components = glob.sync('./src/components/**/*.vue', { ignore: ignore });

export default components;
