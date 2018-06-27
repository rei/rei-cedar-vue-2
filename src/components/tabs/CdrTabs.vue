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
    <div :class="$style['cdr-tabs__content-container']">
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
      underlineOffsetWidth: 0,
      widthInitialized: false,
      activeTabIndex: 0,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-tabs';
    },
    underlineStyle() {
      return {
        marginLeft: `${this.underlineOffsetX}px`,
        width: `${this.underlineOffsetWidth}px`,
      };
    },
  },
  beforeMount() {
    this.tabs = this.$children;
  },
  mounted() {
    if (this.tabs.length > 0) this.tabs[0].setActive(true);
  },
  updated() {
    this.initializeOffsets();
  },
  methods: {
    handleClick(tabClicked, event) {
      const newSelectedTab = this.tabs.find(tab => tabClicked.name === tab.name);
      this.tabs.forEach((tab, index) => {
        if (newSelectedTab.name === tab.name) {
          if (this.activeTabIndex < index) {
            tab.setAnimationDirection('flyRight');
            this.tabs[this.activeTabIndex].setAnimationDirection('flyLeft');
          } else {
            tab.setAnimationDirection('flyLeft');
            this.tabs[this.activeTabIndex].setAnimationDirection('flyRight');
          }
          this.activeTabIndex = index;
          this.$nextTick(tab.setActive(true));
        } else {
          this.$nextTick(tab.setActive(false));
        }
      });
      this.underlineOffsetX =
        event.currentTarget.offsetLeft
        - event.currentTarget.parentElement.parentElement.offsetLeft;
      this.underlineOffsetWidth = event.currentTarget.offsetWidth;
    },
    initializeOffsets() {
      if (!this.widthInitialized) {
        const elements = Array.from(this.$refs.cdrTabsHeader.children);
        this.underlineOffsetWidth = elements[0].offsetWidth;
        this.widthInitialized = true;
      // elements.forEach((element, index) => {
        //   this.tabs[index].setOffsetX(offsetX);
      //   offsetX += element.offsetWidth;
      // });
      }
    },
  },
};
</script>

<style module>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrTabs.pcss';
</style>
