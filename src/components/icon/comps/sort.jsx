import CdrIcon from '../CdrIcon';
export default {
  name: 'IconSort',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M7.293 4.293a.997.997 0 011.416.002l.002.002 2.996 2.996a1 1 0 11-1.414 1.414L9 7.414V16a1 1 0 01-2 0V7.414L5.707 8.707a1 1 0 01-1.414-1.414l3-3zm12.414 12.414l-3 3a.997.997 0 01-1.416-.002l-.002-.002-2.996-2.996a1 1 0 011.414-1.414L15 16.586V8a1 1 0 012 0v8.586l1.293-1.293a1 1 0 011.414 1.414z"></path>
    </cdr-icon>)
  },
};
