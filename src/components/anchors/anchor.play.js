import { play } from 'vue-play';
import Anchor from './Anchor';
import basicContrastAnchor from '../../examples/anchors/BasicContrastAnchor';
import basicOverlayAnchor from '../../examples/anchors/BasicOverlayAnchor';


play(Anchor)
  .name('cdr-a')
  .displayName('Anchor')
  .add('default', {
    template: '<cdr-a href="#example-a">Sample link</cdr-a>',
    readme: 'This is the default inline link for the REI theme. It is intended for Links that occur within body copy.',
  })
  .add('contrast', {
    ...basicContrastAnchor,
    template: '<cdr-a :modifier="[\'contrast\']" href="#example-a">Sample contrast link</cdr-a>',
    readme: 'This is the contrast variant of the inline link for the REI theme. Intended for non-editorial CTAs. Link examples: Sign-in, Footer',
  })
  .add('overlay', {
    ...basicOverlayAnchor,
    template: '<cdr-a :modifier="[\'overlay\']" href="#example-a">Sample contrast link</cdr-a>',
  })
  .add('standalone', '<cdr-a :modifier="[\'standalone\']" href="#example-a">Sample standalone link</cdr-a>')
  ;
