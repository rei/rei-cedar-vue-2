import modifier from 'mixinsdir/modifier';
import s from './styles/CdrCard.scss';

export default {
  name: 'CdrCard',
  mixins: [modifier],
  computed: {
    baseClass() {
      return 'cdr-card';
    },
  },
  data() {
    return {
      style: s,
    };
  },
  render(h) {
    return (<article class={this.modifierClass}>
      {this.$slots.default}
    </article>)
  }
};

