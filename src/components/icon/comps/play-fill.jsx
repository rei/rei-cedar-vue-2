import CdrIcon from '../CdrIcon';
export default {
  name: 'IconPlayFill',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM9.5 7.755a.5.5 0 00-.5.5v7.5a.5.5 0 00.736.44l6.993-3.754a.5.5 0 000-.881L9.735 7.814a.5.5 0 00-.236-.059z"></path>
    </cdr-icon>)
  },
};
