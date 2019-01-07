/**
 * @mixin
 */
export default {
  inject: ['wrapperTheme'],
  computed: {
    computedTheme() {
      if (this.theme !== '') {
        return this.theme;
      } else if (this.wrapperTheme && this.wrapperTheme.theme !== '') {
        return this.wrapperTheme.theme;
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
