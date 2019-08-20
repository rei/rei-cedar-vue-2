
import CdrIcon from 'componentsdir/icon/CdrIcon';

export default {
  name: 'IconCheckStroke',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm4.77-11.355l-6.744 8.025a.997.997 0 0 1-1.565-.1l-2.227-2.66a1 1 0 1 1 1.532-1.285l1.52 1.817 5.951-7.083a1 1 0 1 1 1.532 1.286z"></path>
    </cdr-icon>);
  },
};
