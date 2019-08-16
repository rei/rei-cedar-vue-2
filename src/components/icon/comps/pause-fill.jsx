
import CdrIcon from 'componentsdir/icon/CdrIcon';

export default {
  name: 'IconPauseFill',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM9 8.027a.5.5 0 0 0-.5.5v6.946a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5V8.527a.5.5 0 0 0-.5-.5H9zm4.5 0a.5.5 0 0 0-.5.5v6.946a.5.5 0 0 0 .5.5H15a.5.5 0 0 0 .5-.5V8.527a.5.5 0 0 0-.5-.5h-1.5z"></path>
    </cdr-icon>)
  },
};
