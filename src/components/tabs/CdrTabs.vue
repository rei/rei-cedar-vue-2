<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <div
    :class="[modifierClass]"
    ref="cdrTabsContainer">
    <div
      :class="[ overflowLeft ? $style['cdr-tabs__header-gradient-left'] : '',
                overflowRight ? $style['cdr-tabs__header-gradient-right'] : '',
                $style['cdr-tabs__gradient-container']]"
      @keyup.right="handleArrowNav"
      @keyup.left="handleArrowNav">
      <nav
        :class="[ overflowLeft ? $style['cdr-tabs__header-gradient-left'] : '',
                  overflowRight ? $style['cdr-tabs__header-gradient-right'] : '',
                  $style['cdr-tabs__header-container']]">
        <ol
          :class="$style['cdr-tabs__header']"
          role="tablist"
          ref="cdrTabsHeader">
          <li
            v-for="tab in tabs"
            :key="tab.id"
            :class="[ tab.active ? $style['cdr-tabs__header-item-active'] : '', $style['cdr-tabs__header-item']]"
            @click="handleClick(tab, $event)">
            <a
              :href="'/#' + tab.name"
              role="tab"
              :tabindex="[ tab.active ? 1 : -1 ]"
              :class="$style['cdr-tabs__header-item-label']">
              {{ tab.name }}
            </a>
          </li>
        </ol>
        <hr
          :class="$style['cdr-tabs__underline']"
          :style="underlineStyle">
      </nav>
    </div>
    <div :class="$style['cdr-tabs__content-container']">
      <slot/>
    </div>
  </div>
</template>

<script>
import modifier from 'mixinsdir/modifier';
import debounce from 'lodash/debounce';


export default {
  name: 'CdrTabs',
  mixins: [modifier],
  data() {
    return {
      tabs: [],
      underlineOffsetX: 0,
      underlineWidth: 0,
      widthInitialized: false,
      activeTabIndex: 0,
      headerOverflow: false,
      overflowLeft: false,
      overflowRight: false,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-tabs';
    },
    underlineStyle() {
      return {
        marginLeft: `${this.underlineOffsetX}px`,
        width: `${this.underlineWidth}px`,
      };
    },
  },
  beforeMount() {
    this.tabs = this.$children;
  },
  mounted() {
    if (this.tabs.length > 0) this.tabs[0].setActive(true);
    // Check for header overflow on window resize for gradient behavior.
    window.addEventListener('resize', debounce(() => {
      this.headerWidth = this.getHeaderWidth();
      this.calculateOverflow();
    }, 250));
    // Check for header overflow on widow resize for gradient behavior.
    this.$refs.cdrTabsHeader.parentElement.addEventListener('scroll', debounce(() => {
      this.calculateOverflow();
    }, 250));
    this.headerWidth = this.getHeaderWidth();
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
      this.underlineWidth = event.currentTarget.children[0].offsetWidth;
    },
    initializeOffsets() {
      if (!this.widthInitialized) {
        const elements = Array.from(this.$refs.cdrTabsHeader.children);
        this.underlineWidth = elements[0].children[0].offsetWidth;
        this.widthInitialized = true;
        // Set focus to default Tab header
        this.$nextTick(this.$refs.cdrTabsHeader.children[this.activeTabIndex].children[0].focus());
      }
    },
    calculateOverflow() {
      const containerWidth = this.$refs.cdrTabsContainer.offsetWidth;
      this.headerOverflow = this.headerWidth > containerWidth;
      if (this.headerOverflow) {
        // Get Scroll Position
        const scrollX = this.$refs.cdrTabsHeader.parentElement.scrollLeft;
        this.overflowLeft = scrollX > 1;
        this.overflowRight = (scrollX + 1) < (this.headerWidth - containerWidth);
      } else {
        this.overflowLeft = false;
        this.overflowRight = false;
      }
    },
    handleArrowNav(event) {
      if (event.which === 39) {
        // navigate right
        if (this.activeTabIndex < (this.tabs.length - 1)) {
          this.tabs[this.activeTabIndex].setAnimationDirection('flyLeft');
          this.tabs[this.activeTabIndex + 1].setAnimationDirection('flyRight');
          this.$nextTick(this.tabs[this.activeTabIndex].setActive(false));
          this.activeTabIndex += 1;
          this.$nextTick(this.tabs[this.activeTabIndex].setActive(true));
        }
      } else if (event.which === 37) {
        // navigate left
        if (this.activeTabIndex > 0) {
          this.tabs[this.activeTabIndex].setAnimationDirection('flyRight');
          this.tabs[this.activeTabIndex - 1].setAnimationDirection('flyLeft');
          this.$nextTick(this.tabs[this.activeTabIndex].setActive(false));
          this.activeTabIndex -= 1;
          this.$nextTick(this.tabs[this.activeTabIndex].setActive(true));
        }
      }
      if (this.$refs.cdrTabsHeader.children[this.activeTabIndex] &&
        (event.which === 37 || event.which === 39)) {
        this.underlineOffsetX =
        this.$refs.cdrTabsHeader.children[this.activeTabIndex].offsetLeft
          - this.$refs.cdrTabsHeader.offsetLeft;
        this.underlineWidth =
          this.$refs.cdrTabsHeader.children[this.activeTabIndex].children[0].offsetWidth;
        this.$refs.cdrTabsHeader.children[this.activeTabIndex].children[0].focus();
      }
    },
    getHeaderWidth() {
      const headerElements = Array.from(this.$refs.cdrTabsHeader.children);
      let totalWidth = 0;
      headerElements.forEach((element) => {
        totalWidth += element.offsetWidth || 0;
      });
      return totalWidth;
    },
  },
};
</script>

<style module>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrTabs.pcss';
</style>
