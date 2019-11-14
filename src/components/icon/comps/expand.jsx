import CdrIcon from '../CdrIcon';
export default {
  name: 'IconExpand',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M19.002 6.42l-4.295 4.287a1 1 0 01-1.414-1.415L17.583 5h-2.58a1 1 0 110-2h5.006a.997.997 0 01.992 1.029V9a1 1 0 01-2 .004l.001-2.584zM5 17.58l4.296-4.287a1 1 0 011.414 1.414L6.419 19H9a1 1 0 110 2H3.993A.997.997 0 013 19.97V15a1 1 0 012-.004v2.584z"></path>
    </cdr-icon>)
  },
};
