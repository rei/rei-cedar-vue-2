import CdrIcon from '../CdrIcon';
export default {
  name: 'IconInformationFill',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 8h-1a1 1 0 000 2v4a1 1 0 000 2h2a1 1 0 000-2v-5a.997.997 0 00-1-1zm0-4a1.25 1.25 0 100 2.5A1.25 1.25 0 0012 6z"></path>
    </cdr-icon>)
  },
};
