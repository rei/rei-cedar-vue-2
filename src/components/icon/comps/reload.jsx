import CdrIcon from '../CdrIcon';
export default {
  name: 'IconReload',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M8.392 6A7 7 0 115 12a1 1 0 00-2 0 9 9 0 104-7.485v-.519A1 1 0 005 4v2.971A.997.997 0 005.993 8H9a1 1 0 000-2h-.608z"></path>
    </cdr-icon>)
  },
};
