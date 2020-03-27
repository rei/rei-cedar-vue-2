import clsx from 'clsx';
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
    return (<article class={clsx(this.style[this.baseClass], this.modifierClass)}>
      {this.$slots.default}
    </article>);
  },
};
