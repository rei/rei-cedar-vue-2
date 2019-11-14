import CdrIcon from '../CdrIcon';
export default {
  name: 'IconNight',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M12 3a1 1 0 01.34 1.94C10.985 5.579 10 7.3 10 9a5 5 0 005 5c1.74 0 3.247-.837 4.049-2.309A1 1 0 0121 12v.567l-.015.433-.002.067A9.5 9.5 0 1111.391 3H12zm6.564 12.026a7 7 0 01-9.59-9.59 7.5 7.5 0 109.59 9.59z"></path>
    </cdr-icon>)
  },
};
