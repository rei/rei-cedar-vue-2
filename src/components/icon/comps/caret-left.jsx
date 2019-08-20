
import CdrIcon from 'componentsdir/icon/CdrIcon';

export default {
  name: 'IconCaretLeft',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M8 12c0 .273.11.521.288.702l5.005 5.005a1 1 0 0 0 1.414-1.414L10.415 12l4.295-4.295a1 1 0 0 0-1.417-1.412l-4.98 4.98A.997.997 0 0 0 8 12z"></path>
    </cdr-icon>);
  },
};
