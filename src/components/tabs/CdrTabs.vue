<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <div :class="[modifierClass]">
    <div class="cdr-tabs__header">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="cdr-tabs__header-item"
        @click="handleClick(tab, $event)">
        <a>
          {{ tab.name }}
        </a>
      </div>
    </div>
    <div class="cdr-tabs__content-container">
      <slot/>
    </div>
  </div>
</template>

<script>
import modifier from 'mixinsdir/modifier';

export default {
  name: 'CdrTabs',
  mixins: [modifier],
  data() {
    return {
      tabs: [],
    };
  },
  computed: {
    baseClass() {
      return 'cdr-tabs';
    },
  },
  created() {
    // console.log('KRIS this.childer = ', this.$children);

    this.tabs = this.$children;
  },
  methods: {
    handleClick(param1) {
      console.log('KRIS click param1 = ', param1);
      const selectedTab = this.tabs.find(tab => param1.name === tab.name);
      this.tabs.forEach((tab) => {
        tab.setActive(selectedTab.name === tab.name);
      });
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrTabs.pcss';
</style>
