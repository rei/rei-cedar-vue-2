import CdrIcon from '../CdrIcon';
export default {
  name: 'IconZoomIn',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M10.5 3a7.5 7.5 0 015.963 12.05l4.247 4.242a1 1 0 01-1.415 1.414l-4.246-4.243A7.5 7.5 0 1110.5 3zm0 2a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 1.5a.75.75 0 01.75.75v2.5h2.5a.75.75 0 110 1.5h-2.5v2.5a.75.75 0 11-1.5 0v-2.5h-2.5a.75.75 0 110-1.5h2.5v-2.5a.75.75 0 01.75-.75z"></path>
    </cdr-icon>)
  },
};
