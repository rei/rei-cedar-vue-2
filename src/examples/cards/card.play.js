import { play } from 'vue-play';
import defaultCard from './demo/Default';
import defaultCardExample from '!raw-loader!./demo/Default';

import cardDocs from './Cards.md';

play('Card')
  .add('Default', {
    ...defaultCard,
    example: defaultCardExample,
    readme: cardDocs,
  })
;
