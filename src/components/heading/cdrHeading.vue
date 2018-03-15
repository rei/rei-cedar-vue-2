<template>
  <component
    :is="'h'+level"
    :class="[{'cdr-text--disable-responsive' :disableResponsive}, modifierClass,]"
  >
    <!-- @slot innerHTML inside of the heading component -->
    <slot/>
  </component>
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
  /**
  * Modifiers
  * heading-large
  * heading-medium
  * heading-small
  * display
  * subheading
   */
  mixins: [modifier],
  /**
  * disable-responsive adds the utility class of
  * .cdr-text--disable-responsive to a heading.
  * This allows for a consistent font across breakpoints.
  */
  props: {
    disableResponsive: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * Heading level -- 1 = h1, 2 = h2, etc.
     */
    level: {
      type: [String, Number],
      default: 1,
      required: true,
    },
  },
  computed: {
    baseClass() {
      return 'cdr-text';
    },
  },
};
</script>

<style>
  @import 'Css/settings/_index.pcss';
  @import './styles/cdrHeading.pcss';
</style>
