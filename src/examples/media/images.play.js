import { play } from 'vue-play';
import Image from '../../components/media/Image';
import ratios from './demos/Ratios';
import ratiosExample from '!raw-loader!./demos/Ratios';
import cropping from './demos/Cropping';
import croppingExample from '!raw-loader!./demos/Cropping';
import mods from './demos/Mods';
import modsExample from '!raw-loader!./demos/Mods';

import readMe from './images.md';

play(Image)
  .name('cdr-img')
  .displayName('Images')
  .add('standard', {
    template: '<cdr-img alt="standard cdr-img" src="http://placehold.it/350x150"></cdr-img>',
    readme: readMe,
  })
  .add('aspect ratio', {
    ...ratios,
    example: ratiosExample,
    readme: readMe,
  })
  .add('cropping', {
    ...cropping,
    example: croppingExample,
    readme: readMe,
  })
  .add('modifiers', {
    ...mods,
    example: modsExample,
    readme: readMe,
  })
;
