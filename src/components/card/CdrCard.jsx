import style from './styles/CdrCard.scss';

export default {
  name: 'CdrCard',
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
    return (<article class={this.style[this.baseClass]}>
      {this.$slots.default}
    </article>);
  },
};
