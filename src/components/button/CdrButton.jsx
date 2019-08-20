import modifier from 'mixinsdir/modifier';
import size from 'mixinsdir/size';
import space from 'mixinsdir/space';
import cs from 'classnames';
import style from './styles/CdrButton.scss';

export default {
  name: 'CdrButton',
  mixins: [modifier, size, space],
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
     * Sets width to be 100%.
    */
    fullWidth: {
      type: Boolean,
      default: false,
      validator: value => typeof value === 'boolean',
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
    fullWidthClass() {
      return this.fullWidth && !this.iconOnly
        ? this.modifyClassName(this.baseClass, 'full-width') : null;
    },
  },
  render() {
    const Component = this.tag;
    return (<Component
      class={cs(this.defaultClass,
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
