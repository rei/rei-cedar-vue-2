import CdrIcon from '../CdrIcon';
export default {
  name: 'IconPlusSm',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M11 11H8a1 1 0 000 2h3v3a1 1 0 002 0v-3h3a1 1 0 000-2h-3V8a1 1 0 00-2 0v3z"></path>
    </cdr-icon>)
  },
};
