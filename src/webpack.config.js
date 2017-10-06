const merge = require('webpack-merge'); //eslint-disable-line

function buildConfiguration(env) {
  const buildConfigLoc = `${env.buildConfig}.js`;
  const compConfigLoc = `${env.componentConfig}.js`;

  const buildConfig = require(buildConfigLoc); //eslint-disable-line
  const compConfig = require(compConfigLoc); //eslint-disable-line

  return merge(buildConfig, compConfig);
}

module.exports = buildConfiguration;
