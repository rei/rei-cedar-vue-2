
import CdrIcon from '../CdrIcon';

export default {
  name: 'IconLocationPinFill',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M12.716 21.698a1.006 1.006 0 0 1-1.432 0C6.428 16.713 4 12.811 4 10a8 8 0 1 1 16 0c0 2.81-2.428 6.713-7.284 11.698zM12 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
    </cdr-icon>)
  },
};
