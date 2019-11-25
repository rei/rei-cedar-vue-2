import CdrIcon from '../CdrIcon';
export default {
  name: 'IconShrink',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M9.002 16.42l-4.295 4.287a1 1 0 01-1.414-1.415L7.583 15h-2.58a1 1 0 010-2h5.006a.997.997 0 01.992 1.029V19a1 1 0 01-2 .004l.001-2.584zM15 7.58l4.296-4.287a1 1 0 011.414 1.414L16.419 9H19a1 1 0 110 2h-5.006A.997.997 0 0113 9.97V5a1 1 0 012-.004V7.58z"></path>
    </cdr-icon>)
  },
};
