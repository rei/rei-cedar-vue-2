import CdrIcon from '../CdrIcon';
export default {
  name: 'IconStarStroke',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M5.866 22.405l1.669-7.552L2 9.805l7.298-.66L12.176 2l2.878 7.147 7.298.659-5.535 5.048 1.669 7.552-6.31-4.007-6.31 4.006zm1.496-2.134l4.814-3.056 4.814 3.056-1.274-5.767L20 10.597l-5.645-.51-2.179-5.41-2.179 5.41-5.645.51 4.284 3.907-1.274 5.767z"></path>
    </cdr-icon>)
  },
};
