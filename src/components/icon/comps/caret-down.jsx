
import CdrIcon from '../CdrIcon';

export default {
  name: 'IconCaretDown',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M12 16c.273 0 .521-.11.702-.288l5.005-5.005a1 1 0 0 0-1.414-1.414L12 13.586 7.705 9.29a1 1 0 0 0-1.412 1.417l4.98 4.98c.182.193.44.313.727.313z"></path>
    </cdr-icon>)
  },
};
