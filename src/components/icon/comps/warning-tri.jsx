import CdrIcon from '../CdrIcon';
export default {
  name: 'IconWarningTri',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M12.447 3.11a1 1 0 01.447.448l8.002 15.995A1 1 0 0120.002 21H3.998a1 1 0 01-.894-1.447l8.002-15.995a1 1 0 011.341-.447zM12 17a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm.22-9.5h-.47a1 1 0 00-.966.913l-.004.116.191 6.5a1 1 0 00.886.965l.114.006h.058a1 1 0 00.99-.857l.01-.114.19-6.5.001-.029a1 1 0 00-1-1z"></path>
    </cdr-icon>)
  },
};
