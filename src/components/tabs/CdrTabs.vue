<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <div :class="[modifierClass]">
    <ol
      :class="$style['cdr-tabs__header']"
      ref="cdrTabsHeader">
      <li
        v-for="tab in tabs"
        :key="tab.id"
        :class="[ tab.active ? $style['cdr-tabs__header-item-active'] : '', $style['cdr-tabs__header-item']]"
        @click="handleClick(tab, $event)">
        <a>
          {{ tab.name }}
        </a>
      </li>
    </ol>
    <hr
      :class="$style['cdr-tabs__underline']"
      :style="underlineStyle">
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
    underlineStyle() {
      return `margin-left: ${this.underlineOffsetX}px`;
    },
  },
  // watch: {
  //   tabs() {
  //     this.$nextTick(this.initializeOffsets());
  //   },
  // },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    console.log('KRIS mounted triggered');
  },
  updated() {
    console.log('KRIS updated triggered');
    this.initializeOffsets();
  },
  methods: {
    handleClick(tabClicked, event) {
      console.log('KRIS tabclicked = ', tabClicked);
      console.log('KRIS event = ', event);
      const selectedTab = this.tabs.find(tab => tabClicked.name === tab.name);
      this.tabs.forEach((tab) => {
        tab.setActive(selectedTab.name === tab.name);
      });
      this.underlineOffsetX = event.currentTarget.offsetLeft;
      // this.underlineStyle.transform = `translateX(${this.underlineOffsetX})`;
      console.log('KRIS underlineOffsetX = ', this.underlineOffsetX);
      console.log('KRIS tabclicked.offsetX = ', tabClicked.offsetX);
    },
    isActiveTab(tab) {
      return tab.active;
    },
    initializeOffsets() {
      const elements = Array.from(this.$refs.cdrTabsHeader.children);
      let offsetX = 0;
      elements.forEach((element, index) => {
        this.tabs[index].setOffsetX(offsetX);
        console.log('KRIS element = ', element);
        console.log('KRIS tab = ', this.tabs[index]);
        offsetX += element.offsetWidth;
      });
    },
  },
};
</script>

<style module>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrTabs.pcss';
</style>
