
import CdrIcon from 'componentsdir/icon/CdrIcon';

export default {
  name: 'IconGridView',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M4 3h5c.55228475 0 1 .44771525 1 1v5c0 .55228475-.44771525 1-1 1H4c-.55228475 0-1-.44771525-1-1V4c0-.55228475.44771525-1 1-1zm11 0h5c.5522847 0 1 .44771525 1 1v5c0 .55228475-.4477153 1-1 1h-5c-.5522847 0-1-.44771525-1-1V4c0-.55228475.4477153-1 1-1zm0 11h5c.5522847 0 1 .4477153 1 1v5c0 .5522847-.4477153 1-1 1h-5c-.5522847 0-1-.4477153-1-1v-5c0-.5522847.4477153-1 1-1zM4 14h5c.55228475 0 1 .4477153 1 1v5c0 .5522847-.44771525 1-1 1H4c-.55228475 0-1-.4477153-1-1v-5c0-.5522847.44771525-1 1-1z"></path>
    </cdr-icon>)
  },
};
