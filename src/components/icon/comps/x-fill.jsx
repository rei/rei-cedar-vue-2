import CdrIcon from '../CdrIcon';
export default {
  name: 'IconXFill',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM7.293 7.296a1 1 0 000 1.414l3.285 3.295-3.285 3.288a1 1 0 001.414 1.415l3.285-3.289 3.297 3.289a1 1 0 001.414-1.415l-3.297-3.287 3.297-3.296a1 1 0 10-1.414-1.414l-3.297 3.295-3.285-3.295a1 1 0 00-1.414 0z"></path>
    </cdr-icon>)
  },
};
