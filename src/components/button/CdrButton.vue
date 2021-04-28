<template>
  <component
    :is="tag"
    :class="mapClasses($style,
                       baseClass,
                       modifierClass,
                       sizeClass,
                       fullWidthClass,
                       iconOnlyClass,
                       iconLeftClass,
                       iconRightClass,
                       elevatedClass,
                       iconOnlyClass,
                       withBackgroundClass,
    )"
    :type="buttonType"
  >
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </component>
</template>

<!-- NOTE: REMOVED icon slot. use icon-left -->
<script>
import { defineComponent, computed } from 'vue';

import mapClasses from '../../utils/mapClasses';
import { buildClass, buildBooleanClass } from '../../utils/buildClass';
import propValidator from '../../utils/propValidator';

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
  setup(props, ctx) {
    const baseClass = 'cdr-button';
    const modifierClass = computed(() => buildClass(baseClass, props.modifier));
    const elevatedClass = computed(() => props.elevated && buildClass(baseClass, 'elevated'));
    const fullWidthClass = computed(() => !props.iconOnly && props.fullWidth
        && buildBooleanClass(baseClass, props.fullWidth, 'full-width'));
    const sizeClass = computed(() => (!props.iconOnly
      ? buildClass(baseClass, props.size)
      : `cdr-button--icon-only-${props.size}`));
    const iconLeftClass = computed(() => ctx.slots['icon-left'] && ctx.slots.default
        && buildClass(baseClass, 'has-icon-left'));
    const iconRightClass = computed(() => ctx.slots['icon-right'] && ctx.slots.default
        && buildClass(baseClass, 'has-icon-right'));
    const iconOnlyClass = computed(() => props.iconOnly && buildClass(baseClass, 'icon-only'));
    const withBackgroundClass = computed(() => props.iconOnly
      && props.withBackground && buildClass(baseClass, 'with-background'));

    return {

      buttonType: props.tag === 'button' ? props.type : null,
      baseClass,
      modifierClass,
      fullWidthClass,
      sizeClass,
      iconOnlyClass,
      iconLeftClass,
      iconRightClass,
      elevatedClass,
      withBackgroundClass,
      mapClasses,
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrButton.scss">
</style>
