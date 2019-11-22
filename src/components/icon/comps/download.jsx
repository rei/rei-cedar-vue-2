import CdrIcon from '../CdrIcon';
export default {
  name: 'IconDownload',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M19 17a1 1 0 011 1v3a.997.997 0 01-1 1H5a.997.997 0 01-1-1v-3a1 1 0 012 0v2h12v-2a1 1 0 011-1zM12 2a1 1 0 011 1v11.586l3.293-3.293a1 1 0 011.414 1.414l-5.005 5.005a.997.997 0 01-1.43-.026l-4.98-4.979a1 1 0 011.413-1.417L11 14.585V3a1 1 0 011-1z"></path>
    </cdr-icon>)
  },
};
