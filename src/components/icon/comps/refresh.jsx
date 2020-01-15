import CdrIcon from '../CdrIcon';
export default {
  name: 'IconRefresh',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M21 12a1 1 0 01-2 0A7 7 0 008.392 6H9a1 1 0 010 2H5.993A.997.997 0 015 6.971V4a1 1 0 012-.004v.52A9 9 0 0121 12zm-5.392 6H15a1 1 0 010-2h3.007A.997.997 0 0119 17.029V20a1 1 0 01-2 .004v-.52A9 9 0 013 12a1 1 0 012 .001 7 7 0 0010.608 6z"></path>
    </cdr-icon>)
  },
};
