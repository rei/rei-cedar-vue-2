import CdrIcon from '../CdrIcon';
export default {
  name: 'IconListView',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M6 17a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2a1 1 0 011-1h2zm14 1a1 1 0 010 2H10a1 1 0 010-2h10zM6 10a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2a1 1 0 011-1h2zm14 1a1 1 0 010 2H10a1 1 0 010-2h10zM6 3a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h2zm14 1a1 1 0 010 2H10a1 1 0 110-2h10z"></path>
    </cdr-icon>)
  },
};
