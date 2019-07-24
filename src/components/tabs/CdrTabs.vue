<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <div
    :class="[modifierClass]"
    ref="cdrTabsContainer"
    :style="{ height: height }"
  >
    <div
      :class="[ overflowLeft ? $style['cdr-tabs__header-gradient-left'] : '',
                overflowRight ? $style['cdr-tabs__header-gradient-right'] : '',
                $style['cdr-tabs__gradient-container']]"
      @keyup.right="rightArrowNav"
      @keyup.left="leftArrowNav"
      @keydown.down.prevent="handleDownArrowNav"
    >
      <nav
        :class="[ overflowLeft ? $style['cdr-tabs__header-gradient-left'] : '',
                  overflowRight ? $style['cdr-tabs__header-gradient-right'] : '',
                  $style['cdr-tabs__header-container']]"
      >
        <ol
          :class="$style['cdr-tabs__header']"
          role="tablist"
          ref="cdrTabsHeader"
        >
          <li
            v-for="(tab, index) in tabs"
            role="tab"
            :aria-selected="tab.active"
            :key="tab.id ? tab.id : `${tab.name}-${index}`"
            :class="[ tab.active ? $style['cdr-tabs__header-item-active'] : '', $style['cdr-tabs__header-item']]"
          >
            <a
              @click.prevent="handleClick(tab, $event)"
              :href="tab.name"
              :class="$style['cdr-tabs__header-item-label']"
            >
              {{ tab.name }}
            </a>
          </li>
        </ol>
        <div
          :class="$style['cdr-tabs__underline']"
          :style="underlineStyle"
        />
      </nav>
    </div>
    <div
      :class="$style['cdr-tabs__content-container']"
      ref="slotWrapper"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import modifier from 'mixinsdir/modifier';
import debounce from 'lodash/debounce';
// TODO fix lodash
import delay from 'lodash/delay';

export default {
  name: 'CdrTabs',
  mixins: [modifier],
  props: {
    height: {
      type: String,
      default: '240px',
    },
  },
  data() {
    return {
      tabs: [],
      underlineOffsetX: 0,
      underlineWidth: 0,
      underlineScrollX: 0,
      activeTabIndex: 0,
      widthInitialized: false,
      headerWidth: 0,
      headerOverflow: false,
      overflowLeft: false,
      overflowRight: false,
      animationInProgress: false,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-tabs';
    },
    underlineStyle() {
      return {
        transform: `translateX(${this.underlineOffsetX}px)`,
        width: `${this.underlineWidth}px`,
      };
    },
  },
  mounted() {
    this.tabs = (this.$slots.default || [])
      .map(vnode => vnode.componentInstance)
      .filter(tab => tab); // get vue component children in the slot
    this.$nextTick(() => {
      this.initializeOffsets();
      this.headerWidth = this.getHeaderWidth();
      if (this.tabs[0] && this.tabs[0].setActive) this.tabs[0].setActive(true);
    });
    // Check for header overflow on window resize for gradient behavior.
    window.addEventListener('resize', debounce(() => {
      this.headerWidth = this.getHeaderWidth();
      this.calculateOverflow();
    }, 500));
    // Check for header overflow on widow resize for gradient behavior.
    this.$refs.cdrTabsHeader.parentElement.addEventListener('scroll', debounce(() => {
      this.calculateOverflow();
      this.updateUnderline();
    }, 250));
  },
  methods: {
    handleClick(tabClicked) {
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
          this.hideScrollBar();
          this.$nextTick(() => tab.setActive(true));
        } else {
          this.$nextTick(() => tab.setActive(false));
        }
      });
      this.updateUnderline();
    },
    initializeOffsets() {
      if (!this.widthInitialized && this.$refs.cdrTabsHeader.children.length > 0) {
        const elements = Array.from(this.$refs.cdrTabsHeader.children);
        this.underlineWidth = elements[0].children[0].offsetWidth;
        this.widthInitialized = true;
      }
    },
    calculateOverflow() {
      let containerWidth = 0;
      if (this.$refs.cdrTabsContainer) {
        containerWidth = this.$refs.cdrTabsContainer.offsetWidth;
      }
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
    updateUnderline() {
      const elements = Array.from(this.$refs.cdrTabsHeader.children);
      if (elements) {
        const activeTab = elements[this.activeTabIndex];
        this.underlineOffsetX = activeTab.offsetLeft
          - this.$refs.cdrTabsHeader.parentElement.scrollLeft;
        this.underlineWidth = activeTab.firstChild.offsetWidth;
      }
    },
    rightArrowNav() {
      if (!this.animationInProgress) {
        if (this.activeTabIndex < (this.tabs.length - 1)) {
          this.tabs[this.activeTabIndex].setAnimationDirection('flyLeft');
          this.tabs[this.activeTabIndex + 1].setAnimationDirection('flyRight');
          this.hideScrollBar();
          this.$nextTick(this.tabs[this.activeTabIndex].setActive(false));
          this.activeTabIndex += 1;
          this.$nextTick(this.tabs[this.activeTabIndex].setActive(true));
        }
        this.navAnimationProgress();
      }
    },
    leftArrowNav() {
      if (!this.animationInProgress) {
        if (this.activeTabIndex > 0) {
          this.tabs[this.activeTabIndex].setAnimationDirection('flyRight');
          this.tabs[this.activeTabIndex - 1].setAnimationDirection('flyLeft');
          this.hideScrollBar();
          this.$nextTick(this.tabs[this.activeTabIndex].setActive(false));
          this.activeTabIndex -= 1;
          this.$nextTick(this.tabs[this.activeTabIndex].setActive(true));
        }
        this.navAnimationProgress();
      }
    },
    navAnimationProgress() {
      if (this.$refs.cdrTabsHeader.children[this.activeTabIndex]) {
        this.animationInProgress = true;
        delay(() => {
          this.animationInProgress = false;
        }, 600);
        this.updateUnderline();
        this.$refs.cdrTabsHeader.children[this.activeTabIndex].children[0].focus();
      }
    },
    handleDownArrowNav() {
      if (!this.animationInProgress) {
        this.$el.lastElementChild.children[this.activeTabIndex].focus();
      }
    },
    setFocusToActiveTabHeader() {
      this.$refs.cdrTabsHeader.children[this.activeTabIndex].children[0].focus();
    },
    getHeaderWidth() {
      let headerElements = [];
      if (this.$refs.cdrTabsHeader) {
        headerElements = Array.from(this.$refs.cdrTabsHeader.children);
      }
      let totalWidth = 0;
      headerElements.forEach((element) => {
        totalWidth += element.offsetWidth || 0;
      });
      return totalWidth;
    },
    hideScrollBar() {
      const styleRef = this.$refs.cdrTabsContainer.style;
      window.addEventListener('transitionend', () => {
        styleRef.setProperty('overflow-x', 'unset');
      }, { once: true });
      styleRef.setProperty('overflow-x', 'hidden');
    },
  },
};
</script>

<style lang="scss" module>
  @import './styles/CdrTabs.scss';
</style>
