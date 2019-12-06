import clsx from 'clsx';
import modifier from '../../mixins/modifier';
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
    return (<article class={clsx(this.style[this.baseClass], this.modifierClass)}>
      {this.$slots.default}
    </article>);
  },
};
