import CdrIcon from '../CdrIcon';
export default {
  name: 'IconSearch',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M20.707 19.294a1 1 0 01-1.414 1.414l-4.244-4.245a7.5 7.5 0 111.414-1.414l4.244 4.245zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"></path>
    </cdr-icon>)
  },
};
