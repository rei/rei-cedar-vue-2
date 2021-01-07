<template>
  <component
    :is="tag"
    :class="componentClass"
    :type="type"
  >
    <slot name="icon-left"/>
    <slot/>
    <slot name="icon-right"/>
  </component>
</template>

<!-- NOTE: REMOVED icon slot. use icon-left -->
<script lang="ts">
import { defineComponent, computed } from 'vue';
import clsx from 'clsx';
import fullWidth from '../../mixins/fullWidth';
import propValidator from '../../utils/propValidator';
import style from './styles/CdrButton.scss';

export default defineComponent({
  name: 'CdrButton',
  props: {
    /**
     * Controls render as button or anchor. {button, a}
     */
    tag: {
      type: String,
      default: 'button',
      validator: (value) => propValidator(value, ['button', 'a']),
    },
    /**
     * Sets the button type. {button, submit, reset}
     */
    type: {
      type: String,
      default: 'button',
      validator: (value) => propValidator(value, ['button', 'submit', 'reset']),
    },
    /**
     * Sets the button style
     */
    modifier: {
      type: String,
      default: 'primary',
      validator: (value) => propValidator(value, ['primary', 'secondary', 'sale', 'dark']),
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => propValidator(
        value,
        ['small', 'medium', 'large'],
      ),
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
  // data() {
  //   return {
  //     style,
  //   };
  // },
  // computed: {

  //   iconClass() {
  //     const classes = [];
  //
  //     if ((this.$slots['icon-left'] || this.$slots.icon) && this.$slots.default) {
  //       /* only add class for buttons with text + icon on left */
  //       classes.push(this.modifyClassName(this.baseClass, 'has-icon-left'));
  //     }
  //
  //     if (this.$slots['icon-right'] && this.$slots.default) {
  //       /* only add class for buttons with text + icon on right */
  //       classes.push(this.modifyClassName(this.baseClass, 'has-icon-right'));
  //     }
  //
  //     if (this.elevated) {
  //       classes.push(this.modifyClassName(this.baseClass, 'elevated'));
  //     }
  //
  //     if (this.iconOnly) {
  //       classes.push(this.modifyClassName(this.baseClass, 'icon-only'));
  //     }
  //
  //     if (this.iconOnly && this.withBackground) {
  //       classes.push(this.modifyClassName(this.baseClass, 'with-background'));
  //     }
  //
  //     return classes.join(' ');
  //   },
  // },
  setup(props) {


    //   baseClass() {
    //     return 'cdr-button';
    //   },
    //   defaultClass() {
    //     return this.modifier ? undefined : this.modifyClassName(this.baseClass, 'primary');
    //   },
    //   buttonSizeClass() {
    //     return !this.iconOnly ? this.sizeClass : this.style[`cdr-button--icon-only-${this.size}`];
    //   },
    // \clsx(
    //   this.style[this.baseClass],
    const baseClass = style['cdr-button']
    const modifierClass = computed(() => );
    const buttonSizeClass = computed(() => ); // !!! SIZELCASS
    const fullWidthClass = computed(() => );
    const iconClass = computed(() => );
    // )
// TODO: can default/base/modifier be cleaned? seems like 1 too many!!!
    const componentClass = computed(() => clsx(baseClass, modifierClass, buttonSizeClass, fullWidthClass, iconClass));
    // TYPE


    return {
      componentClass,
      type: props.tag === 'button' ? props.type : null
    }
  }
});
</script>
