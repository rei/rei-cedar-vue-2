import CdrIcon from '../CdrIcon';
export default {
  name: 'IconPrint',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M3 17a1 1 0 01-1-1V9a1 1 0 011-1h4V5a1 1 0 011-1h8a1 1 0 011 1v3h4a1 1 0 011 1v7a1 1 0 01-1 1h-3l.561 1.684A1 1 0 0117.613 20H6.387a1 1 0 01-.948-1.316L6 17H3zm14.333-2H20v-5H4v5h2.667l.105-.316A1 1 0 017.721 14h8.558a1 1 0 01.949.684l.105.316zM8.5 8h7V5.5h-7V8zM7.27 18.5h9.46l-.67-3H7.94l-.67 3zM18 13a1 1 0 110-2 1 1 0 010 2z"></path>
    </cdr-icon>)
  },
};
