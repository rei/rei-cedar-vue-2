import CdrIcon from '../CdrIcon';
export default {
  name: 'IconHeartStroke',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M16 3a6 6 0 014.701 9.728c-.542.683-3.208 3.344-8 7.984a.997.997 0 01-1.428-.026c-5.051-4.985-7.764-7.71-8.138-8.173C2.575 11.818 2 10.312 2 9a6 6 0 0110-4.472A5.978 5.978 0 0116 3zm0 2a3.994 3.994 0 00-3.215 1.62.998.998 0 01-1.549.026l-.049-.063a4 4 0 00-6.43 4.76c.318.439 2.732 2.853 7.243 7.243 4.374-4.156 6.788-6.57 7.241-7.241.68-1.008.759-1.47.759-2.345a4 4 0 00-4-4z"></path>
    </cdr-icon>)
  },
};
