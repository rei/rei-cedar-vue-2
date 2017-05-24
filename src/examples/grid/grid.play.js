import { play } from 'vue-play';
import basicRow from './demo/BasicRow';
import basicRowExample from '!raw-loader!./demo/BasicRow';
import basicCol from './demo/BasicCol';
import basicColExample from '!raw-loader!./demo/BasicCol';
import complex from './demo/Complex';
import complexExample from '!raw-loader!./demo/Complex';

import rowDocs from './Row.md';

play('Grid')
  .add('Basic Row', {
    ...basicRow,
    example: basicRowExample,
    readme: rowDocs,
  })
  .add('Basic Col', {
    ...basicCol,
    example: basicColExample,
    readme: rowDocs,
  })
  .add('Complex', {
    ...complex,
    example: complexExample,
    readme: rowDocs,
  })
;
