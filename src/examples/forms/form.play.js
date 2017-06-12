import { play } from 'vue-play';
import Form from './Form';
import FormExample from '!raw-loader!./Form';

import TextDoc from './Input.md';

play(Form)
  .displayName('Forms')
  .add('Input', {
    ...Form,
    example: FormExample,
    readme: TextDoc,
  })
  ;
