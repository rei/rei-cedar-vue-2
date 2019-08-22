
import { CdrIcon } from 'componentsdir/icon/CdrIcon';

export default {
  name: 'IconCheckLg',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M9.673 18.669h.001L19.766 6.644a1 1 0 1 0-1.532-1.286l-9.3 11.085-3.169-3.776a1 1 0 1 0-1.532 1.286l3.875 4.618a.999.999 0 0 0 1.565.099z"></path>
    </cdr-icon>)
  },
};
