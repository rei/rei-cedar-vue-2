import CdrIcon from '../CdrIcon';
export default {
  name: 'IconPlayStroke',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zM9.5 7.755a.5.5 0 01.236.06l6.992 3.745a.5.5 0 010 .881l-6.992 3.754a.5.5 0 01-.736-.44v-7.5a.5.5 0 01.5-.5z"></path>
    </cdr-icon>)
  },
};
