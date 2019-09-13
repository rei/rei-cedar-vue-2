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
import propValidator from '../utils/propValidator';
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
      console.log('Size Class Called');
      console.log('Size = ', this.size);
      const returnClass = this.buildClass('size');
      console.log('returnClass = ', returnClass);
      return returnClass;
    },
  },
};
