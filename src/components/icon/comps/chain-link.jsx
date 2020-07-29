import CdrIcon from '../CdrIcon';
export default {
  name: 'IconChainLink',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default}
      <path role="presentation" d="M5.586 12.762a3.998 3.998 0 013.864-1.036L5.586 15.59a2 2 0 102.828 2.828l3.864-3.864a3.998 3.998 0 01-1.035 3.864l-1.415 1.415a4 4 0 11-5.656-5.657zm10.117-4.47a1 1 0 010 1.415l-5.996 5.996a1 1 0 11-1.414-1.414l5.996-5.996a1 1 0 011.414 0zm4.13-4.12a4 4 0 01.15 5.497l-.15.16-1.415 1.414a3.996 3.996 0 01-3.64 1.088l-.224-.053 3.864-3.864a2 2 0 00-2.7-2.945l-.128.117-3.864 3.864a4 4 0 01.868-3.686l.168-.178 1.414-1.414a4 4 0 015.657 0z"></path>
    </cdr-icon>)
  },
};
