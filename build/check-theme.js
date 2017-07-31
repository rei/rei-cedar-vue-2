// Used for generating vertical themed versions of cedar
// Checks for a theme argument that is then used in vue-theme-loader in webpack.base.conf.js
// npm run dev -- --theme=<name>

var chalk = require('chalk')
var argv = require('minimist')(process.argv.slice(2));

module.exports = function () {
  argv.theme ? process.env.theme = argv.theme : process.env.theme = 'default';
  console.log(chalk.blue('Using ' + process.env.theme + ' theme'))
};
