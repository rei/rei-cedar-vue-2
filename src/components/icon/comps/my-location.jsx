import CdrIcon from '../CdrIcon';
export default {
  name: 'IconMyLocation',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M17.983 7.233l-2.21 11.914a1.045 1.045 0 01-2.033.094l-1.646-5.798-6.044.028a1.044 1.044 0 01-.468-1.978l10.91-5.385a1.046 1.046 0 011.49 1.125z"></path>
    </cdr-icon>)
  },
};
