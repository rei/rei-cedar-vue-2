
import { CdrIcon } from 'componentsdir/icon/CdrIcon';

export default {
  name: 'IconArrowUp',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M13 7.415l3.295 3.295a1 1 0 0 0 1.412-1.417l-4.98-4.98a.997.997 0 0 0-1.429-.025L6.293 9.293a1 1 0 0 0 1.414 1.414L11 7.414V19a1 1 0 0 0 2 0V7.415z"></path>
    </cdr-icon>)
  },
};
