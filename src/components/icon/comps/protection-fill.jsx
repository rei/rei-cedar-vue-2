import CdrIcon from '../CdrIcon';
export default {
  name: 'IconProtectionFill',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M11.61 2.08a1 1 0 01.785.001l7.743 3.325a1 1 0 01.594.771c.597 4.011.2 7.365-1.22 10.043-1.437 2.709-3.855 4.623-7.198 5.73a1 1 0 01-.649-.008c-3.345-1.189-5.74-3.098-7.133-5.722-1.374-2.588-1.816-5.927-1.357-10.007a1 1 0 01.603-.809l7.831-3.324zm3.627 5.277l-4.95 6.083-1.52-1.817a1 1 0 00-1.533 1.285l2.227 2.66a.999.999 0 001.565.1l5.743-7.025a1 1 0 10-1.532-1.286z"></path>
    </cdr-icon>)
  },
};
