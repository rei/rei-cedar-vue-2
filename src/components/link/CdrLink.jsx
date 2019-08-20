import modifier from 'mixinsdir/modifier';
import space from 'mixinsdir/space';
import cs from 'classnames';
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
      class={cs(
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
