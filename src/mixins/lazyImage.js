/**
 * use of this mixin requires binding lazy and lazyOpts in the component to work
 */
/**
 * @mixin
 */
export default {
  props: {
    /**
     * Enables lazy image loading with data-src attribute options
     */
    lazy: Boolean,
    /**
     * Enables lazy image loading with data-src attribute options
     */
    lazyOpts: {
      type: Object,
      default: () => {},
    },
  },
};
