<template>
  <h1
    v-if="level === '1'"
    :class="[headClass, modifierClass]"
  >
    <slot/>
  </h1>
  <h2
    v-else-if="level === '2'"
    :class="[headClass, modifierClass]"
  >
    <slot/>
  </h2>
  <h3
    v-else-if="level === '3'"
    :class="[headClass, modifierClass]"
  >
    <slot/>
  </h3>
  <h4
    v-else-if="level === '4'"
    :class="[headClass, modifierClass]"
  >
    <slot/>
  </h4>
  <h5
    v-else-if="level === '5'"
    :class="[headClass, modifierClass]"
  >
    <slot/>
  </h5>
  <h6
    v-else-if="level === '6'"
    :class="[headClass, modifierClass]"
  >
    <slot/>
  </h6>
</template>

<script>
import modifier from '../../mixins/modifier';

/**
 * Component is described here.
 *
 * @example ./typography.md
 */

export default {
  name: 'CdrHeading',
  mixins: [modifier],
  props: {
    /**
     * Heading level -- 1 = h1, 2 = h2, etc.
     */
    level: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      headClass: 'cdr-heading',
    };
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
  @import 'styles/cdrHeading.pcss';
</style>
