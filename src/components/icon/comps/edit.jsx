import CdrIcon from '../CdrIcon';
export default {
  name: 'IconEdit',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M18.196 3.59l2.174 2.188c.74.745.78 1.93.117 2.72l-.124.136-11.4 11.359-4.741 1.004a1.054 1.054 0 01-1.22-1.092l.012-.122.944-4.827L15.37 3.583a1.993 1.993 0 012.825.007zm-4.488 4.484l-7.905 7.878-.54 2.765 2.71-.575 7.91-7.881-2.175-2.187zm3.072-3.06l-1.649 1.643 2.176 2.186 1.647-1.64-2.174-2.188z"></path>
    </cdr-icon>)
  },
};
