#!/usr/bin/env node

const glob = require('glob-promise');
const fs = require('fs-extra');
const path = require('path');
const _ = require('lodash');
const semver = require('semver');
const chalk = require('chalk');

function getPackages() {
  return glob('src/**/package.json', { ignore: ['src/**/node_modules/**'] }, (err, files) => files);
}

function getCompInfo(packages) {
  const infoArr = [];
  packages.forEach((packPath) => {
    const packObj = JSON.parse(fs.readFileSync(packPath, 'utf8'));
    const infoObj = _.pick(packObj, ['name', 'version']);
    infoObj.location = path.resolve(packPath);
    infoArr.push(infoObj);
  });
  return infoArr;
}

// checks if the version is a "pre"
function isPre(p1, p2) {
  // remove the ^
  const stripped = semver.coerce(p2).raw;
  const diff = semver.diff(p1, stripped);
  return ['premajor', 'preminor', 'prepatch', 'prerelease'].indexOf(diff);
}

async function main() {
  const packages = await getPackages();
  const comps = getCompInfo(packages);
  let anyErr = false;

  // go through all local components
  comps.forEach((comp) => {
    const packagejson = require(comp.location); //eslint-disable-line
    const { name, peerDependencies } = packagejson;
    if (peerDependencies) {
      let hasErr = false;
      const errMsg = [];
      // get peerDep names
      const peers = Object.keys(peerDependencies);
      // find which peerDeps are also local components
      const locs = _.intersectionWith(comps, peers, (compVal, peerVal) => compVal.name === peerVal);
      // check if peerDep version resolves to local component version
      locs.forEach((loc) => {
        if (!semver.satisfies(loc.version, peerDependencies[loc.name])
          && isPre(loc.version, peerDependencies[loc.name])) {
          anyErr = true;
          hasErr = true;
          errMsg.push(`${loc.name}: "${peerDependencies[loc.name]}" doesn't resolve to the local package version of "${loc.version}"`);
        }
      });

      if (hasErr) {
        console.log(`${chalk.red(`${name} has peer/dev dependencies that don't resolve to locally built packages:`)}`);
        console.log(errMsg.join('\r\n'));
        console.log('-----------');
      }
    }
  });

  if (anyErr) {
    process.exitCode = 1;
  }
}

main();
