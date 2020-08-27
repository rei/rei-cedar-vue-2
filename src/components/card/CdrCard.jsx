import style from './styles/CdrCard.scss';

export default {
  name: 'CdrCard',
  props: {
    tag: {
      type: String,
      default: 'article',
    },
  },
  data() {
    return {
      style,
    };
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
