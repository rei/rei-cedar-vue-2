
import CdrIcon from '../CdrIcon';

export default {
  name: 'IconArrowLeft',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M7.415 11l3.295-3.295a1 1 0 0 0-1.417-1.412l-4.98 4.98a.997.997 0 0 0-.025 1.429l5.005 5.005a1 1 0 1 0 1.414-1.414L7.414 13H19a1 1 0 0 0 0-2H7.415z"></path>
    </cdr-icon>)
  },
};
