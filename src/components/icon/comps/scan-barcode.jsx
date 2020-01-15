import CdrIcon from '../CdrIcon';
export default {
  name: 'IconScanBarcode',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M3 4h2a1 1 0 110 2H4v12h1a1 1 0 010 2H3a1 1 0 01-1-1V5a1 1 0 011-1zm18 0a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 010-2h1V6h-1a1 1 0 010-2h2zM5 7.5h1v9H5v-9zm2 0h1v9H7v-9zm11 0h1v9h-1v-9zm-6 0h2v9h-2v-9zm-3 0h.75v9H9v-9zm5.75 0h.75v9h-.75v-9zm-4.25 0h.75v9h-.75v-9zm5.75 0H17v9h-.75v-9z"></path>
    </cdr-icon>)
  },
};
