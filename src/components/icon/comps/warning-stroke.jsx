import CdrIcon from '../CdrIcon';
export default {
  name: 'IconWarningStroke',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 11.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm.22-9.5a1 1 0 011 1.03l-.191 6.5a1 1 0 01-1 .97h-.058a1 1 0 01-1-.97l-.19-6.5A1 1 0 0111.78 6h.44z"></path>
    </cdr-icon>)
  },
};
