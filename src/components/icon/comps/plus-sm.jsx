
import CdrIcon from '../CdrIcon';

export default {
  name: 'IconPlusSm',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M11 11H8c-.55228475 0-1 .4477153-1 1s.44771525 1 1 1h3v3c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-3h3c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-3V8c0-.55228475-.4477153-1-1-1s-1 .44771525-1 1v3z"></path>
    </cdr-icon>)
  },
};
