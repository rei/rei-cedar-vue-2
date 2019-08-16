
import CdrIcon from 'componentsdir/icon/CdrIcon';

export default {
  name: 'IconExternalLink',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M19 6.42l-8.295 8.287a1 1 0 0 1-1.414-1.415L17.58 5H15a1 1 0 0 1 0-2h5.007a.997.997 0 0 1 .992 1.029V9a1 1 0 0 1-2 .004L19 6.42zm-15.707.873A.997.997 0 0 1 4 7h6a1 1 0 0 1 0 2H5v10h10v-5a1 1 0 0 1 2 0v6a.997.997 0 0 1-1 1H4a.997.997 0 0 1-1-1V8c0-.276.112-.526.293-.707z"></path>
    </cdr-icon>)
  },
};
