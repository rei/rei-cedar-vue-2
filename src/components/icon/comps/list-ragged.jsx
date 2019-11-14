import CdrIcon from '../CdrIcon';
export default {
  name: 'IconListRagged',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M18 17a1 1 0 010 2H4a1 1 0 010-2h14zm-4-6a1 1 0 010 2H4a1 1 0 010-2h10zm6-6a1 1 0 010 2H4a1 1 0 110-2h16z"></path>
    </cdr-icon>)
  },
};
