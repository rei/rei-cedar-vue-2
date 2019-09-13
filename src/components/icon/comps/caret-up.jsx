
import CdrIcon from '../CdrIcon';

export default {
  name: 'IconCaretUp',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M12 8a.997.997 0 0 0-.702.288l-5.005 5.005a1 1 0 0 0 1.414 1.414L12 10.415l4.295 4.295a1 1 0 0 0 1.412-1.417l-4.98-4.98A.997.997 0 0 0 12 8z"></path>
    </cdr-icon>)
  },
};
