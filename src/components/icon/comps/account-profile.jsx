import CdrIcon from '../CdrIcon';
export default {
  name: 'IconAccountProfile',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M12 12a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm6.762 7a7.073 7.073 0 00-13.524 0h13.524zM4 21a1 1 0 01-1-1h-.008a9.08 9.08 0 01.02-.159 9.08 9.08 0 015.454-7.127 5.5 5.5 0 117.068 0A9.08 9.08 0 0121.008 20H21a1 1 0 01-1 1H4z"></path>
    </cdr-icon>)
  },
};
