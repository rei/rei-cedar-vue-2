import CdrIcon from '../CdrIcon';
export default {
  name: 'IconErrorFill',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default}
      <path role="presentation" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm3.293-5.293a1 1 0 001.414-1.414L9.121 7.707a1 1 0 10-1.414 1.414l7.586 7.586z" clip-rule="evenodd"></path>
    </cdr-icon>)
  },
};
