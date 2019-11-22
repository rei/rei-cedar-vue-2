import CdrIcon from '../CdrIcon';
export default {
  name: 'IconHike',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M13.497 10h1.492a1 1 0 010 2h-2a1 1 0 01-.868-.503l-1.815-2.405-.32.899.003.009 3.949 10.675a1 1 0 01-1.892.651l-3.107-8.4-2.994 8.397a1 1 0 01-1.891-.65l4.988-13.99a1 1 0 011.719-.31l.002.002.045.06L13.497 10zm-7.55 2.33a1 1 0 11-1.892-.652l2.002-5.996a1 1 0 111.89.652l-2 5.996zm11.023 8.874a1 1 0 11-1.956-.416l2.98-13.985a1 1 0 111.956.416l-2.98 13.985zM10.499 5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"></path>
    </cdr-icon>)
  },
};
