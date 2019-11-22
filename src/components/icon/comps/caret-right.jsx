import CdrIcon from '../CdrIcon';
export default {
  name: 'IconCaretRight',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M16 12a.997.997 0 00-.288-.702l-5.005-5.005a1 1 0 00-1.414 1.414L13.585 12 9.29 16.295a1 1 0 001.417 1.412l4.98-4.98A.997.997 0 0016 12z"></path>
    </cdr-icon>)
  },
};
