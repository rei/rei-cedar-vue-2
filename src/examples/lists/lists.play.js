import { play } from 'vue-play';
import defaultList from './demo/Default';
import defaultListExample from '!raw-loader!./demo/Default';
import OrderedList from './demo/Ordered';
import OrderedListExample from '!raw-loader!./demo/Ordered';
import UnstyledList from './demo/Unstyled';
import UnstyledListExample from '!raw-loader!./demo/Unstyled';
import MenuList from './demo/Menu';
import MenuListExample from '!raw-loader!./demo/Menu';

import listDocs from './List.md';

play('List')
  .add('Default', {
    ...defaultList,
    example: defaultListExample,
    readme: listDocs,
  })
  .add('Ordered', {
    ...OrderedList,
    example: OrderedListExample,
    readme: listDocs,
  })
  .add('Unstyled', {
    ...UnstyledList,
    example: UnstyledListExample,
    readme: listDocs,
  })
  .add('Menu', {
    ...MenuList,
    example: MenuListExample,
    readme: listDocs,
  })
  ;
