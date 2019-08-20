import modifier from 'mixinsdir/modifier';
import style from './styles/CdrCard.scss';

export default {
  name: 'CdrCard',
  mixins: [modifier],
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
    return (<article class={this.modifierClass}>
      {this.$slots.default}
    </article>);
  },
};
