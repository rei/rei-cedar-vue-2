import s from './styles/CdrLink.scss';
import modifier from 'mixinsdir/modifier';
import space from 'mixinsdir/space';

import cs from 'classnames';

console.log(s);
// import themeable from 'mixinsdir/themeable'; --> TODO: re-add themeClass to class array
/**
 *
 * Cedar 2 component for link.
 *
 * <span class="modifiers">Modifiers</span>
 * {standalone}
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
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
    console.log(this.modifierClass, this.space)
    return (<Component
      class={cs(s[this.modifierClass], s[this.space])}
      target={this.target}
      rel={this.computedRel}
      href={this.tag === 'a' ? this.href : null}
      v-on="$listeners"
    >
      <slot>Link Text</slot>
    </Component>)
  }
};
