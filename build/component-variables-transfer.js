const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');

const DEST_REPO_NAME = 'rei-cedar-component-variables';
const DEST_PATH = 'dist/scss';
const SUPPORTED_COMPONENTS = [
  /* global vars */
  'responsive.vars.scss',
  'options.vars.scss',
  /* component vars */
  'CdrButton.vars.scss',
  'CdrLink.vars.scss',
  'text.vars.scss',
  'form-label.vars.scss',
  'CdrInput.vars.scss',
  'CdrSelect.vars.scss'
];

const destMixinsDir = path.join(__dirname, `../../${DEST_REPO_NAME + path.sep + DEST_PATH}`);

// get vars files
const files = glob.sync('../**/*.vars.pcss', { ignore: ['../**/node_modules/**'] });

// copy vars files
files.forEach((f) => {
  const fname = path.basename(f);
  const ext = path.extname(f);
  const outFname = fname.replace(ext, '.scss');
  if (!SUPPORTED_COMPONENTS.includes(outFname)) return console.log(`skipping ${outFname}`);

  const outDest = `${destMixinsDir}/${outFname}`;
  fs.copySync(f, outDest);
  console.log(`copied ${fname} to ${outDest}`)
});

/* iterate over SUPPORTED_COMPONENTS to ensure that vars are loaded in correct order */
const indexFile = SUPPORTED_COMPONENTS.map(fname => `@import "./${fname}";`).join('\n');
const singleFile = SUPPORTED_COMPONENTS.map(fname => fs.readFileSync(`${destMixinsDir}/${fname}`, 'utf8')).join('\n');

fs.outputFileSync(`${destMixinsDir}/index.scss`, indexFile);
fs.outputFileSync(`${destMixinsDir}/cedar-component-variables.scss`, singleFile);
