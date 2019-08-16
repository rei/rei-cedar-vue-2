
import CdrIcon from 'componentsdir/icon/CdrIcon';

export default {
  name: 'IconHeartFill',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M12.702 20.712a.997.997 0 0 1-1.43-.026c-5.05-4.985-7.763-7.71-8.137-8.173C2.575 11.818 2 10.312 2 9a6 6 0 0 1 10-4.472 6 6 0 0 1 8.701 8.2c-.542.683-3.208 3.344-8 7.984z"></path>
    </cdr-icon>)
  },
};
