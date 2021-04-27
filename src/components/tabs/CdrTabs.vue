<template>
  <div
    :class="mapClasses($style, baseClass, modifierClass, sizeClass)"
    ref="ccontainerEl"
    :style="{ height: containerHeight }"
  >
  <!-- TODO: key event preventDefault???? -->
    <div
      :class="$style['cdr-tabs__gradient-container']"
      @keyup.right="rightArrowNav"
      @keyup.left="leftArrowNav"
      @keydown.down.prevent="handleDownArrowNav"
    >
      <div :class="mapClasses($style
       'cdr-tabs__gradient',
       'cdr-tabs__gradient--left',
        overflowLeft ?'cdr-tabs__gradient--active' : '',
      )"
        :style="gradientLeftStyle"
      ></div>
      <nav
        :class="$style['cdr-tabs__header-container']"
      >
        <div
          :class="$style['cdr-tabs__header']"
          role="tablist"
          ref="cdrTabsHeader"
        >

          <button
            v-for="tab in tabs"
            role="tab"
            :aria-selected="tab.disabled ? '' : tab.active"
            :aria-controls="tab.disabled ? '' : tab.id"
            :id="tab.disabled ? '' : tab.ariaLabelledby"
            :key="tab.id"
            :class="mapClasses($style,
              (tab.active && !tab.disabled) ? 'cdr-tabs__header-item-active' : '',
              'cdr-tabs__header-item',
              tab.disabled ? 'cdr-tabs__header-item--disabled' : '',
            )"
            :tabIndex="(tab.active && !tab.disabled) ? 0 : -1"
            @click.prevent="(e) => tab.disabled ? null : handleClick(tab, e)"
            :js-name="tab.name"
          >
            {{ tab.name }}
          </button> 
        </div>
      </nav>
      <div :class="mapClasses($style,
        'cdr-tabs__gradient',
        'cdr-tabs__gradient--right',
        overflowRight ? 'cdr-tabs__gradient--active' : '',
      )"
        :style="gradientRightStyle"
      ></div>
      <div
        :class="style['cdr-tabs__underline']"
        :style="underlineStyle"
      />
    </div>
    <div
      :class="style['cdr-tabs__content-container']"
      ref="slotWrapper"
    >
      <slot />
    </div>
  </div>
</template>
<script>
import { buildClass } from '../../utils/buildClass'




import { defineComponent, computed, ref } from 'vue';
import debounce from 'lodash-es/debounce';
import mapClasses $style,from 'mapClasses'$style,;
import {
  CdrColorBackgroundPrimary, CdrSpaceOneX, CdrSpaceHalfX,
} from '@rei/cdr-tokens/dist/js/cdr-tokens.esm';
import style from './styles/CdrTabs.scss';

export default defineComponent({
  name: 'CdrTabs',
  props: {
    height: {
      type: String,
      default: '240px',
    },
    activeTab: {
      type: Number,
      default: 0,
    },
    modifier: String,
    size: String,
    backgroundColor: {
      type: String,
      default: CdrColorBackgroundPrimary,
    },
  },
  methods: {
    getNextTab(startIndex) {
      for (let i = startIndex; i < this.tabs.length; i += 1) {
        if (!this.tabs[i].disabled) {
          return i;
        }
      }

      if (startIndex !== 0) {
        for (let k = 0; k < startIndex; k += 1) {
          if (!this.tabs[k].disabled) {
            return k;
          }
        }
      }

      return -1;
    },
    getPreviousTab(startIndex) {
      for (let i = startIndex; i > -1; i -= 1) {
        if (!this.tabs[i].disabled) {
          return i;
        }
      }

      if (startIndex !== this.tabs.length - 1) {
        for (let k = this.tabs.length - 1; k > startIndex; k -= 1) {
          if (!this.tabs[k].disabled) {
            return k;
          }
        }
      }

      return -1;
    },
    handleClick: debounce(function handleClickCallback(tabClicked) {
      const newIndex = this.tabs.findIndex((tab) => tabClicked.name === tab.name);
      this.changeTab(newIndex);
    }, 500, { leading: true, trailing: false }),
    changeTab(newIndex) {
      const oldIndex = this.activeTabIndex;

      this.hideScrollBar();
      if (newIndex > oldIndex) {
        this.tabs[oldIndex].setAnimationDirection('exit-left');
        this.tabs[oldIndex].setActive(false);
        setTimeout(() => {
          this.tabs[newIndex].setActive(true);
          this.tabs[newIndex].setAnimationDirection('enter-right');
        }, 200);
      } else {
        this.tabs[oldIndex].setAnimationDirection('exit-right');
        this.tabs[oldIndex].setActive(false);
        setTimeout(() => {
          this.tabs[newIndex].setActive(true);
          this.tabs[newIndex].setAnimationDirection('enter-left');
        }, 200);
      }
      this.activeTabIndex = newIndex;
      this.updateUnderline();
      this.$refs.cdrTabsHeader.children[this.activeTabIndex].focus();
    },
    rightArrowNav: debounce(function handleRightArrow() {
      const nextTab = this.getNextTab(this.activeTabIndex + 1);
      if (nextTab !== -1) {
        this.changeTab(nextTab);
      }
    }, 300, { leading: true, trailing: false }),
    leftArrowNav: debounce(function handleLeftArrow() {
      const previousTab = this.getPreviousTab(this.activeTabIndex - 1);
      if (previousTab !== -1) {
        this.changeTab(previousTab);
      }
    }, 300, { leading: true, trailing: false }),
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
      if (elements.length > 0) {
        const activeTab = elements[this.activeTabIndex];
        const activeRect = activeTab.getBoundingClientRect();
        const parentRect = this.$refs.cdrTabsHeader.getBoundingClientRect();
        const offset = activeRect.x - parentRect.x;

        this.underlineOffsetX = offset
          - this.$refs.cdrTabsHeader.parentElement.scrollLeft;
        this.underlineWidth = activeRect.width;

        // shrink/hide the underline if it scrolls outside the container
        if (this.underlineOffsetX + this.underlineWidth >= parentRect.width) {
          this.underlineWidth = Math.max(0, parentRect.width - this.underlineOffsetX);
          this.underlineOffsetX = Math.min(this.underlineOffsetX, parentRect.width);
        } else if (this.underlineOffsetX < 0) {
          this.underlineWidth = Math.max(0, this.underlineWidth + this.underlineOffsetX);
          this.underlineOffsetX = 0;
        }
      }
    },
    handleDownArrowNav() {
      if (!this.animationInProgress) {
        this.$el.lastElementChild.children[this.activeTabIndex].focus();
      }
    },
    setFocusToActiveTabHeader() {
      this.$refs.cdrTabsHeader.children[this.activeTabIndex].focus();
    },
    getHeaderWidth() {
      let headerElements = [];
      if (this.$refs.cdrTabsHeader) {
        headerElements = Array.from(this.$refs.cdrTabsHeader.children);
      }
      let totalWidth = 0;
      headerElements.forEach((element, i) => {
        // account for margin-left on header elements
        if (i > 0) {
          totalWidth += this.size === 'small' ? Number(CdrSpaceHalfX) : Number(CdrSpaceOneX);
        }
        totalWidth += element.offsetWidth || 0;
      });
      return totalWidth;
    },
    hideScrollBar() {
      const containerRef = this.$refs.cdrTabsContainer.style;
      const slotRef = this.$refs.slotWrapper.style;
      window.addEventListener('transitionend', () => {
        containerRef.setProperty('overflow-x', 'unset');
        slotRef.setProperty('overflow-y', 'unset');
      }, { once: true });
      containerRef.setProperty('overflow-x', 'hidden');
      slotRef.setProperty('overflow-y', 'hidden');
    },
  },
  setup(props, ctx) {
    const tabs = ref([]);
    const underlineOffsetX = ref(0);
    const underlineWidth = ref(0);
    const underlineScrollX = ref(0);
    const activeTabIndex = ref(0);
    const headerWidth = ref(0);
    const headerOverflow = ref(false);
    const overflowLeft = ref(false);
    const overflowRight = ref(false);
    const animationInProgress = ref(false);

    const baseClass = 'cdr-tabs';
    const modifierClass = computed(() => buildClass('cdr-tabs', props.modifier));
    const sizeClass = computed(() => props.size && buildClass('cdr-tabs', props.size));

    const underlineStyle = computed(() => {
      return {
        transform: `translateX(${underlineOffsetX}px)`,
        width: `${underlineWidth}px`,
      };
    });
    const gradientLeftStyle = computed(() => {
      const gradient = `linear-gradient(to left, rgba(255, 255, 255, 0), ${backgroundColor})`;
      return {
        background: gradient,
      };
    });
    const gradientRightStyle = computed(() => {
      const gradient = `linear-gradient(to right, rgba(255, 255, 255, 0), ${backgroundColor})`;
      return {
        background: gradient,
      };
    });

    onMounted(() => {
       // TODO: DO something like accordion group here?
      // hrmmmm
      this.tabs = (this.$slots.default || [])
        .map((vnode) => vnode.componentInstance)
        .filter((tab) => tab); // get vue component children in the slot

      this.activeTabIndex = this.getNextTab(this.activeTab);

      if (this.tabs[this.activeTabIndex] && this.tabs[this.activeTabIndex].setActive) {
        this.tabs[this.activeTabIndex].setActive(true);
      }

      this.$nextTick(() => {
        this.headerWidth = this.getHeaderWidth();
        this.calculateOverflow();
        setTimeout(() => {
          this.updateUnderline();
        }, 500);
      });
      // Check for header overflow on window resize for gradient behavior.
      window.addEventListener('resize', debounce(() => {
        this.headerWidth = this.getHeaderWidth();
        this.calculateOverflow();
        this.updateUnderline();
      }, 500));
      // Check for header overflow on widow resize for gradient behavior.
      this.$refs.cdrTabsHeader.parentElement.addEventListener('scroll', debounce(() => {
        this.calculateOverflow();
        this.updateUnderline();
      }, 50));
    })

    return {

    };
  },
});
</script>
