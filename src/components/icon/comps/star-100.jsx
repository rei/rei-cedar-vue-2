
import { CdrIcon } from '../CdrIcon';

export default {
  name: 'IconStar100',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M5.686 22.066l1.668-7.552L1.82 9.465l7.298-.659 2.877-7.146 2.877 7.146 7.298.659-5.534 5.049 1.668 7.552-6.309-4.006z"></path>
    </cdr-icon>)
  },
};
