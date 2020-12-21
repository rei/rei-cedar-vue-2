import clsx from 'clsx';
import modifier from '../../mixins/modifier';
import fullWidth from '../../mixins/fullWidth';
import size from '../../mixins/size';
import style from './styles/CdrButton.scss';

export default {
  name: 'CdrButton',
  mixins: [modifier, size, fullWidth],
  props: {
    /**
     * Controls render as button or anchor. {button, a}
     */
    tag: {
      type: String,
      default: 'button',
      validator: (value) => (['button', 'a'].indexOf(value) >= 0) || false,
    },
    /**
     * Sets the button type. {button, submit, reset}
     */
    type: {
      type: String,
      default: 'button',
      validator: (value) => (['button', 'submit', 'reset'].indexOf(value) >= 0) || false,
    },
    /**
     * Increases box-shadow around button to enhance contrast against background
     */
    elevated: {
      type: Boolean,
      default: false,
    },
    /**
     * Renders an icon-only button. Default slot is disabled. Overrides size and responsiveSize props.
     */
    iconOnly: {
      type: Boolean,
      default: false,
    },
    /**
     * Used in conjunction with `icon-only`, renders a border and background around the icon button
     */
    withBackground: {
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
      return this.modifier ? undefined : this.modifyClassName(this.baseClass, 'primary');
    },
    buttonSizeClass() {
      return !this.iconOnly ? this.sizeClass : this.style[`cdr-button--icon-only-${this.size}`];
    },
    iconClass() {
      const classes = [];

      if ((this.$slots['icon-left'] || this.$slots.icon) && this.$slots.default) {
        /* only add class for buttons with text + icon on left */
        classes.push(this.modifyClassName(this.baseClass, 'has-icon-left'));
      }

      if (this.$slots['icon-right'] && this.$slots.default) {
        /* only add class for buttons with text + icon on right */
        classes.push(this.modifyClassName(this.baseClass, 'has-icon-right'));
      }

      if (this.elevated) {
        classes.push(this.modifyClassName(this.baseClass, 'elevated'));
      }

      if (this.iconOnly) {
        classes.push(this.modifyClassName(this.baseClass, 'icon-only'));
      }

      if (this.iconOnly && this.withBackground) {
        classes.push(this.modifyClassName(this.baseClass, 'with-background'));
      }

      return classes.join(' ');
    },
  },
  render() {
    const Component = this.tag;
    return (<Component
      class={clsx(
        this.style[this.baseClass],
        this.defaultClass,
        this.modifierClass,
        this.buttonSizeClass,
        this.fullWidthClass,
        this.iconClass,
      )}
      type={this.tag === 'button' ? this.type : null}
      {...{ on: this.$listeners }}
    >
      {this.$slots['icon-left'] || this.$slots.icon}
      {this.$slots.default}
      {this.$slots['icon-right']}
    </Component>);
  },
};
