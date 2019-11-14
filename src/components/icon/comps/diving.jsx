import CdrIcon from '../CdrIcon';
export default {
  name: 'IconDiving',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M14 12a1.3 1.3 0 011.265 1c.348.598.995 1 1.735 1a2 2 0 100-4h-6a2 2 0 101.732 3c.138-.573.653-1 1.268-1zm-3-4h6a4 4 0 11-3 6.646A4.002 4.002 0 017.126 13H5v3.5A2.5 2.5 0 007.5 19H12a1 1 0 012 0v1a1 1 0 01-1 1H7.5A4.5 4.5 0 013 16.5V4a1 1 0 112 0v7h2.126C7.57 9.275 9.136 8 11 8z"></path>
    </cdr-icon>)
  },
};
