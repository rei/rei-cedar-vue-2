import CdrIcon from '../CdrIcon';
export default {
  name: 'IconPlay',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M9.737 16.195a.5.5 0 01-.737-.44v-7.5a.5.5 0 01.737-.44l6.999 3.745a.5.5 0 010 .881l-6.999 3.754z"></path>
    </cdr-icon>)
  },
};
