import CdrIcon from '../CdrIcon';
export default {
  name: 'IconMail',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M21 5a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1h18zm-1 3.536l-7.483 4.32a1 1 0 01-1.017.01L4 8.536V17h16V8.536zM18.658 7H5.34L12 10.845 18.658 7z"></path>
    </cdr-icon>)
  },
};
