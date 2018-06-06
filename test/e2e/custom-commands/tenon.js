const util = require('util');
const Tenon = require('tenon-node');

exports.command = function () { // eslint-disable-line
  const FAILURE_MSG = '%s\n Description: %s\n Location: Line %d, Column %d\n Help: %s \n';
  const PASS_MSG = '%d Tenon a11y tests passed';
  const BP_URL = 'https://tenon.io/';
  const self = this;

  let source;

  self
    .source((results) => {
      source = results.value.trim();
    })
    .perform((client, done) => {
      const tenonTest = new Tenon({
        key: '2f5d417c7781b957398e393c409280d5',
      });

      tenonTest.checkSrc(source, {
        // certainty: '0', // '0','20','40','60','80','100' Default is '0'
        projectID: 'ebafcbf9-4a91-4abc-9f68-1a9706416ab3',
        docID: 'CedarProvingGrounds',
        // priority: '0', // '0','20','40','60','80','100' Default is '0'
        // level: 'AAA', // 'A','AA','AAA' Default is 'AAA'
        store: 1,
        appID: 'Cedar',
        ref: 1,
        // If you set height, width must also be set. Default is '768'
        // viewPortHeight: '768',
        // If you set width, height must also be set. Default is '1024'
        // viewPortWidth: '1024',
      }, (err, results) => {
        console.log('============error:', err);
        console.log('------------results:', results);

        if (err) {
          self.verify.fail(null, null, util.format('Error with request: %s', err));
        } else if (results.resultSet.length) { // errors
          results.resultSet.forEach((violation) => {
            self.verify.fail(violation.errorTitle, violation.resultTitle, util.format(FAILURE_MSG, violation.errorTitle, violation.errorDescription, violation.position.line, violation.position.column, util.format(BP_URL, violation.tID, violation.bpID)));
          });
        } else {
          self.assert.ok(true, util.format(PASS_MSG, results.resultSummary.tests.passing));
        }

        done();
      });
    });


  return this;
};
