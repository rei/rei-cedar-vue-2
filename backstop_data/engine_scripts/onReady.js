const hover = require('./hover');
const focus = require('./focus');

module.exports = async (page, scenario, vp) => {
  await hover(page, scenario);
  await focus(page, scenario);
  // add more ready handlers here...
};
