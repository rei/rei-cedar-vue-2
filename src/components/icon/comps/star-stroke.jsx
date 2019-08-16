
import CdrIcon from 'componentsdir/icon/CdrIcon';

export default {
  name: 'IconStarStroke',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M5.69 22.067l1.669-7.552-5.535-5.048 7.298-.66L12 1.662l2.878 7.147 7.298.659-5.535 5.048 1.669 7.552L12 18.061l-6.31 4.006zm1.496-2.134L12 16.877l4.814 3.056-1.274-5.767 4.284-3.907-5.645-.51L12 4.339l-2.179 5.41-5.645.51 4.284 3.907-1.274 5.767z"></path>
    </cdr-icon>)
  },
};
