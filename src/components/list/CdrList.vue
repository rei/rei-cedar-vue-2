<template>
  <component
    :is="tag"
    :class="modifierClass"
  >
    <slot />
  </component>
</template>

<script>
import modifier from 'mixinsdir/modifier';

/**
 * Cedar 2 component for list
 * <span class="modifiers">Modifiers</span>
 * {unstyled, compact, circle, inline}
 * **Note**: type doesn't affect the modifier.
 * @version 0.1.0
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrList',
  mixins: [modifier],
  props: {
    /**
     * Tag expects: 'ul' = Unordered List or 'ol' = Ordered List.
     */
    tag: {
      type: String,
      default: 'ul',
      validator: value => ['ul', 'ol'].indexOf(value) >= 0 || false,
    },
  },
  computed: {
    baseClass() {
      return 'cdr-list';
    },
  },
};
</script>

<style>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/CdrList.pcss';
</style>
