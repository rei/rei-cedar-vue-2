import { play } from 'vue-play';
import Heading from './Headings';
import HeadingExample from '!raw-loader!./Headings';

import readMe from './Heading.md';


play('Headings')
  .add('Headings', {
    ...Heading,
    example: HeadingExample,
    readme: readMe,
  });
