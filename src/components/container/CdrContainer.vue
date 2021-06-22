
<template>
  <component :is="tag" :class="mapClasses($style, baseClass, modifierClass)">
    <slot />
  </component>);
</template>

<script>
import { defineComponent } from 'vue';
import propValidator from '../../utils/propValidator';
import { buildClass } from '../../utils/buildClass';
import mapClasses from '../../utils/mapClasses';

export default defineComponent({
  name: 'CdrContainer',
  props: {
    /** Any valid HTML tag */
    tag: {
      type: String,
      default: 'div',
    },
    modifier: {
      type: String,
      default: 'static',
      validator: (value) => propValidator(
        value,
        ['static', 'fluid'],
        false,
      ),
    },
  },
  setup(props, ctx) {
    const baseClass = 'cdr-container';
    const modifierClass = computed(() => buildClass(baseClass, props.modifier));
    return {
      baseClass,
      modifierClass,
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrContainer.scss">
</style>
