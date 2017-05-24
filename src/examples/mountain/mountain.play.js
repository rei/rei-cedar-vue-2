import { play } from 'vue-play';
import Mountains from './Mountains';
import MountainsRaw from '!raw-loader!./Mountains';

play('Mountain Shape')
  .add('Mountain Shape', {
    ...Mountains,
    example: MountainsRaw,
  })
;
