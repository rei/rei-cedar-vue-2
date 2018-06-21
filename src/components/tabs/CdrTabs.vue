<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <div :class="[modifierClass]">
    <ol
      :class="$style['cdr-tabs__header']"
      ref="cdrTabsHeader">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :class="[ tab.active ? $style['cdr-tabs__header-item-active'] : '', $style['cdr-tabs__header-item']]"
        @click="handleClick(tab, $event)">
        <a>
          {{ tab.name }}
        </a>
      </li>
    </ol>
    <hr
      :class="$style['cdr-tabs__underline']"
      :style="{transform: 'translateX(' + underlineOffsetX + ')'}">
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
      underlineOffsetX: 0,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-tabs';
    },
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    let offsetX = 0;
    const tabsHeaderElements = Array.from(this.$refs.cdrTabsHeader.children);
    console.log('KRIS cdrTabsHeader = ', this.$refs.cdrTabsHeader.children);
    console.log('KRIS cdrTabsHeader Array = ', this.tabsHeaderElements);
    tabsHeaderElements.forEach((tab) => {
      tab.setOffsetX(offsetX);
      console.log('KRIS tab = ', tab);
      offsetX += tab.offsetWidth;
    });
  },
  methods: {
    handleClick(tabClicked) {
      console.log('KRIS tabclicked = ', tabClicked);
      const selectedTab = this.tabs.find(tab => tabClicked.name === tab.name);
      this.tabs.forEach((tab) => {
        tab.setActive(selectedTab.name === tab.name);
      });
      this.underlineOffsetX = tabClicked.offsetX;
      console.log('KRIS underlineOffsetX = ', this.underlineOffsetX);
      console.log('KRIS tabclicked.offsetX = ', tabClicked.offsetX);
    },
    isActiveTab(tab) {
      return tab.active;
    },
  },
};
</script>

<style module>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrTabs.pcss';
</style>
