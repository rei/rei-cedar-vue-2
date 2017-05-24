import { play } from 'vue-play';
import defaultButtons from './demo/Default';
import defaultButtonsExample from '!raw-loader!./demo/Default';
import secondaryButtons from './demo/Secondary';
import secondaryButtonsExample from '!raw-loader!./demo/Secondary';
import blackButtons from './demo/Black';
import blackButtonsExample from '!raw-loader!./demo/Black';
import whiteButtons from './demo/White';
import whiteButtonsExample from '!raw-loader!./demo/White';
import linkButtons from './demo/Link';
import linkButtonsExample from '!raw-loader!./demo/Link';
import group from './demo/Group';
import groupExample from '!raw-loader!./demo/Group';

import buttonDocs from './Button.md';
import groupDocs from './ButtonGroup.md';

play('Button')
  .add('Default', {
    ...defaultButtons,
    example: defaultButtonsExample,
    readme: buttonDocs,
  })
  .add('Secondary', {
    ...secondaryButtons,
    example: secondaryButtonsExample,
    readme: buttonDocs,
  })
  .add('Black Alternate', {
    ...blackButtons,
    example: blackButtonsExample,
    readme: buttonDocs,
  })
  .add('White Alternate', {
    ...whiteButtons,
    example: whiteButtonsExample,
    readme: buttonDocs,
  })
  .add('Link Styles', {
    ...linkButtons,
    example: linkButtonsExample,
    readme: buttonDocs,
  })
  .add('Button Group', {
    ...group,
    example: groupExample,
    readme: groupDocs,
  })
  ;
