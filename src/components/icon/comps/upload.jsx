import CdrIcon from '../CdrIcon';
export default {
  name: 'IconUpload',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M19 17a1 1 0 011 1v3a.997.997 0 01-1 1H5a.997.997 0 01-1-1v-3a1 1 0 012 0v2h12v-2a1 1 0 011-1zM12 2c.286 0 .545.12.727.314l4.98 4.979a1 1 0 01-1.412 1.417L13 5.415V17a1 1 0 01-2 0V5.414L7.707 8.707a1 1 0 01-1.414-1.414l5.005-5.005A.997.997 0 0112 2z"></path>
    </cdr-icon>)
  },
};
