/**
 * #fullWidth Mixin/Interface
 *
 * Functionality for handling/standardizing full-width components.
 *
 *  :Values
 *    :@xs
 *    :x@sm
 *    :@md
 *    :@lg
 *
 * @mixin
 */
import propValidator from '../utils/propValidator';
import BuildClass from './buildClass';

export default {
  mixins: [BuildClass],
  props: {
    /**
     * fullWidth state
     */
    fullWidth: {
      type: [String, Boolean],
      default: false,
      validator: (value) => {
        if (typeof value === 'string') {
          return propValidator(
            value,
            ['@xs', '@sm', '@md', '@lg'],
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
