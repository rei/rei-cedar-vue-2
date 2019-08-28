
import { CdrIcon } from '../CdrIcon';

export default {
  name: 'IconCouponFill',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M12.403 3h7.595a1 1 0 0 1 1 1l-.011 7.587a1 1 0 0 1-.293.705l-8.404 8.414a1 1 0 0 1-1.411.004l-7.582-7.506a1 1 0 0 1-.007-1.415l8.402-8.492A1 1 0 0 1 12.403 3zm4.347 5.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z"></path>
    </cdr-icon>)
  },
};
