import CdrIcon from '../CdrIcon';
export default {
  name: 'IconDay',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default && this.$slots.default()}
      <path role="presentation" d="M12 15a3 3 0 100-6 3 3 0 000 6zm0 2a5 5 0 110-10 5 5 0 010 10zm0-15a1 1 0 011 1v2a1 1 0 01-2 0V3a1 1 0 011-1zm0 16a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm7.071-13.071a1 1 0 010 1.414l-1.414 1.414a1 1 0 11-1.414-1.414l1.414-1.414a1 1 0 011.414 0zM7.757 16.243a1 1 0 010 1.414L6.343 19.07a1 1 0 11-1.414-1.414l1.414-1.414a1 1 0 011.414 0v.001zM22 12a1 1 0 01-1 1h-2a1 1 0 010-2h2a1 1 0 011 1zM6 12a1 1 0 01-1 1H3a1 1 0 010-2h2a1 1 0 011 1zm13.071 7.071a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 111.414-1.414l1.414 1.414a1 1 0 010 1.414zM7.757 7.757a1 1 0 01-1.414 0L4.93 6.343A1 1 0 016.343 4.93l1.414 1.414a1 1 0 010 1.414v-.001z"></path>
    </cdr-icon>)
  },
};
