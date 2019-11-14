import CdrIcon from '../CdrIcon';
export default {
  name: 'IconQuestionStroke',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 11.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 6a3.5 3.5 0 013.5 3.5c0 1.796-1.572 2.586-1.805 2.734A1.507 1.507 0 0013 13.5a1 1 0 11-2 .007c0-.96.381-1.626 1-2.257.619-.631 1.5-.934 1.5-1.75a1.5 1.5 0 00-3 0 1 1 0 01-2 0A3.5 3.5 0 0112 6z"></path>
    </cdr-icon>)
  },
};
