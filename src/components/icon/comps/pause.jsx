
import CdrIcon from '../CdrIcon';

export default {
  name: 'IconPause',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M9 8.02660409h1.5c.2761424 0 .5.22385763.5.5v6.94679181c0 .2761424-.2238576.5-.5.5H9c-.27614237 0-.5-.2238576-.5-.5V8.52660409c0-.27614237.22385763-.5.5-.5zm4.5 0H15c.2761424 0 .5.22385763.5.5v6.94679181c0 .2761424-.2238576.5-.5.5h-1.5c-.2761424 0-.5-.2238576-.5-.5V8.52660409c0-.27614237.2238576-.5.5-.5z"></path>
    </cdr-icon>)
  },
};
