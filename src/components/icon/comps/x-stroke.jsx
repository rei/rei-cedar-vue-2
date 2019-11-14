import CdrIcon from '../CdrIcon';
export default {
  name: 'IconXStroke',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm1.406-7.998l3.297-3.295a1 1 0 10-1.414-1.414l-3.297 3.295-3.285-3.295a1 1 0 00-1.414 1.414l3.285 3.294-3.285 3.289a1 1 0 001.414 1.414l3.285-3.288 3.297 3.288a1 1 0 001.414-1.414l-3.297-3.288z"></path>
    </cdr-icon>)
  },
};
