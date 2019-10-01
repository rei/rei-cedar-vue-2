const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');
const cedarPackageJson = require('../package.json');
const variablesPackageJson = require('../../rei-cedar-component-variables/package.json');

const DEST_REPO_NAME = 'rei-cedar-component-variables';
const DEST_PATH = 'dist/scss';
const SUPPORTED_COMPONENTS = [
  /* global vars */
  'options.vars.scss',
  /* component vars */
  'CdrButton.vars.scss',
  'CdrLink.vars.scss',
  'form-label.vars.scss',
  'CdrInput.vars.scss',
  'CdrSelect.vars.scss',
  'CdrCta.vars.scss',
  'CdrList.vars.scss'
];

const destMixinsDir = path.join(__dirname, `../../${DEST_REPO_NAME + path.sep + DEST_PATH}`);

// get vars files
const files = glob.sync('./**/*.vars.scss', { ignore: ['../**/node_modules/**'] });

// copy vars files
files.forEach((f) => {
  const fname = path.basename(f).replace(/^_/, ''); // remove `_` prefix from global vars files
  if (!SUPPORTED_COMPONENTS.includes(fname)) return console.log(`skipping ${fname}`);
  const outDest = `${destMixinsDir}/${fname}`;
  fs.copySync(f, outDest);
  console.log(`copied ${fname} to ${outDest}`)
});

/* iterate over SUPPORTED_COMPONENTS to ensure that vars are loaded in correct order */
const indexFile = SUPPORTED_COMPONENTS.map(fname => `@import "./${fname}";`).join('\n');
const singleFile = SUPPORTED_COMPONENTS.map(fname => fs.readFileSync(`${destMixinsDir}/${fname}`, 'utf8')).join('\n');

fs.outputFileSync(`${destMixinsDir}/index.scss`, indexFile);
fs.outputFileSync(`${destMixinsDir}/cedar-component-variables.scss`, singleFile);

// update cedar and cdr-tokens versions in component-variables

const cedarVersion = cedarPackageJson.version;
const tokenVersion = cedarPackageJson.devDependencies['@rei/cdr-tokens'];

console.log('updating component-variables peerDependencies', { cedarVersion, tokenVersion, currentPeerDeps: variablesPackageJson.peerDependencies }, )
variablesPackageJson.peerDependencies['@rei/cdr-tokens'] = tokenVersion;
variablesPackageJson.peerDependencies['@rei/cedar'] = cedarVersion;
fs.outputFileSync('../../rei-cedar-component-variables/package.json', JSON.stringify(variablesPackageJson));
