
import CdrIcon from 'componentsdir/icon/CdrIcon';

export default {
  name: 'IconImage',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm15 9.155V5H5v11.044l6.5-3.752a1 1 0 0 1 .997-.002l1.136.653L16.5 11.29a1 1 0 0 1 1 0l1.501.866zm0 2.31l-2-1.156-2.867 1.655a1 1 0 0 1-1 0l-1.13-.653L5 18.353V19h14v-4.536zM8.25 9.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"></path>
    </cdr-icon>);
  },
};
