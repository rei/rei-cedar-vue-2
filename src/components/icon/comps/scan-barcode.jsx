
import CdrIcon from 'componentsdir/icon/CdrIcon';

export default {
  name: 'IconScanBarcode',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M3 4h2c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1H4v12h1c.55228475 0 1 .4477153 1 1s-.44771525 1-1 1H3c-.55228475 0-1-.4477153-1-1V5c0-.55228475.44771525-1 1-1zm18 0c.5522847 0 1 .44771525 1 1v14c0 .5522847-.4477153 1-1 1h-2c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1h1V6h-1c-.5522847 0-1-.44771525-1-1s.4477153-1 1-1h2zM5 7.5h1v9H5v-9zm2 0h1v9H7v-9zm11 0h1v9h-1v-9zm-6 0h2v9h-2v-9zm-3 0h.75v9H9v-9zm5.75 0h.75v9h-.75v-9zm-4.25 0h.75v9h-.75v-9zm5.75 0H17v9h-.75v-9z"></path>
    </cdr-icon>);
  },
};
