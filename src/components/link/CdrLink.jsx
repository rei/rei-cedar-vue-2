import clsx from 'clsx';
import modifier from '../../mixins/modifier';
import space from '../../mixins/space';
import style from './styles/CdrLink.scss';

export default {
  name: 'CdrLink',
  mixins: [
    modifier,
    space,
  ],
  props: {
    tag: {
      type: String,
      default: 'a',
    },
    href: {
      type: String,
      default: '#',
    },
    /** @ignore */
    target: String,
    /** @ignore */
    rel: String,
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-link';
    },
    computedRel() {
      if (this.target === '_blank') {
        return this.rel || 'noopener noreferrer';
      }
      return this.rel;
    },
  },
  render() {
    const Component = this.tag;
    return (<Component
      class={clsx(
        this.style[this.baseClass],
        this.modifierClass,
        this.space,
      )}
      target={this.target}
      rel={this.computedRel}
      href={this.tag === 'a' ? this.href : null}
      {...{ on: this.$listeners }}
    >
      {this.$slots.default}
    </Component>);
  },
};
