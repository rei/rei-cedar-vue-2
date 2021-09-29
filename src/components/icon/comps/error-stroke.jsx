import CdrIcon from '../CdrIcon';
export default {
  name: 'IconErrorStroke',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default}
      <g><path role="presentation" d="M15.293 16.707a1 1 0 001.414-1.414L9.121 7.707a1 1 0 10-1.414 1.414l7.586 7.586z"></path><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"></path></g>
    </cdr-icon>)
  },
};
