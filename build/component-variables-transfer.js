const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');

const DEST_REPO_NAME = 'rei-cedar-component-variables';
const DEST_PATH = 'dist/scss';
const SUPPORTED_COMPONENTS = [
  'CdrButton.vars.scss',
  'CdrLink.vars.scss',
  'text.vars.scss'
];

const destMixinsDir = path.join(__dirname, `../../${DEST_REPO_NAME + path.sep + DEST_PATH}`);

let index = '';
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
  index += `@import "./${outFname}";\n`;
  console.log(`copied ${fname} to ${outDest}`)
});

fs.outputFileSync(`${destMixinsDir}/index.scss`, index);
