<template>
  <component
    :is="tag"
    :class="[$style[baseClass], $style[modifierClass]]"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

import { buildClass } from '../../utils/buildClass';
import propValidator from '../../utils/propValidator';

export default defineComponent({
  name: 'CdrList',
  props: {
    /**
     * Tag accepts a user defined element and expects either: 'ul' = Unordered List or 'ol' = Ordered List.
     */
    tag: {
      type: String,
      default: 'ul',
      validator: (value) => propValidator(value, ['ul', 'ol']),
    },
    modifier: {
      type: String,
      default: '',
      validator: (value) => propValidator(value, ['ordered', 'unordered', 'compact', 'inline']),
    },
  },
  setup(props) {
    const baseClass = 'cdr-list';
    const modifierClass = computed(() => buildClass(baseClass, props.modifier));
    return {
      baseClass,
      modifierClass,
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrList.scss">
</style>
