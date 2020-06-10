import style from './styles/CdrCard.scss';

export default {
  name: 'CdrCard',
  data() {
    return {
      style,
    };
  },
  props: {
    tag: {
      type: String,
      default: 'article',
    },
  },
  computed: {
    baseClass() {
      return 'cdr-card';
    },
  },
  render() {
    const Component = this.tag;
    return (<Component class={this.style[this.baseClass]}>
      {this.$slots.default}
    </Component>);
  },
};
