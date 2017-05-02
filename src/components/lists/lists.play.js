import { play } from 'vue-play';
import cdrList from './Lists';

play(cdrList)
  .displayName('List')
  .add('Unstyled Unordered List (Default)', {
    template: '<cdr-list><li>unstyled</li><li>unstyled</li></cdr-list>',
    readme: 'Unordered and unstyled list example, which is the default list style.',
  })
  .add('Bulleted Unordered List', {
    template: '<cdr-list :modifier="[\'bulleted\']"><li>bulleted</li><li>bulleted</li></cdr-list>',
    readme: 'Bulleted list example.',
  })
  .add('Ordered List', {
    template: '<cdr-list :modifier="[\'numbered\']"><li>ordered list - numbered</li><li>ordered list - numbered</li></cdr-list>',
    readme: 'Ordered list example.',
  })
  .add('Menu List (Filter Menu)', {
    template: '<cdr-list :modifier="[\'menu\']"><li><a href="/">menu</a></li><li><a href="/">menu</a></li></cdr-list>',
    readme: 'List menu example.',
  })
  ;
