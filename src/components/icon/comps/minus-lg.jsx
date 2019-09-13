
import CdrIcon from '../CdrIcon';

export default {
  name: 'IconMinusLg',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M6 11h12c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1H6c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1z"></path>
    </cdr-icon>)
  },
};
