<template>
  <h1
    v-if="level === '1'"
    :class="[headClass, modifierClass]"
  >
    <!-- @slot innerHTML inside of the heading component -->
    <slot/>
  </h1>
  <h2
    v-else-if="level === '2'"
    :class="[headClass, modifierClass]"
  >
    <!-- @slot innerHTML inside of the heading component -->
    <slot/>
  </h2>
  <h3
    v-else-if="level === '3'"
    :class="[headClass, modifierClass]"
  >
    <!-- @slot innerHTML inside of the heading component -->
    <slot/>
  </h3>
  <h4
    v-else-if="level === '4'"
    :class="[headClass, modifierClass]"
  >
    <!-- @slot innerHTML inside of the heading component -->
    <slot/>
  </h4>
  <h5
    v-else-if="level === '5'"
    :class="[headClass, modifierClass]"
  >
    <!-- @slot innerHTML inside of the heading component -->
    <slot/>
  </h5>
  <h6
    v-else-if="level === '6'"
    :class="[headClass, modifierClass]"
  >
    <!-- @slot innerHTML inside of the heading component -->
    <slot/>
  </h6>
</template>

<script>
import modifier from 'Mixins/modifier';

/**
 * Cedar 2 component for heading
 * <span class="modifiers">Modifiers</span>
 * Accepts typography classes.
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
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

<style>
  @import 'Css/settings/_index.pcss';
  @import './styles/vars/cdrHeading.vars.pcss';
  @import './styles/cdrHeading.pcss';
</style>
