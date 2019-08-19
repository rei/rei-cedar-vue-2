/**
 * #fullWidth Mixin/Interface
 *
 * Functionality for handling/standardizing full-width components.
 *
 *  :Values
 *    :xs
 *    :sm
 *    :md
 *    :lg
 *    :all
 *
 * @mixin
 */
import propValidator from 'srcdir/utils/propValidator';
import BuildClass from './buildClass';

export default {
  mixins: [BuildClass],
  props: {
    /**
     * fullWidth state
     */
    fullWidth: {
      type: [String, Boolean], // support both types until boolean can be depricated
      validator: (value) => {
        if (typeof value === 'string') {
          return propValidator(
            value,
            ['xs', 'sm', 'md', 'lg', 'all'],
          );
        }
        return typeof value === 'boolean';
      },
    },
  },
  computed: {
    sizeClass() {
      const returnClass = this.buildClass('fullWidth');
      return returnClass;
    },
  },
};
