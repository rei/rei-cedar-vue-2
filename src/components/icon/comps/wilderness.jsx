import CdrIcon from '../CdrIcon';
export default {
  name: 'IconWilderness',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M12.707 2.293A.997.997 0 0113 3v1a3 3 0 003 3h1a1 1 0 010 2h-1a4.978 4.978 0 01-3-1 3 3 0 003 3h2a1 1 0 110 2h-2a4.978 4.978 0 01-3-1 3 3 0 003 3h3a1 1 0 110 2h-3a4.978 4.978 0 01-3-1v5a1 1 0 01-2 0v-5c-.836.628-1.874 1-3 1H5a1 1 0 010-2h3a3 3 0 003-3c-.836.628-1.874 1-3 1H6a1 1 0 010-2h2a3 3 0 003-3c-.836.628-1.874 1-3 1H7a1 1 0 110-2h1a3 3 0 003-3V3a1 1 0 011.707-.707z"></path>
    </cdr-icon>)
  },
};
