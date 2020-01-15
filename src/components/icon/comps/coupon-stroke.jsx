import CdrIcon from '../CdrIcon';
export default {
  name: 'IconCouponStroke',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M19.998 3a1 1 0 011 1l-.011 7.587a1 1 0 01-.293.705l-8.404 8.414a1 1 0 01-1.411.004l-7.582-7.506a1 1 0 01-.007-1.415l8.402-8.492A1 1 0 0112.403 3h7.595zm-1.002 2h-6.175l-7.408 7.485 6.165 6.103 7.41-7.417L18.995 5zM16.75 6a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"></path>
    </cdr-icon>)
  },
};
