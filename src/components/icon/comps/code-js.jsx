import CdrIcon from '../CdrIcon';
export default {
  name: 'IconCodeJs',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M17 9V6a1 1 0 00-1-1 1 1 0 010-2 3 3 0 013 3v3a2 2 0 002 2 1 1 0 010 2 2 2 0 00-2 2v3a3 3 0 01-3 3 1 1 0 010-2 1 1 0 001-1v-3a3.99 3.99 0 011.354-3A3.99 3.99 0 0117 9zM7 9a3.99 3.99 0 01-1.354 3A3.99 3.99 0 017 15v3a1 1 0 001 1 1 1 0 010 2 3 3 0 01-3-3v-3a2 2 0 00-2-2 1 1 0 010-2 2 2 0 002-2V6a3 3 0 013-3 1 1 0 110 2 1 1 0 00-1 1v3zm2 8a1 1 0 110-2 1 1 0 010 2zm3 0a1 1 0 110-2 1 1 0 010 2zm3 0a1 1 0 110-2 1 1 0 010 2z"></path>
    </cdr-icon>)
  },
};
