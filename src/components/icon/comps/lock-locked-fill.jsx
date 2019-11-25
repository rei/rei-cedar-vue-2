import CdrIcon from '../CdrIcon';
export default {
  name: 'IconLockLockedFill',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M12 2c1.997 0 3.669 1.077 4.559 2.907.156.32.278.736.379 1.262l.048.272.014.165V10h2a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V11a1 1 0 011-1h2V6.5l.02-.198c.133-.66.283-1.16.469-1.526C8.386 3.016 10.026 2 12 2zm0 11a2 2 0 00-1 3.732V19h2l.001-2.268A2 2 0 0012 13zm0-9c-1.218 0-2.172.592-2.73 1.684-.069.136-.149.386-.23.735L9 6.602V10h6V6.69a4.675 4.675 0 00-.206-.831l-.034-.077C14.2 4.63 13.22 4 12 4z"></path>
    </cdr-icon>)
  },
};
