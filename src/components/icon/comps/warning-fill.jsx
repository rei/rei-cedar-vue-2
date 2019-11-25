import CdrIcon from '../CdrIcon';
export default {
  name: 'IconWarningFill',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 13.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm.22-9.5h-.44a1 1 0 00-.996.913l-.004.116.191 6.5a1 1 0 00.886.965l.114.006h.058a1 1 0 00.99-.857l.01-.114.19-6.5A1 1 0 0012.22 6z"></path>
    </cdr-icon>)
  },
};
