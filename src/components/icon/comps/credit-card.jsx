
import CdrIcon from 'componentsdir/icon/CdrIcon';

export default {
  name: 'IconCreditCard',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm17 4V7H4v2h16zm0 3H4v5h16v-5zm-4 2h3v2h-3v-2zm-3 0h2v2h-2v-2z"></path>
    </cdr-icon>)
  },
};
