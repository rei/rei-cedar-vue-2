<template>
  <ul
    :class="modifierClass"
    v-if="listType === 'ul'"
  >
    <slot/>
  </ul>

  <ol
    :class="modifierClass"
    v-else-if="listType === 'ol'"
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
  @import '../../css/settings/_index.pcss';
  @import 'styles/vars/cdrList.vars.pcss';
  @import 'styles/cdrList.pcss';
</style>
