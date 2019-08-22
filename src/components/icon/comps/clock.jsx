
import { CdrIcon } from 'componentsdir/icon/CdrIcon';

export default {
  name: 'IconClock',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm.5-8.153l2.775 2.775a.78.78 0 0 1-1.103 1.103l-2.87-2.87a.795.795 0 0 1-.014-.014.749.749 0 0 1-.288-.591v-5.5a.75.75 0 1 1 1.5 0v5.097z"></path>
    </cdr-icon>)
  },
};
