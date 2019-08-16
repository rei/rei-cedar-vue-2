
import CdrIcon from 'componentsdir/icon/CdrIcon';

export default {
  name: 'IconCart',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M7.372 12.975L5.236 5H4a1 1 0 1 1 0-2h2c.317 0 .6.147.782.377.085.105.15.23.187.369L7.573 6H20a1 1 0 0 1 .936.648c.073.19.089.404.032.616l-1.607 5.998a1 1 0 0 1-1.048.738H9.168l-.402 1.5H18a1 1 0 0 1 0 2H7.47a1 1 0 0 1-.864-.497.997.997 0 0 1-.107-.77l.873-3.258zM9.18 12h8.447L18.7 8H8.11l1.071 4zm.069 9a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm7.5 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"></path>
    </cdr-icon>)
  },
};
