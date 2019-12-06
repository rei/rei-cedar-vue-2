import clsx from 'clsx';
import modifier from '../../mixins/modifier';
import space from '../../mixins/space';

/**
 * Cedar 2 component for text styles
 * Accepts typography modifiers.
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrText',
  mixins: [modifier, space],
  props: {
    /** Any valid HTML tag */
    tag: {
      type: String,
      default: 'p',
    },
  },
  computed: {
    baseClass() {
      return 'cdr-text';
    },
  },
  render() {
    const Component = this.tag;
    return (<Component class={clsx(this.baseClass, this.modifierClass, this.space)}>
      {this.$slots.default}
    </Component>);
  },
};
