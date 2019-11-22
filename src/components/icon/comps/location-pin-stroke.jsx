import CdrIcon from '../CdrIcon';
export default {
  name: 'IconLocationPinStroke',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M12 2a8 8 0 018 8c0 2.81-2.428 6.713-7.284 11.698a1.006 1.006 0 01-1.432 0C6.428 16.713 4 12.811 4 10a8 8 0 018-8zm0 2a6 6 0 00-6 6c0 2.013 1.968 5.282 6 9.552 4.032-4.27 6-7.539 6-9.552a6 6 0 00-6-6zm0 4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"></path>
    </cdr-icon>)
  },
};
