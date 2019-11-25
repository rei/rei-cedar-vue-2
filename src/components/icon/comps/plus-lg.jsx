import CdrIcon from '../CdrIcon';
export default {
  name: 'IconPlusLg',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M11 11H6a1 1 0 000 2h5v5a1 1 0 002 0v-5h5a1 1 0 000-2h-5V6a1 1 0 00-2 0v5z"></path>
    </cdr-icon>)
  },
};
