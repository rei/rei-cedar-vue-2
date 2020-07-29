import CdrIcon from '../CdrIcon';
export default {
  name: 'IconMinusSm',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default}
      <path role="presentation" d="M8 11h8a1 1 0 010 2H8a1 1 0 010-2z"></path>
    </cdr-icon>)
  },
};
