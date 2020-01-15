import CdrIcon from '../CdrIcon';
export default {
  name: 'IconBedOutline',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M9 10h12a1 1 0 011 1v3.785a1.004 1.004 0 010 .43V19a1 1 0 01-2 0v-3H4v3a1 1 0 01-2 0V5a1 1 0 112 0v3.25A1.98 1.98 0 015 8h2a2 2 0 012 2zm-5 2v2h16v-2H4z"></path>
    </cdr-icon>)
  },
};
