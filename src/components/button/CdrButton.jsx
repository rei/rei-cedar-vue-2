import clsx from 'clsx';
import modifier from '../../mixins/modifier';
import fullWidth from '../../mixins/fullWidth';
import size from '../../mixins/size';
import space from '../../mixins/space';
import style from './styles/CdrButton.scss';

export default {
  name: 'CdrButton',
  mixins: [modifier, size, space, fullWidth],
  props: {
    /**
     * Controls render as button or anchor. {button, a}
     */
    tag: {
      type: String,
      default: 'button',
      validator: value => (['button', 'a'].indexOf(value) >= 0) || false,
    },
    /**
     * Sets the button type. {button, submit, reset}
     */
    type: {
      type: String,
      default: 'button',
      validator: value => (['button', 'submit', 'reset'].indexOf(value) >= 0) || false,
    },
    /**
     * Renders an icon-only button. Default slot is disabled. Overrides size and responsiveSize props.
     */
    iconOnly: {
      type: Boolean,
      default: false,
    },
    /**
     * Renders an icon-only button with a light fill color for use on dark backgrounds.
     * iconOnly must be true.
     */
    onDark: {
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
      return 'cdr-button';
    },
    defaultClass() {
      return this.modifyClassName(this.baseClass, 'primary');
    },
    buttonSizeClass() {
      return !this.iconOnly ? this.sizeClass : null;
    },
    iconClass() {
      const classes = [];

      if (this.$slots.icon && this.$slots.default) {
        /* only add class for buttons with text + icon */
        classes.push(this.modifyClassName(this.baseClass, 'has-icon'));
      }

      if (this.iconOnly) {
        classes.push(this.modifyClassName(this.baseClass, 'icon-only'));

        if (this.onDark) {
          classes.push(this.modifyClassName(this.baseClass, 'on-dark'));
        }
      }
      return classes.join(' ');
    },
  },
  render() {
    const Component = this.tag;
    return (<Component
      class={clsx(this.defaultClass,
        this.modifierClass,
        this.buttonSizeClass,
        this.fullWidthClass,
        this.iconClass,
        this.space)}
      type={this.tag === 'button' ? this.type : null}
      {...{ on: this.$listeners }}
    >
      {this.$slots.icon}
      {this.$slots.default}
    </Component>);
  },
};
