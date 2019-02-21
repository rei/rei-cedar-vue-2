const glob = require('glob');
const fs = require('fs-extra');
const path = require('path');

module.exports = (outDir) => {
  let index = '';
  // get vars files
  const files = glob.sync('../**/*.vars.pcss', { ignore: ['../**/node_modules/**'] });
  // copy vars files
  files.forEach((f) => {
    const fname = path.basename(f);
    const ext = path.extname(f);
    const outFname = fname.replace(ext, '.scss');
    fs.copySync(f, `${outDir}/scss/${outFname}`);
    index += `@import "./${outFname}";
`;
  });

  fs.outputFileSync(`${outDir}/scss/index.scss`, index);
};
