import CdrIcon from '../CdrIcon';
export default {
  name: 'IconInformationStroke',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm0-10a.997.997 0 011 1v5a1 1 0 010 2h-2a1 1 0 010-2v-4a1 1 0 010-2h1zm.03-4a1.28 1.28 0 110 2.56 1.28 1.28 0 010-2.56z"></path>
    </cdr-icon>)
  },
};
