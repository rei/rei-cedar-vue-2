/**
 * @mixin
 */
import BuildClass from './buildClass';

export default {
  mixins: [BuildClass],
  props: {
    /**
     * Space separated list of modifiers. See above for possible values
     */
    modifier: String,
  },
  computed: {
    modifierClass() {
      return this.buildClass('modifier');
    },
  },
};
