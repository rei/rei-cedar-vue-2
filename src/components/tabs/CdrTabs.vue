<template>
  <div
    :class="mapClasses($style, baseClass, modifierClass, sizeClass)"
    ref="containerEl"
    :style="{ height }"
  >
    <div
      :class="$style['cdr-tabs__gradient-container']"
      @keyup.right="rightArrowNav"
      @keyup.left="leftArrowNav"
      @keydown.down.prevent="handleDownArrowNav"
    >
      <div :class="mapClasses($style,
        'cdr-tabs__gradient',
        'cdr-tabs__gradient--left',
          overflowLeft ? 'cdr-tabs__gradient--active' : ''
        )"
        :style="gradientLeftStyle"
      ></div>
      <nav
        :class="$style['cdr-tabs__header-container']"
      >
        <div
          :class="$style['cdr-tabs__header']"
          role="tablist"
          ref="cdrTabsHeaderEl"
        >

          <button
            v-for="(tab, i) in tabs"
            role="tab"
            :aria-selected="tab.disabled ? '' : activeTabIndex === i"
            :aria-controls="tab.disabled ? '' : tab.id"
            :id="tab.disabled ? '' : tab.ariaLabelledby"
            :key="tab.id"
            :class="mapClasses($style,
              (activeTabIndex === i && !tab.disabled) ? 'cdr-tabs__header-item-active' : '',
              'cdr-tabs__header-item',
              tab.disabled ? 'cdr-tabs__header-item--disabled' : '',
            )"
            :tabIndex="(activeTabIndex === i && !tab.disabled) ? 0 : -1"
            @click.prevent="(e) => tab.disabled ? null : handleClick(tab, e)"
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
        :class="$style['cdr-tabs__underline']"
        :style="underlineStyle"
      />
    </div>
    <div
      :class="$style['cdr-tabs__content-container']"
      ref="slotWrapperEl"
    >
      <slot />
    </div>
  </div>
</template>
<script>
import { buildClass } from '../../utils/buildClass'




import { defineComponent, computed, ref, onMounted, provide, nextTick } from 'vue';
import debounce from 'lodash-es/debounce';
import mapClasses from '../../utils/mapClasses';
import {
  CdrColorBackgroundPrimary, CdrSpaceOneX, CdrSpaceHalfX,
} from '@rei/cdr-tokens/dist/js/cdr-tokens.esm';

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
  setup(props, ctx) {

    const tabs = ref([]);
    provide('tabs', tabs);

    const underlineOffsetX = ref(0);
    const underlineWidth = ref(0);
    // const underlineScrollX = ref(0); // ????
    const activeTabIndex = ref(0);
    const headerWidth = ref(0);
    const headerOverflow = ref(false);
    const overflowLeft = ref(false);
    const overflowRight = ref(false);
    const animationInProgress = false;


    const containerEl = ref(null);
    const slotWrapperEl = ref(null);
    const cdrTabsHeaderEl = ref(null);

    const baseClass = 'cdr-tabs';
    const modifierClass = computed(() => buildClass('cdr-tabs', props.modifier));
    const sizeClass = computed(() => props.size && buildClass('cdr-tabs', props.size));

    const underlineStyle = computed(() => {
      return {
        transform: `translateX(${underlineOffsetX.value}px)`,
        width: `${underlineWidth.value}px`,
      };
    });
    const gradientLeftStyle = computed(() => {
      const gradient = `linear-gradient(to left, rgba(255, 255, 255, 0), ${props.backgroundColor})`;
      return {
        background: gradient,
      };
    });
    const gradientRightStyle = computed(() => {
      const gradient = `linear-gradient(to right, rgba(255, 255, 255, 0), ${props.backgroundColor})`;
      return {
        background: gradient,
      };
    });

// TODO: i feel it in my heart that these 2 function can be 1-liners
    const getNextTab = (startIndex) => {
      for (let i = startIndex; i < tabs.value.length; i += 1) {
        if (!tabs.value[i].disabled) {
          return i;
        }
      }

      if (startIndex !== 0) {
        for (let k = 0; k < startIndex; k += 1) {
          if (!tabs.value[k].disabled) {
            return k;
          }
        }
      }

      return -1;
    }

    const getPreviousTab = (startIndex) => {
      for (let i = startIndex; i > -1; i -= 1) {
        if (!tabs.value[i].disabled) {
          return i;
        }
      }

      if (startIndex !== tabs.value.length - 1) {
        for (let k = tabs.value.length - 1; k > startIndex; k -= 1) {
          if (!tabs.value[k].disabled) {
            return k;
          }
        }
      }

      return -1;
    }

    const handleClick = debounce(function handleClickCallback(tabClicked) {
      // TODO: render index in buttons to bind this event, no need to find index????
      const newIndex = tabs.value.findIndex((tab) => tabClicked.name === tab.name);
      changeTab(newIndex);
    }, 500, { leading: true, trailing: false });

    const changeTab = (newIndex) => {
      const oldIndex = activeTabIndex.value;

      hideScrollBar();
      if (newIndex > oldIndex) {
        tabs.value[oldIndex].setAnimationDirection('exit-left');
        tabs.value[oldIndex].setActive(false);
        setTimeout(() => {
          tabs.value[newIndex].setActive(true);
          tabs.value[newIndex].setAnimationDirection('enter-right');
        }, 200);
      } else {
        tabs.value[oldIndex].setAnimationDirection('exit-right');
        tabs.value[oldIndex].setActive(false);
        setTimeout(() => {
          tabs.value[newIndex].setActive(true);
          tabs.value[newIndex].setAnimationDirection('enter-left');
        }, 200);
      }
      activeTabIndex.value = newIndex;
      updateUnderline();
      cdrTabsHeaderEl.value.children[activeTabIndex.value].focus();
    }
    const rightArrowNav = debounce(function handleRightArrow() {
      const nextTab = getNextTab(activeTabIndex.value + 1);
      if (nextTab !== -1) {
        changeTab(nextTab);
      }
    }, 300, { leading: true, trailing: false })
    
    const leftArrowNav = debounce(function handleLeftArrow() {
      const previousTab = getPreviousTab(activeTabIndex.value - 1);
      if (previousTab !== -1) {
        changeTab(previousTab);
      }
    }, 300, { leading: true, trailing: false })
    
    const calculateOverflow = () => {
      let containerWidth = 0;
      if (containerEl.value) {
        containerWidth = containerEl.value.offsetWidth;
      }
      headerOverflow.value = headerWidth.value > containerWidth;
      if (headerOverflow.value) {
        // Get Scroll Position
        const scrollX = cdrTabsHeaderEl.value.parentElement.scrollLeft;
        overflowLeft.value = scrollX > 1;
        overflowRight.value = (scrollX + 1) < (headerWidth.value - containerWidth);
      } else {
        overflowLeft.value = false;
        overflowRight.value = false;
      }
    }
    const updateUnderline = () => {
      const elements = Array.from(cdrTabsHeaderEl.value.children); // TODO: cache this? probably?
      if (elements.length > 0) {
        const activeTab = elements[activeTabIndex.value];
        const activeRect = activeTab.getBoundingClientRect();
        const parentRect = cdrTabsHeaderEl.value.getBoundingClientRect();
        const offset = activeRect.x - parentRect.x;

        underlineOffsetX.value = offset
          - cdrTabsHeaderEl.value.parentElement.scrollLeft;
        underlineWidth.value = activeRect.width;

        // shrink/hide the underline if it scrolls outside the container
        if (underlineOffsetX.value + underlineWidth.value >= parentRect.width) {
          underlineWidth.value = Math.max(0, parentRect.width - underlineOffsetX.value);
          underlineOffsetX.value = Math.min(underlineOffsetX.value, parentRect.width);
        } else if (underlineOffsetX.value < 0) {
          underlineWidth.value = Math.max(0, underlineWidth.value + underlineOffsetX.value);
          underlineOffsetX.value = 0;
        }
      }
    }
    // TODO: what?
    const handleDownArrowNav = () => {
      if (!animationInProgress) {
        // TODO: u wot m8
        // cdrTabsHeaderEl.value.
        // $el.lastElementChild.children[activeTabIndex].focus();
      }
    }
    // TODO: listen for events emitted from tabs???
    const setFocusToActiveTabHeader = () => {
      cdrTabsHeaderEl.value.children[activeTabIndex].focus();
    }
    const getHeaderWidth = () => {
      let headerElements = [];
      if (cdrTabsHeaderEl.value) {
        headerElements = Array.from(cdrTabsHeaderEl.value.children);
      }
      let totalWidth = 0;
      headerElements.forEach((element, i) => {
        // account for margin-left on header elements
        if (i > 0) {
          totalWidth += props.size === 'small' ? Number(CdrSpaceHalfX) : Number(CdrSpaceOneX);
        }
        totalWidth += element.offsetWidth || 0;
      });
      return totalWidth;
    }
    const hideScrollBar = () => {
      const containerRef = containerEl.value.style;
      const slotRef = slotWrapperEl.value.style;
      window.addEventListener('transitionend', () => {
        containerRef.setProperty('overflow-x', 'unset');
        slotRef.setProperty('overflow-y', 'unset');
      }, { once: true });
      containerRef.setProperty('overflow-x', 'hidden');
      slotRef.setProperty('overflow-y', 'hidden');
    }

    onMounted(() => {

      activeTabIndex.value = getNextTab(props.activeTab);

      if (tabs.value[activeTabIndex.value] && tabs.value[activeTabIndex.value].setActive) {
        tabs.value[activeTabIndex.value].setActive(true);
      }

      nextTick(() => {
        headerWidth.value = getHeaderWidth();
        calculateOverflow();
        setTimeout(() => {
          updateUnderline();
        }, 500);
      });
      // Check for header overflow on window resize for gradient behavior.
      window.addEventListener('resize', debounce(() => {
        headerWidth.value = getHeaderWidth();
        calculateOverflow();
        updateUnderline();
      }, 500));
      // Check for header overflow on widow resize for gradient behavior.
      cdrTabsHeaderEl.value.parentElement.addEventListener('scroll', debounce(() => {
        calculateOverflow();
        updateUnderline();
      }, 50));
    })

    return {
      mapClasses,
      baseClass, 
      modifierClass, 
      sizeClass,
      tabs,

      // containerHeight, // ????
      overflowLeft,
      overflowRight,

      rightArrowNav,
      leftArrowNav,
      handleDownArrowNav,
      handleClick,

      cdrTabsHeaderEl,
      slotWrapperEl,
      containerEl,

      underlineStyle,
      gradientLeftStyle,
      gradientRightStyle,


      getHeaderWidth,
      calculateOverflow,
      updateUnderline,
      hideScrollBar,
      changeTab,
      getNextTab,
      getPreviousTab,

      activeTabIndex,
      setFocusToActiveTabHeader,
      headerOverflow,
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrTabs.scss">
</style>