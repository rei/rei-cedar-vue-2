import CdrIcon from '../CdrIcon';
export default {
  name: 'IconBrandTiktok',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default}
      <path fill-rule="evenodd" d="M16.102 2C16.448 4.838 18.11 6.53 21 6.71v3.193c-1.674.156-3.141-.366-4.848-1.35v5.97c0 7.585-8.675 9.955-12.163 4.519-2.242-3.499-.87-9.637 6.32-9.883v3.366c-.547.084-1.132.216-1.668.39-1.599.516-2.49 1.585-2.254 3.186.451 3.052 6.246 3.899 6.246-2.148V2.006h3.469V2z" clip-rule="evenodd"></path>
    </cdr-icon>)
  },
};
