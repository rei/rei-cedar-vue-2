#!/usr/bin/env node

const _ = require('lodash');
const semver = require('semver');
const chalk = require('chalk');

let data = '';

// checks if the version is a "pre"
function isPre(p1, p2) {
  // remove the ^
  const stripped = semver.coerce(p2).raw;
  const diff = semver.diff(p1, stripped);
  return ['premajor', 'preminor', 'prepatch', 'prerelease'].indexOf(diff);
}

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk) => {
  data += chunk;
});

process.stdin.on('end', () => {
  console.log(data);
  const comps = JSON.parse(data);
  let anyErr = false;

  // go through all local components
  comps.forEach((comp) => {
    const packagejson = require(`${comp.location}/package.json`); //eslint-disable-line
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
          errMsg.push(`${loc.name}: ${peerDependencies[loc.name]} doesn't resolve to the local package version of ${loc.version}`);
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
});
