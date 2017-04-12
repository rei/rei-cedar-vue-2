import { play } from 'vue-play';
import Heading from './Heading';


play(Heading)
  .name('cdr-heading')
  .displayName('Heading')
  .add('h1', '<cdr-heading :level="1">Hello</cdr-heading>')
  .add('h2', '<cdr-heading :level="2">Hello</cdr-heading>')
;
