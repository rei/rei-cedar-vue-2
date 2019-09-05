
import CdrIcon from '../CdrIcon';

export default {
  name: 'IconDownload',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M11 14.585V3a1 1 0 0 1 2 0v11.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-5.005 5.005a.997.997 0 0 1-1.43-.026l-4.98-4.979a1 1 0 0 1 1.413-1.417L11 14.585zM6 20h12v-2a1 1 0 0 1 2 0v3a.997.997 0 0 1-1 1H5a.997.997 0 0 1-1-1v-3a1 1 0 0 1 2 0v2z"></path>
    </cdr-icon>)
  },
};
