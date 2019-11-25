import CdrIcon from '../CdrIcon';
export default {
  name: 'IconCopy',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M19 2a1 1 0 011 1v15a1 1 0 01-1 1h-2v2a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3a1 1 0 011-1h11zM7 7H6v13h9v-1H8a1 1 0 01-1-1V7zm11-3H9v13h9V4zm-4 6v1h-4v-1h4zm3-2v1h-7V8h7zm0-2v1h-7V6h7z"></path>
    </cdr-icon>)
  },
};
