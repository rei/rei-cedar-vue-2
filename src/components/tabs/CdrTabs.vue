<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <div :class="[modifierClass]">
    <span
      v-for="(tab, index) in tabs"
      :key="index">{{ tab.name }}
    </span>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'CdrTabs',
  data() {
    return {
      tabs: [],
    };
  },
  computed: {
    baseClass() {
      return 'cdr-checkbox';
    },
  },
  created() {
    this.tabs = this.$children;
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrTabs.pcss';
</style>
