
import CdrIcon from '../CdrIcon';

export default {
  name: 'IconMail',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M5.34 7L12 10.845 18.66 7H5.34zM20 8.536l-7.483 4.32a1 1 0 0 1-1.017.01L4 8.536V17h16V8.536zM3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"></path>
    </cdr-icon>)
  },
};
