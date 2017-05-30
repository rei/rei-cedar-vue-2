import { play } from 'vue-play';
import defaultAnchor from './demo/Default';
import defaultAnchorExample from '!raw-loader!./demo/Default';
import contrastAnchor from './demo/Contrast';
import contrastAnchorExample from '!raw-loader!./demo/Contrast';
import overlayAnchor from './demo/Overlay';
import overlayAnchorExample from '!raw-loader!./demo/Overlay';
import standaloneAnchor from './demo/Standalone';
import standaloneAnchorExample from '!raw-loader!./demo/Standalone';
import buttonAnchor from './demo/Button';
import buttonAnchorExample from '!raw-loader!./demo/Button';

import anchorDoc from './Anchor.md';

play('Anchor')
  .add('default', {
    ...defaultAnchor,
    example: defaultAnchorExample,
    readme: anchorDoc,
  })
  .add('contrast', {
    ...contrastAnchor,
    example: contrastAnchorExample,
    readme: anchorDoc,
  })
  .add('overlay', {
    ...overlayAnchor,
    example: overlayAnchorExample,
    readme: anchorDoc,
  })
  .add('standalone', {
    ...standaloneAnchor,
    example: standaloneAnchorExample,
    readme: anchorDoc,
  })
  .add('Button styles', {
    ...buttonAnchor,
    example: buttonAnchorExample,
    readme: anchorDoc,
  })
  ;
