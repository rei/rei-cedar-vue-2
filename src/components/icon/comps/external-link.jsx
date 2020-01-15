import CdrIcon from '../CdrIcon';
export default {
  name: 'IconExternalLink',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M10 7a1 1 0 010 2H5v10h10v-5a1 1 0 012 0v6a.997.997 0 01-1 1H4a.997.997 0 01-1-1V8a.997.997 0 011-1zm10.007-4a.997.997 0 01.992 1.029V9a1 1 0 01-2 .004L19 6.42l-8.295 8.287a1 1 0 01-1.414-1.415L17.58 5H15a1 1 0 010-2z"></path>
    </cdr-icon>)
  },
};
