import CdrIcon from '../CdrIcon';
export default {
  name: 'IconCalendar',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M18 5h2a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1h2v1a2 2 0 104 0V5h4v1a2 2 0 104 0V5zM4.5 9v10.5h15V9h-15zM7 11.5h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zM8 3a1 1 0 011 1v2a1 1 0 11-2 0V4a1 1 0 011-1zm8 0a1 1 0 011 1v2a1 1 0 01-2 0V4a1 1 0 011-1z"></path>
    </cdr-icon>)
  },
};
