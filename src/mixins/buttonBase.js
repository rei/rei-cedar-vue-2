/**
 * @mixin
 */

export default {
  props: {
    /**
     * Controls render as button or anchor. {button, a}
     */
    tag: {
      type: String,
      default: 'button',
      validator: value => (['button', 'a'].indexOf(value) >= 0) || false,
    },
    /**
     * Sets the button type. {button, submit, reset}
     */
    type: {
      type: String,
      default: 'button',
      validator: value => (['button', 'submit', 'reset'].indexOf(value) >= 0) || false,
    },
    /**
     * Adds custom click actions.
     */
    onClick: {
      type: Function,
      default: () => () => null,
    },
    /**
     * Sets width to be 100%.
    */
    fullWidth: {
      type: Boolean,
      default: false,
      validator: value => typeof value === 'boolean',
    },
  },
  computed: {
    fullWidthClass() {
      return this.fullWidth ? `${this.baseClass}--full-width` : null;
    },
  },
};
