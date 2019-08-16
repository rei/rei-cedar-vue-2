import s from './styles/CdrLink.scss';
import modifier from 'mixinsdir/modifier';
import space from 'mixinsdir/space';
import mapClasses from 'mixinsdir/mapClasses';

export default {
  name: 'CdrLink',
  mixins: [
    modifier,
    space,
    mapClasses,
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
  render(h) {
    const Component = this.tag;
    console.log('m', this.modifierClass, 's', this.space, s)
    return (<Component
      class={this.mapClasses(
        [this.modifierClass, 
        this.space], s
      )}
      target={this.target}
      rel={this.computedRel}
      href={this.tag === 'a' ? this.href : null}
      on={this.$listeners}
    >
      {this.$slots.default}
    </Component>);
  }
};
