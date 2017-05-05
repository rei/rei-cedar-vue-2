import { play } from 'vue-play';
import cdrList from './Lists';

play(cdrList)
  .displayName('List')
  .add('(Default)', {
    template: '<cdr-list><li>unordered list</li><li>unordered list</li></cdr-list>',
    readme: 'The default for an unordered list is bulleted.',
  })
  .add('Ordered List', {
    template: '<cdr-list type="ol"><li>ordered list</li><li>ordered list</li></cdr-list>',
    readme: 'The default for an ordered list is numbered.',
  })
  .add('Unstyled List', {
    template: '<cdr-list :modifier="[\'unstyled\']"><li>unstyled list</li><li>unstyled list</li></cdr-list>',
    readme: 'List example if unstyled is defined.',
  })
  .add('Menu List (Filter Menu)', {
    template: '<cdr-list :modifier="[\'menu\']"><li><a href="/">menu</a></li><li><a href="/">menu</a></li></cdr-list>',
    readme: 'List menu example.',
  })
  ;
