
import CdrIcon from '../CdrIcon';

export default {
  name: 'IconPlusStroke',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M11 11V8c0-.55228475.4477153-1 1-1s1 .44771525 1 1v3h3c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-3v3c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-3H8c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1h3zm1 11C6.4771525 22 2 17.5228475 2 12S6.4771525 2 12 2s10 4.4771525 10 10-4.4771525 10-10 10zm0-2c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8z"></path>
    </cdr-icon>)
  },
};
