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
              (tab.active && !tab.disabled) ? 'cdr-tabs__header-item-active' : '',
              'cdr-tabs__header-item',
              tab.disabled ? 'cdr-tabs__header-item--disabled' : '',
            )"
            :tabIndex="(tab.active && !tab.disabled) ? 0 : -1"
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




import { defineComponent, computed, ref, onMounted, provide } from 'vue';
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


  // TODO: use this pattern
// https://github.com/Jacobs63/vue3-tabs-component/blob/master/src/components/Tabs.vue
// https://github.com/Jacobs63/vue3-tabs-component/blob/master/src/components/Tab.vue
// separate tab name from content? pass array of names, matching children?
// we can get the name from the ctx.slots.default() but can't setActive and such 
// provide/inject i guess?

  setup(props, ctx) {
    // TODO: create reactive state objects for data rather than bundle of refs?
    let tabs = []; // TODO: note tabs NOT reactive! no adding tabs after mount!!!
    const underlineOffsetX = ref(0);
    const underlineWidth = ref(0);
    // const underlineScrollX = ref(0); // ????
    const activeTabIndex = ref(0);
    const headerWidth = ref(0);
    const headerOverflow = ref(false);
    const overflowLeft = ref(false);
    const overflowRight = ref(false);
    const animationInProgress = ref(false);


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
      for (let i = startIndex; i < tabs.length; i += 1) {
        if (!tabs[i].disabled) {
          return i;
        }
      }

      if (startIndex !== 0) {
        for (let k = 0; k < startIndex; k += 1) {
          if (!tabs[k].disabled) {
            return k;
          }
        }
      }

      return -1;
    }

    const getPreviousTab = (startIndex) => {
      for (let i = startIndex; i > -1; i -= 1) {
        if (!tabs[i].disabled) {
          return i;
        }
      }

      if (startIndex !== tabs.length - 1) {
        for (let k = tabs.length - 1; k > startIndex; k -= 1) {
          if (!tabs[k].disabled) {
            return k;
          }
        }
      }

      return -1;
    }

    const handleClick = debounce(function handleClickCallback(tabClicked) {
      // TODO: render index in buttons to bind this event, no need to find index????
      const newIndex = tabs.findIndex((tab) => tabClicked.name === tab.name);
      changeTab(newIndex);
    }, 500, { leading: true, trailing: false });

    const changeTab = (newIndex) => {
      const oldIndex = activeTabIndex;

      hideScrollBar();
      if (newIndex > oldIndex) {
        tabs[oldIndex].setAnimationDirection('exit-left');
        tabs[oldIndex].setActive(false);
        setTimeout(() => {
          tabs[newIndex].setActive(true);
          tabs[newIndex].setAnimationDirection('enter-right');
        }, 200);
      } else {
        tabs[oldIndex].setAnimationDirection('exit-right');
        tabs[oldIndex].setActive(false);
        setTimeout(() => {
          tabs[newIndex].setActive(true);
          tabs[newIndex].setAnimationDirection('enter-left');
        }, 200);
      }
      activeTabIndex = newIndex;
      updateUnderline();
      cdrTabsHeaderEl.children[activeTabIndex].focus();
    }
    const rightArrowNav = debounce(function handleRightArrow() {
      const nextTab = getNextTab(activeTabIndex + 1);
      if (nextTab !== -1) {
        changeTab(nextTab);
      }
    }, 300, { leading: true, trailing: false })
    
    const leftArrowNav = debounce(function handleLeftArrow() {
      const previousTab = getPreviousTab(activeTabIndex - 1);
      if (previousTab !== -1) {
        changeTab(previousTab);
      }
    }, 300, { leading: true, trailing: false })
    
    const calculateOverflow = () => {
      let containerWidth = 0;
      if (cdrTabsContainerEl) {
        containerWidth = cdrTabsContainerEl.offsetWidth;
      }
      headerOverflow = headerWidth > containerWidth;
      if (headerOverflow) {
        // Get Scroll Position
        const scrollX = cdrTabsHeaderEl.parentElement.scrollLeft;
        overflowLeft = scrollX > 1;
        overflowRight = (scrollX + 1) < (headerWidth - containerWidth);
      } else {
        overflowLeft = false;
        overflowRight = false;
      }
    }
    const updateUnderline = () => {
      const elements = Array.from(cdrTabsHeaderEl.children); // TODO: cache this? probably?
      if (elements.length > 0) {
        const activeTab = elements[activeTabIndex];
        const activeRect = activeTab.getBoundingClientRect();
        const parentRect = cdrTabsHeaderEl.getBoundingClientRect();
        const offset = activeRect.x - parentRect.x;

        underlineOffsetX = offset
          - cdrTabsHeaderEl.parentElement.scrollLeft;
        underlineWidth = activeRect.width;

        // shrink/hide the underline if it scrolls outside the container
        if (underlineOffsetX + underlineWidth >= parentRect.width) {
          underlineWidth = Math.max(0, parentRect.width - underlineOffsetX);
          underlineOffsetX = Math.min(underlineOffsetX, parentRect.width);
        } else if (underlineOffsetX < 0) {
          underlineWidth = Math.max(0, underlineWidth + underlineOffsetX);
          underlineOffsetX = 0;
        }
      }
    }
    const handleDownArrowNav = () => {
      if (!animationInProgress) {
        // TODO: u wot m8
        $el.lastElementChild.children[activeTabIndex].focus();
      }
    }
    const setFocusToActiveTabHeader = () => {
      cdrTabsHeaderEl.children[activeTabIndex].focus();
    }
    const getHeaderWidth = () => {
      let headerElements = [];
      if (cdrTabsHeaderEl) {
        headerElements = Array.from(cdrTabsHeaderEl.children);
      }
      let totalWidth = 0;
      headerElements.forEach((element, i) => {
        // account for margin-left on header elements
        if (i > 0) {
          totalWidth += size === 'small' ? Number(CdrSpaceHalfX) : Number(CdrSpaceOneX);
        }
        totalWidth += element.offsetWidth || 0;
      });
      return totalWidth;
    }
    const hideScrollBar = () => {
      const containerRef = cdrTabsContainerEl.style;
      const slotRef = slotWrapperEl.style;
      window.addEventListener('transitionend', () => {
        containerRef.setProperty('overflow-x', 'unset');
        slotRef.setProperty('overflow-y', 'unset');
      }, { once: true });
      containerRef.setProperty('overflow-x', 'hidden');
      slotRef.setProperty('overflow-y', 'hidden');
    }

    onMounted(() => {
       // TODO: DO something like accordion group here?
      // hrmmmm

      // console.log()
      // tabs.value = Array.from(slotWrapperEl.value.children);
      // const wow = ctx.slots.default();
      // console.log(wow[0].vm.name)
      // console.log('yo', tabs.value[0].name);
      // console.log(tabs.value[0].name)
      // const wot = slotWrapperEl.value.children;
      // console.log('yoooo', getCurrentInstance().vnode.children.default()[0].vnode)
      // console.log('yoonoooooooo', getCurrentInstance().vnode.children.default()[0].vm)
      // for (var i = 0; i < wot.length; i++) {
      //   console.log(wot[i].vm)
      // }

      tabs = slotWrapperEl.value.querySelectorAll('div');
      Array.from(tabs).forEach(tab => console.log(tab.getAttribute('js-name'), tab.getAttribute('js-disabled')))


      // console.log(tabs.value.map((t) => t.name));

      // activeTabIndex = getNextTab(activeTab);

      // if (tabs[activeTabIndex] && tabs[activeTabIndex].setActive) {
      //   tabs[activeTabIndex].setActive(true);
      // }

      // $nextTick(() => {
      //   headerWidth = getHeaderWidth();
      //   calculateOverflow();
      //   setTimeout(() => {
      //     updateUnderline();
      //   }, 500);
      // });
      // // Check for header overflow on window resize for gradient behavior.
      // window.addEventListener('resize', debounce(() => {
      //   headerWidth = getHeaderWidth();
      //   calculateOverflow();
      //   updateUnderline();
      // }, 500));
      // // Check for header overflow on widow resize for gradient behavior.
      // cdrTabsHeaderEl.parentElement.addEventListener('scroll', debounce(() => {
      //   calculateOverflow();
      //   updateUnderline();
      // }, 50));
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

      cdrTabsHeaderEl,
      slotWrapperEl,
      containerEl,

      underlineStyle,
      gradientLeftStyle,
      gradientRightStyle,


      getHeaderWidth,
      calculateOverflow,
      updateUnderline,
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrTabs.scss">
</style>