module.exports = function (casper, scenario, vp) {
    casper.evaluate(function () {
        //Your web-app is now loaded. Edit here to simulate user interacions or other state changes.
        document.querySelector(scenario.selectors[0]).disabled = true;
    });
};