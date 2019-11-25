import CdrIcon from '../CdrIcon';
export default {
  name: 'IconImage',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M20 3a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h16zm-3 10.31l-2.867 1.654a1 1 0 01-.88.058l-.12-.058-1.13-.653L5 18.353V19h14v-4.536l-2-1.155zM19 5H5v11.044l6.5-3.752a1 1 0 01.878-.06l.12.058 1.135.653L16.5 11.29a1 1 0 01.88-.059l.12.059 1.501.866V5zM8.25 7a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"></path>
    </cdr-icon>)
  },
};
