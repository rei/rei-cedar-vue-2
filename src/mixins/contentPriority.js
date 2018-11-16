/**
 * @mixin
 */
import BuildClass from './buildClass';

export default {
  mixins: [BuildClass],
  props: {
    contentPriority: {
      type: String,
      default: 'primary',
      validator: value =>
        ['primary', 'secondary', 'tertiary'].indexOf(value) >= 0 || false,
    },
  },
  computed: {
    contentPriorityClass() {
      return this.buildClass('contentPriority');
    },
  },
};
