import CdrIcon from '../CdrIcon';
export default {
  name: 'IconShippingPrep',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default}
      <path fill-rule="evenodd" d="M12 4.25a7.96 7.96 0 00-3.97 1.053 1 1 0 01-.558 1.554l-2.526.66A1 1 0 013.768 6.17l.987-2.416a1 1 0 011.678-.28l.261.297A9.958 9.958 0 0112 2.25c5.523 0 10 4.477 10 10a1 1 0 11-2 0 8 8 0 00-8-8zm-8 8a1 1 0 10-2 0c0 5.523 4.477 10 10 10 2.01 0 3.883-.594 5.451-1.615l.165.195a1 1 0 001.683-.252l1.028-2.4a1 1 0 00-1.156-1.365l-2.536.617a1 1 0 00-.527 1.617l.038.046A8 8 0 014 12.25zm2-2.382a1 1 0 01.553-.894l5-2.5a1 1 0 01.894 0l5 2.5a1 1 0 01.553.894v4.764a1 1 0 01-.553.894l-5 2.5a1 1 0 01-.894 0l-5-2.5A1 1 0 016 14.632V9.868zm2 1.5v2.646l3 1.5v-2.646l-3-1.5zm8 2.646l-3 1.5v-2.646l3-1.5v2.646zm-1.354-4.205L12 8.486 9.354 9.81 12 11.132l2.646-1.323z" clip-rule="evenodd"></path>
    </cdr-icon>)
  },
};
