<template>
  <ul
    :class="modifierClass"
    v-if="type === 'ul'"
  >
    <slot/>
  </ul>

  <ol
    :class="modifierClass"
    v-else-if="type === 'ol'"
  >
    <slot/>
  </ol>
</template>

<script>
import modifier from '../../mixins/modifier';

export default {
  name: 'CdrList',
  mixins: [modifier],
  props: {
    /**
     * List type. 'ul' = Unordered List. 'ol' = Ordered List.
     */
    type: {
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
  @import '../../css/settings/_index.pcss';
  @import 'styles/cdrList.pcss';
</style>
