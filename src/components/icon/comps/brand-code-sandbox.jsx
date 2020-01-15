import CdrIcon from '../CdrIcon';
export default {
  name: 'IconBrandCodeSandbox',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M12 1.853l9 5.062v10.17l-9 5.062-9-5.062V6.915l9-5.062zM5 9.118v3.409l3 1.58v3.496l3 1.687v-7.172l-6-3zm14 0l-6 3v7.172l3-1.687v-3.487l3-1.587V9.118zm-4.481-3.554L12.006 7 9.478 5.566 6.133 7.448 12 10.382l5.867-2.934-3.348-1.884z"></path>
    </cdr-icon>)
  },
};
