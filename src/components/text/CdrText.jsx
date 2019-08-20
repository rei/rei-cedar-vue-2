import modifier from 'mixinsdir/modifier';
import space from 'mixinsdir/space';
import cs from 'classnames';

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
    return (<Component class={cs(this.modifierClass, this.space)}>
      {this.$slots.default}
    </Component>);
  },
};
