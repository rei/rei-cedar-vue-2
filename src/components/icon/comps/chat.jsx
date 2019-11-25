import CdrIcon from '../CdrIcon';
export default {
  name: 'IconChat',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M21 4a1 1 0 011 1v11a1 1 0 01-1 1h-2.002v2a.999.999 0 01-1.635.771L14 17H3a1 1 0 01-1-1V5a1 1 0 011-1h18zm-1 2H4v9h10.718l2.28 1.879V15H20V6zm-7.5 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-4 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm8 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"></path>
    </cdr-icon>)
  },
};
