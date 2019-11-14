import CdrIcon from '../CdrIcon';
export default {
  name: 'IconMinusLg',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M6 11h12a1 1 0 010 2H6a1 1 0 010-2z"></path>
    </cdr-icon>)
  },
};
