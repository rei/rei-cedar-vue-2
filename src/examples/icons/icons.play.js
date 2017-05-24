import { play } from 'vue-play';
import Icon from './Icons';
import IconExample from '!raw-loader!./Icons';

import readMe from './Icon.md';


play('Icons')
  .add('Icons', {
    ...Icon,
    example: IconExample,
    readme: readMe,
  });
