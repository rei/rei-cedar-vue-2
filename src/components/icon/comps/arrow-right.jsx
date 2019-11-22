import CdrIcon from '../CdrIcon';
export default {
  name: 'IconArrowRight',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M16.585 13l-3.295 3.295a1 1 0 001.417 1.412l4.98-4.98a.997.997 0 00.025-1.429l-5.005-5.005a1 1 0 00-1.414 1.414L16.586 11H5a1 1 0 000 2h11.585z"></path>
    </cdr-icon>)
  },
};
