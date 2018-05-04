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
  },
  computed: {
    baseClass() {
      return 'cdr-button';
    },
  },
};
