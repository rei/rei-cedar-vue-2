<template>
  <h1 v-if="level === '1'" :class="[headClass, modifierClass]"><slot></slot></h1>
  <h2 v-else-if="level === '2'" :class="[headClass, modifierClass]"><slot></slot></h2>
  <h3 v-else-if="level === '3'" :class="[headClass, modifierClass]"><slot></slot></h3>
  <h4 v-else-if="level === '4'" :class="[headClass, modifierClass]"><slot></slot></h4>
  <h5 v-else-if="level === '5'" :class="[headClass, modifierClass]"><slot></slot></h5>
  <h6 v-else-if="level === '6'" :class="[headClass, modifierClass]"><slot></slot></h6>
</template>

<script>
import modifier from '../../mixins/modifier';

/**
 * Component is described here.
 *
 * @example ./typography.md
 */

export default {
  name: 'cdr-heading',
  mixins: [modifier],
  data() {
    return {
      headClass: 'cdr-heading',
    };
  },
  props: {
    /**
     * Heading level -- 1 = h1, 2 = h2, etc.
     */
    level: {
      type: String,
      required: true,
    },
  },
  computed: {
    baseClass() {
      return 'cdr-type';
    },
  },
};
</script>

<style theme="default">
  @import '../../css/settings/_index.pcss';
  @import 'cdrHeading.pcss';
</style>
