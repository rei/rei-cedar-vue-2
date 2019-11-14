import CdrIcon from '../CdrIcon';
export default {
  name: 'IconTent',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M7.882 19l3.199-6.395a1 1 0 011.853.036L16.11 19h2.26L11.999 6.243 5.616 19h2.266zm2.232 0h3.765l-1.881-3.765L10.114 19zm10.696.414A1 1 0 0120 21H4a1 1 0 01-.865-1.502L11.063 3.65a1 1 0 011.883.024l7.864 15.74z"></path>
    </cdr-icon>)
  },
};
