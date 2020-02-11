import CdrIcon from '../CdrIcon';
export default {
  name: 'IconFreeProduct',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M14.5 2a3.5 3.5 0 013.163 5.001L21 7a1 1 0 01.993.883L22 8v4a1 1 0 01-.883.993L21 13v8a1 1 0 01-.883.993L20 22H4a1 1 0 01-.993-.883L3 21v-8a1 1 0 01-.993-.883L2 12V8a1 1 0 01.883-.993L3 7l3.337.001a3.5 3.5 0 015.664-3.95A3.48 3.48 0 0114.5 2zM11 13H5v7h6v-7zm8 0h-6v7h6v-7zm-8-4H4v2h7V9zm9 0h-7v2h7V9zM9.5 4a1.5 1.5 0 00-.144 2.993L9.5 7H11V5.5a1.5 1.5 0 00-1.215-1.473l-.14-.02L9.5 4zm5 0l-.144.007A1.5 1.5 0 0013 5.5V7h1.5a1.5 1.5 0 000-3z"></path>
    </cdr-icon>)
  },
};
