<template>
  <div :class="$style['cdr-label-wrapper__container']">
    <label
      :class="mapClasses($style,
        'cdr-label-wrapper',
        `cdr-label-wrapper--${background}`,
        disabledClass,
        modifierClass,
        sizeClass,
      ).concat(` ${labelClass}`)"
    >
      <slot name="input" />
      <span :class="$style['cdr-label-wrapper__figure']" />
      <div :class="mapClasses($style, 'cdr-label-wrapper__content', contentClass)">
        <slot />
      </div>
    </label>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { buildClass } from '../../utils/buildClass';
import backgroundProps from '../../props/background';
import mapClasses from '../../utils/mapClasses';

export default defineComponent({
  name: 'CdrLabelWrapper',
  props: {
    labelClass: String,
    contentClass: String,
    background: backgroundProps,
    disabled: Boolean,
    modifier: String,
    size: String,
  },
  setup(props) {
    const baseClass = 'cdr-label-wrapper';
    const modifierClass = computed(() => buildClass(baseClass, props.modifier));
    const sizeClass = computed(() => props.size && buildClass(baseClass, props.size));
    const disabledClass = computed(() => props.disabled && buildClass(baseClass, 'disabled')); // TODO: this works right?
    return {
      mapClasses,
      baseClass,
      modifierClass,
      sizeClass,
      disabledClass,
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrLabelWrapper.scss">
</style>
