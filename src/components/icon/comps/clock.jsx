import CdrIcon from '../CdrIcon';
export default {
  name: 'IconClock',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm-.25 2a.75.75 0 01.75.75v5.097l2.775 2.775a.78.78 0 01-1.103 1.103l-2.884-2.884A.749.749 0 0111 12.25v-5.5a.75.75 0 01.75-.75z"></path>
    </cdr-icon>)
  },
};
