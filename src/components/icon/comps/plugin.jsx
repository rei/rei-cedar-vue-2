import CdrIcon from '../CdrIcon';
export default {
  name: 'IconPlugin',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M16.364 3A10 10 0 0122 12a10 10 0 01-5.636 9H7.636A10 10 0 012 12a10 10 0 015.636-9h8.728zM8.123 5A7.998 7.998 0 004 12a7.998 7.998 0 004.123 7h7.754A7.998 7.998 0 0020 12a7.998 7.998 0 00-4.123-7H8.123zM8 8a1 1 0 112 0v4a1 1 0 01-2 0V8zm6 0a1 1 0 012 0v4a1 1 0 01-2 0V8zm-3 7a1 1 0 012 0v1a1 1 0 01-2 0v-1z"></path>
    </cdr-icon>)
  },
};
