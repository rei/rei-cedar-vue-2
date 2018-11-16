/**
 * #Size Mixin/Interface
 *
 * Functionality for handling/standardizing component sizing.
 *
 *  :Values
 *    :small
 *    :medium (default)
 *    :large
 *
 * @mixin
 */
import propValidator from 'srcdir/utils/propValidator';
import BuildClass from './buildClass';

export default {
  mixins: [BuildClass],
  props: {
    /**
     * Size state
     */
    size: {
      type: String,
      default: 'medium',
      validator: value => propValidator(
        value,
        ['small', 'medium', 'large'],
      ),
    },
  },
  computed: {
    sizeClass() {
      const returnClass = this.buildClass('size');
      return returnClass;
    },
  },
};
