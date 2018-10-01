/**
 * @mixin
 */
export default {
  inject: {
    wrapperTheme: { default: '' },
  },
  computed: {
    computedTheme() {
      if (this.wrapperTheme !== '') {
        return this.wrapperTheme;
      } else if (this.theme !== '') {
        return this.theme;
      }
      return false;
    },
    themeClass() {
      return this.computedTheme ? `on-${this.computedTheme}` : '';
    },
  },
  props: {
    theme: {
      type: String,
      default: '',
    },
  },
};
