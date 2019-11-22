import CdrIcon from '../CdrIcon';
export default {
  name: 'IconElevation',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M9.038 15.274L8.003 12.7 5.483 19H18.55L14.01 6.907l-3.034 8.312a1 1 0 01-1.938.055zM20 21H4a1 1 0 01-.884-1.467l3.92-9.802a1 1 0 011.92-.024l.998 2.482 3.072-8.415a1 1 0 011.954.025l5.912 15.748A1 1 0 0120 21z"></path>
    </cdr-icon>)
  },
};
