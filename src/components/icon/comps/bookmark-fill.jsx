
import CdrIcon from '../CdrIcon';

export default {
  name: 'IconBookmarkFill',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1.6.8L12.002 17 5.6 21.8A1 1 0 0 1 4 21V3a1 1 0 0 1 1-1z"></path>
    </cdr-icon>)
  },
};
