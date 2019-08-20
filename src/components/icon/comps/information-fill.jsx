
import CdrIcon from 'componentsdir/icon/CdrIcon';

export default {
  name: 'IconInformationFill',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M12 22C6.4771525 22 2 17.5228475 2 12S6.4771525 2 12 2s10 4.4771525 10 10-4.4771525 10-10 10zm-1-6c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h2c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1v-5c0-.2761424-.1119288-.5261424-.2928932-.7071068C12.5261424 10.1119288 12.2761424 10 12 10h-1c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1v4zm1-7.5c.6903559 0 1.25-.55964406 1.25-1.25S12.6903559 6 12 6s-1.25.55964406-1.25 1.25S11.3096441 8.5 12 8.5z"></path>
    </cdr-icon>);
  },
};
