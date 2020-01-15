import CdrIcon from '../CdrIcon';
export default {
  name: 'IconXLg',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M13.415 12.006l5.295-5.292a1 1 0 00-1.414-1.415L12 10.591 6.71 5.296A1 1 0 005.295 6.71l5.292 5.295-5.295 5.292a1 1 0 101.414 1.414l5.295-5.292 5.292 5.295a1 1 0 001.414-1.414l-5.292-5.294z"></path>
    </cdr-icon>)
  },
};
