<template>
  <h1
    v-if="level === '1'"
    :class="[{'cdr-text--disable-responsive' :disableResponsive}, modifierClass,]"
  >
    <slot/>
  </h1>
  <h2
    v-else-if="level === '2'"
    :class="[{'cdr-text--disable-responsive' :disableResponsive}, modifierClass]"
  >
    <slot/>
  </h2>
  <h3
    v-else-if="level === '3'"
    :class="[{'cdr-text--disable-responsive' :disableResponsive}, modifierClass]"
    :isResponsive="responsive"
  >
    <slot/>
  </h3>
  <h4
    v-else-if="level === '4'"
    :class="[{'cdr-text--disable-responsive' :disableResponsive}, modifierClass]"
    :isResponsive="responsive"
  >
    <slot/>
  </h4>
  <h5
    v-else-if="level === '5'"
    :class="[{'cdr-text--disable-responsive' :disableResponsive}, modifierClass]"
    :isResponsive="responsive"
  >
    <slot/>
  </h5>
  <h6
    v-else-if="level === '6'"
    :class="[{'cdr-text--disable-responsive' :disableResponsive}, modifierClass]"
    :isResponsive="responsive"
  >
    <slot/>
  </h6>
</template>

<script>
import modifier from 'Mixins/modifier';

/**
 * Component is described here.
 *
 * @example ./typography.md
 */

export default {
  name: 'CdrHeading',
  mixins: [modifier],
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
  @import './styles/vars/cdrHeading.vars.pcss';
  @import './styles/cdrHeading.pcss';
</style>
