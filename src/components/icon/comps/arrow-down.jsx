
import { CdrIcon } from 'componentsdir/icon/CdrIcon';

export default {
  name: 'IconArrowDown',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M11 16.585L7.705 13.29a1 1 0 0 0-1.412 1.417l4.98 4.98a.997.997 0 0 0 1.429.025l5.005-5.005a1 1 0 0 0-1.414-1.414L13 16.586V5a1 1 0 0 0-2 0v11.585z"></path>
    </cdr-icon>)
  },
};
