<template>
  <ul
    :class="modifierClass"
    v-if="listType === 'ul'"
  >
    <!-- @slot innerHTML inside of the list component -->
    <slot/>
  </ul>

  <ol
    :class="modifierClass"
    v-else-if="listType === 'ol'"
  >
    <!-- @slot innerHTML inside of the list component -->
    <slot/>
  </ol>
</template>

<script>
import modifier from 'Mixins/modifier';

/**
 * Cedar 2 component for list
 * <span class="modifiers">Modifiers</span>
 * {unstyled, bullet, disc, numbered, menu, compact, circle, inline}
 * **Note**: type doesn't affect the modifier.
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrList',
  mixins: [modifier],
  props: {
    /**
     * List type. 'ul' = Unordered List. 'ol' = Ordered List.
     */
    listType: {
      type: String,
      default: 'ul',
      validator: value => (['ul', 'ol'].indexOf(value) >= 0) || false,
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
  @import 'Css/settings/_index.pcss';
  @import './styles/vars/cdrList.vars.pcss';
  @import './styles/cdrList.pcss';
</style>
