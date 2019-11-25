import CdrIcon from '../CdrIcon';
export default {
  name: 'IconCartFill',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M9.25 18.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm7.5 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM6 3c.317 0 .6.147.782.377.085.105.15.23.187.369L7.573 6H20a1 1 0 01.936.648c.073.19.089.404.032.616l-1.607 5.998a1 1 0 01-1.048.738H9.168l-.402 1.5H18a1 1 0 010 2H7.47a1 1 0 01-.864-.497.997.997 0 01-.107-.77l.873-3.258L5.236 5H4a1 1 0 110-2h2z"></path>
    </cdr-icon>)
  },
};
