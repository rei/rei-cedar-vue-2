
import CdrIcon from '../CdrIcon';

export default {
  name: 'IconMoreFunctions',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M12 7c-.8284271 0-1.5-.67157288-1.5-1.5S11.1715729 4 12 4s1.5.67157288 1.5 1.5S12.8284271 7 12 7zm0 6.5c-.8284271 0-1.5-.6715729-1.5-1.5s.6715729-1.5 1.5-1.5 1.5.6715729 1.5 1.5-.6715729 1.5-1.5 1.5zm0 6.5c-.8284271 0-1.5-.6715729-1.5-1.5S11.1715729 17 12 17s1.5.6715729 1.5 1.5S12.8284271 20 12 20z"></path>
    </cdr-icon>)
  },
};
