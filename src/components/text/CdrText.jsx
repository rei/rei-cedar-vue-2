import style from './styles/CdrText.scss';

/**
 * Cedar 2 component for text styles
 * Accepts typography modifiers.
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrText',
  props: {
    /** Any valid HTML tag */
    tag: {
      type: String,
      default: 'p',
    },
  },
  data() {
    return {
      s: style, // named `s` not `style` so that modifierClass works for text utils
    };
  },
  computed: {
    baseClass() {
      return 'cdr-text';
    },
  },
  render() {
    const Component = this.tag;
    return (<Component class={this.s[this.baseClass]}>
      {this.$slots.default}
    </Component>);
  },
};
