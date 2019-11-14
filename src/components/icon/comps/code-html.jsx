import CdrIcon from '../CdrIcon';
export default {
  name: 'IconCodeHtml',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M4.414 12l2.293 2.293a1 1 0 11-1.414 1.414l-3-2.999a1 1 0 010-1.414l3-3.001a1 1 0 111.414 1.414l-2.293 2.294zm12.879-2.293a1 1 0 111.414-1.414l3 3a1 1 0 010 1.415l-3 3a1 1 0 11-1.414-1.415L19.586 12l-2.293-2.294zm-4.255-4.982a1 1 0 111.924.55l-4 14a1 1 0 11-1.924-.55l4-14z"></path>
    </cdr-icon>)
  },
};
