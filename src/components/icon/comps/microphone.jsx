import CdrIcon from '../CdrIcon';
export default {
  name: 'IconMicrophone',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M17 11v-1a1 1 0 012 0v1a7.002 7.002 0 01-6 6.93V21a1 1 0 01-2 0v-3.07A7.002 7.002 0 015 11v-1a1 1 0 112 0v1a5 5 0 0010 0zM8 6a4 4 0 118 0v5a4 4 0 11-8 0V6z"></path>
    </cdr-icon>)
  },
};
