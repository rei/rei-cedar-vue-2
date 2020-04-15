import clsx from 'clsx';
import style from './styles/CdrCard.scss';

export default {
  name: 'CdrCard',
  props: {
    linked: {
      type: Boolean,
      default: false,
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
    linkedClass() {
      return this.linked ? `${this.baseClass}--linked` : null;
    },
  },
  render() {
    return (<article class={clsx(this.style[this.baseClass], this.style[this.linkedClass])}>
      {this.$slots.default}
    </article>);
  },
};
