import CdrIcon from '../CdrIcon';
export default {
  name: 'IconCouponFill',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M19.998 3a1 1 0 011 1l-.011 7.587a1 1 0 01-.293.705l-8.404 8.414a1 1 0 01-1.411.004l-7.582-7.506a1 1 0 01-.007-1.415l8.402-8.492A1 1 0 0112.403 3h7.595zM16.75 6a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"></path>
    </cdr-icon>)
  },
};
