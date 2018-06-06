const hover = require('./hover');
const focus = require('./focus');

module.exports = (chromy, scenario, vp) => {
  hover(chromy, scenario);
  focus(chromy, scenario);
  // add more ready handlers here...
};
