import CdrIcon from '../CdrIcon';
export default {
  name: 'IconRun',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default}
      <path role="presentation" d="M15.852 18.001l4.14.007c.03-.44-.014-1.024-.32-1.545-.405-.685-1.177-1.208-2.354-1.444-.018-.003-.032-.014-.049-.018h-1.802a1 1 0 010-2h.948l-.123-1h-2.247a1 1 0 010-2h2.064l-.043-.425c-1.449-.37-2.686-.922-3.896-2.757l-2.852 3.715 6.534 7.467zm6.14 0l.008.004v.996a1 1 0 01-1.043 1 1.012 1.012 0 01-.132.008l-5.43-.01a.996.996 0 01-.755-.344l-7.399-8.427a1 1 0 01-.038-1.264l4.301-5.572a.999.999 0 011.692.17c1.21 2.475 2.06 2.764 3.923 3.214l.113.026c.416.1.721.454.76.88l.423 4.613c1.388.412 2.392 1.142 2.993 2.176.51.878.614 1.805.585 2.53h-.001zM3 18h7.995l1.739 2H3a1 1 0 010-2zm7.081-.992H3a1 1 0 010-2h5.342l1.74 2h-.001zm-2.614-2.99H3a1 1 0 010-2h2.728l1.739 2z"></path>
    </cdr-icon>)
  },
};
