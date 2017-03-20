module.exports = function (casper, scenario, vp) {
    var el = casper.evaluate(function (s) {
        document.querySelector(s.selectors[0]).disabled = true;
    }, scenario);
};