import { play } from 'vue-play';
import basicRow from '../../examples/grid/basic/BasicRow';
import basicRowExample from '../../examples/grid/basic/BasicRowRaw';
import rowDocs from './Row.md';
import basicCol from '../../examples/grid/basic/BasicCol';
import basicColExample from '../../examples/grid/basic/BasicColRaw';

play('Grid')
  .add('Basic Row', {
    ...basicRow,
    example: basicRowExample,
    readme: rowDocs,
  })
  .add('Basic Col', {
    ...basicCol,
    example: basicColExample,
  })
;
