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
      } if (this.wrapperTheme !== '') {
        return this.wrapperTheme;
      }
      return false;
    },
    visuealPriorityClass() {
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
