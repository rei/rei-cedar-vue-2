import { play } from 'vue-play';
import Input from './Input';

play(Input)
  .name('cdr-input')
  .displayName('Forms')
  .add('Disabled', {
    template: '<cdr-input placeholder="Disabled" disabled>Disabled</cdr-input>',
    readme: 'Form example input disabled.',
  })
  .add('Input single line', {
    template: '<cdr-input type="text" placeholder="Input label">Input single line</cdr-input>',
    readme: 'Form example of single line input.',
  })
  .add('Input multi-line', {
    template: '<cdr-input type="text" placeholder="Multi-line label" :modifier="[\'large\']">Input multi-line</cdr-input>',
    readme: 'Form example of multi-line input.',
  })
  ;
