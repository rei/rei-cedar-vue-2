import CdrIcon from '../CdrIcon';
export default {
  name: 'IconAtv',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M12.341 14h-.682A5.998 5.998 0 006 10a5.972 5.972 0 00-3 .803V9.007A1 1 0 014.42 8.1l7.588 1.487 2.48-1.461L13.475 6H12a1 1 0 110-2h2a1 1 0 01.939.655l1.066 2.348 3.451 2.107A1 1 0 0120 10v.341A5.99 5.99 0 0018 10a5.987 5.987 0 00-5.659 4zM6 20a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4zm12 2a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"></path>
    </cdr-icon>)
  },
};
