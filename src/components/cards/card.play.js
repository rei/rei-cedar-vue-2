import { play } from 'vue-play';
import Card from './Card';


play(Card)
  .name('cdr-card')
  .displayName('Card')
  .add('blank', '<cdr-card></cdr-card>')
  .add('with text', '<cdr-card>Hello World</cdr-card>')
;
