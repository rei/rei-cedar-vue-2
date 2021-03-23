<template>
  <div :class="$style['cdr-label-wrapper__container']">
    <label
      :class="[
        $style['cdr-label-wrapper'],
        $style[`cdr-label-wrapper--${background}`],
        $style[disabledClass],
        $style[modifierClass],
        $style[sizeClass],
        labelClass, // TODO: not scoped?!?!?!?!
      ]"
    >
      <slot name="input" />
      <span :class="$style['cdr-label-wrapper__figure']" />
      <div :class="[$style['cdr-label-wrapper__content'], contentClass]">
        <slot />
      </div>
    </label>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { buildClass } from '../../utils/buildClass';
import backgroundProps from '../../props/background';

export default defineComponent({
  name: 'CdrLabelWrapper',
  props: {
    labelClass: String,
    contentClass: String,
    background: backgroundProps,
    disabled: Boolean,
  },
  setup(props) {
    const baseClass = 'cdr-label-wrapper';
    const modifierClass = computed(() => buildClass(baseClass, props.modifier));
    const sizeClass = computed(() => props.size && buildClass(baseClass, props.size));
    const disabledClass = computed(() => props.disabled && buildClass(baseClass, 'disabled')); // TODO: this works right?
    return {
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
