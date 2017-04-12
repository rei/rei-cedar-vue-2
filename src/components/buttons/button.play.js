import { play } from 'vue-play';
import Button from './Button';


play(Button)
  .name('cdr-button')
  .displayName('Button')
  .add('core', '<cdr-button>Core</cdr-button>')
  .add('red', '<cdr-button theme="red">Red Theme</cdr-button>')
  .add('blue', '<cdr-button theme="blue">Blue</cdr-button>')
;
