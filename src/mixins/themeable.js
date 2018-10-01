/**
 * @mixin
 */
export default {
  inject: {
    wrapperTheme: { default: '' },
  },
  computed: {
    computedTheme() {
      if (this.theme !== '') {
        return this.theme;
      } else if (this.wrapperTheme !== '') {
        return this.wrapperTheme;
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
