import CdrIcon from '../CdrIcon';
export default {
  name: 'IconPhotography',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M3 7h3l1.703-2.555A1 1 0 018.535 4h6.933a1 1 0 01.833.446L18 7h3a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1zm1 11h16V9h-2.534a1 1 0 01-.832-.446L14.933 6H9.07L7.367 8.555A1 1 0 016.535 9H4v9zm8 0a5 5 0 110-10 5 5 0 010 10zm0-2a3 3 0 100-6 3 3 0 000 6z"></path>
    </cdr-icon>)
  },
};
