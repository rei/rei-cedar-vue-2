import CdrIcon from '../CdrIcon';
export default {
  name: 'IconShoppingBagFill',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M7 8a5 5 0 1110 0h2.074a1 1 0 01.997.916l.928 11A1 1 0 0120.002 21H4a1 1 0 01-.997-1.083l.914-11A1 1 0 014.914 8H7zm5-3a3 3 0 00-3 3h6a3 3 0 00-3-3z"></path>
    </cdr-icon>)
  },
};
