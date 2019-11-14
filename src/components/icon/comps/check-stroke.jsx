import CdrIcon from '../CdrIcon';
export default {
  name: 'IconCheckStroke',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm3.237 3.36a1 1 0 111.532 1.285l-6.743 8.025a.997.997 0 01-1.565-.1l-2.227-2.66a1 1 0 111.532-1.285l1.52 1.817z"></path>
    </cdr-icon>)
  },
};
