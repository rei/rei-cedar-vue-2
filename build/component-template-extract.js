const fs = require('fs-extra');
const _ = require('lodash');
const chalk = require('chalk');

require('jsdom-global')('<html><body><div id=app></div></body></html>', {
  features: {
    QuerySelector: true,
  },
});

const Vue = require('vue/dist/vue');
Vue.config.productionTip = false;

const el = document.createElement('DIV');

function extract(comps, info, templateStr) {
  console.log(chalk.cyan(`Extracting template...`));
  let html = '';
  const dir = process.cwd();
  const [org, name] = info.name.split('/');
  const outputPath = `${dir}/dist`;
  
  const compObj = {};
  comps.forEach(c => {
    compObj[c] = require(`${outputPath}/${name}`)[c]
  });
  
  const vm = new Vue({
    components: {
      ...compObj,
    },
    template: templateStr,
  });
  
  vm.$mount(el);
  vm.$nextTick(() => {
    html = vm.$el.outerHTML;
    const regex = new RegExp(`_${info.version}`, 'g');
    const noModule = html.replace(regex, '');
    fs.outputFileSync(`${outputPath}/template.html`, noModule);
    console.log(chalk.cyan(`Extracting template complete.\n`));
  });
}

module.exports = extract;