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
            false,
          );
        }
        return typeof value === 'boolean';
      },
    },
  },
  computed: {
    fullWidthClass() {
      if (typeof this.fullWidth === 'boolean') {
        return this.fullWidth && !this.iconOnly
          ? this.modifyClassName(this.baseClass, 'full-width') : null;
      }

      return this.buildClass('fullWidth', true);
    },
  },
};
