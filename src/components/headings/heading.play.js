import { play } from 'vue-play';
import Heading from './Heading';
import readMe from './Heading.md';


play(Heading)
  .name('cdr-heading')
  .displayName('Heading')
  .add('headline', {
    template: '<cdr-heading :level="1" :modifier="[\'headline\']">headline</cdr-heading>',
    readme: readMe,
  })
  .add('title', {
    template: '<cdr-heading :level="1" :modifier="[\'title\']">title</cdr-heading>',
    readme: readMe,
  })
  .add('subtitle', {
    template: '<cdr-heading :level="1" :modifier="[\'subtitle\']">subtitle</cdr-heading>',
    readme: readMe,
  })
  .add('section-title', {
    template: '<cdr-heading :level="1" :modifier="[\'section-title\']">section-title</cdr-heading>',
    readme: readMe,
  })
  .add('body-copy', {
    template: '<cdr-heading :level="1" :modifier="[\'body-copy\']">body-copy</cdr-heading>',
    readme: readMe,
  })
  .add('pull-quote', {
    template: '<cdr-heading :level="1" :modifier="[\'pull-quote\']">pull-quote</cdr-heading>',
    readme: readMe,
  })
  .add('sub-section', {
    template: '<cdr-heading :level="1" :modifier="[\'sub-section\']">sub-section</cdr-heading>',
    readme: readMe,
  })
  .add('information', {
    template: '<cdr-heading :level="1" :modifier="[\'information\']">information</cdr-heading>',
    readme: readMe,
  })
  .add('description', {
    template: '<cdr-heading :level="1" :modifier="[\'description\']">description</cdr-heading>',
    readme: readMe,
  })
  .add('detail', {
    template: '<cdr-heading :level="1" :modifier="[\'detail\']">detail</cdr-heading>',
    readme: readMe,
  })
  .add('disclaimer', {
    template: '<cdr-heading :level="1" :modifier="[\'disclaimer\']">disclaimer</cdr-heading>',
    readme: readMe,
  })
;
