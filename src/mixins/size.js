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
import BuildClass from './buildClass';

const ValidSizes = ['small', 'small@xs', 'small@sm', 'small@md', 'small@lg',
  'medium', 'medium@xs', 'medium@sm', 'medium@md', 'medium@lg',
  'large', 'large@xs', 'large@sm', 'large@md', 'large@lg'];

export default {
  mixins: [BuildClass],
  props: {
    /**
     * Size state
     */
    size: {
      type: String,
      default: 'medium',
      validator: (size) => {
        const sizes = size.split(' ');
        let isValid = true;
        sizes.forEach((value) => {
          if (ValidSizes.indexOf(value) < 0) {
            isValid = false;
          }
        });
        return isValid;
      },
    },
  },
  computed: {
    sizeClass() {
      const returnClass = this.buildClass('size');
      return returnClass;
    },
  },
};
