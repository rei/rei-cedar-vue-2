import CdrIcon from '../CdrIcon';
export default {
  name: 'IconHistory',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M9 6.002a1 1 0 110 2H5.993A.997.997 0 015 6.973V4.002a1 1 0 012-.004v.52a9 9 0 11-4 7.484 1 1 0 012-.001 7 7 0 103.392-6H9v.001zm3.5 5.847l2.775 2.775a.78.78 0 01-1.103 1.103l-2.87-2.87a.795.795 0 01-.014-.014.749.749 0 01-.288-.591v-5.5a.75.75 0 011.5 0v5.097z"></path>
    </cdr-icon>)
  },
};
