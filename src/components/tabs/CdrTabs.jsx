import debounce from 'lodash-es/debounce';
import delay from 'lodash-es/delay';
import clsx from 'clsx';
import modifier from '../../mixins/modifier';
import size from '../../mixins/size';
import style from './styles/CdrTabs.scss';

export default {
  name: 'CdrTabs',
  mixins: [modifier, size],
  props: {
    height: {
      type: String,
      default: '240px',
    },
    activateTab: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      tabs: [],
      underlineOffsetX: 0,
      underlineWidth: 0,
      underlineScrollX: 0,
      activeTabIndex: 0,
      headerWidth: 0,
      headerOverflow: false,
      overflowLeft: false,
      overflowRight: false,
      animationInProgress: false,
      style,
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

    this.initActiveTabIndex();

    if (this.tabs[this.activeTabIndex] && this.tabs[this.activeTabIndex].setActive) {
      this.tabs[this.activeTabIndex].setActive(true);
    }

    this.$nextTick(() => {
      this.headerWidth = this.getHeaderWidth();
      this.calculateOverflow();
      setTimeout(() => {
        this.updateUnderline();
      }, 100);
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
    }, 250));
  },
  methods: {
    initActiveTabIndex() {
      if (this.activateTab) {
        if (!this.tabs[this.activateTab].disabled) {
          this.activeTabIndex = this.activateTab;
          return;
        }
      }

      this.activeTabIndex = this.getNextTab();
    },
    getNextTab(startIndex = 0) {
      for (let i = startIndex; i < this.tabs.length; i += 1) {
        if (!this.tabs[i].disabled) {
          return i;
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
      return -1;
    },
    handleClick: debounce(function handleClickCallback(tabClicked) {
      const newSelectedTab = this.tabs.find(tab => tabClicked.name === tab.name);
      this.tabs.forEach((tab, index) => {
        if (newSelectedTab.name === tab.name) {
          if (this.activeTabIndex < index) {
            tab.setAnimationDirection('fadein');
            this.tabs[this.activeTabIndex].setAnimationDirection('fadeout');
          } else {
            tab.setAnimationDirection('fadeout');
            this.tabs[this.activeTabIndex].setAnimationDirection('fadein');
          }
          this.activeTabIndex = index;
          this.hideScrollBar();
          this.$nextTick(() => tab.setActive(true));
        } else {
          this.$nextTick(() => tab.setActive(false));
        }
      });
      this.updateUnderline();
    }, 500, { leading: true, trailing: false }),
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
        this.underlineOffsetX = activeTab.offsetLeft
          - this.$refs.cdrTabsHeader.parentElement.scrollLeft;
        this.underlineWidth = activeTab.firstChild.offsetWidth;
      }
    },
    rightArrowNav() {
      if (!this.animationInProgress) {
        const nextTab = this.getNextTab(this.activeTabIndex + 1);
        if (nextTab !== -1) {
          this.tabs[this.activeTabIndex].setAnimationDirection('flyLeft');
          this.tabs[nextTab].setAnimationDirection('flyRight');
          this.hideScrollBar();
          this.$nextTick(this.tabs[this.activeTabIndex].setActive(false));
          this.activeTabIndex = nextTab;
          this.$nextTick(this.tabs[this.activeTabIndex].setActive(true));
        }
        this.navAnimationProgress();
      }
    },
    leftArrowNav() {
      if (!this.animationInProgress) {
        const previousTab = this.getPreviousTab(this.activeTabIndex - 1);
        if (previousTab !== -1) {
          this.tabs[this.activeTabIndex].setAnimationDirection('flyRight');
          this.tabs[previousTab].setAnimationDirection('flyLeft');
          this.hideScrollBar();
          this.$nextTick(this.tabs[this.activeTabIndex].setActive(false));
          this.activeTabIndex = previousTab;
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
    getTabEl(tab) {
      return tab.disabled ? (
        <span
          class={clsx(
            this.style['cdr-tabs__header-item-label'],
            this.style['cdr-tabs__header-item-label--disabled'],
          )}
          aria-disabled="true"
        >
          {tab.name}
        </span>
      ) : (
        <a
          role="tab"
          aria-selected={tab.active}
          vOn:click_prevent={e => this.handleClick(tab, e)}
          href={`#${tab.id || tab.name}`}
          class={this.style['cdr-tabs__header-item-label']}
        >
          { tab.name }
        </a>
      );
    },
  },
  render() {
    return (
      <div
        class={clsx(this.style[this.baseClass], this.modifierClass, this.sizeClass)}
        ref="cdrTabsContainer"
        style={{ height: this.height }}
      >
        <div
          class={clsx(
            this.overflowLeft ? this.style['cdr-tabs__header-gradient-left'] : '',
            this.overflowRight ? this.style['cdr-tabs__header-gradient-right'] : '',
            this.style['cdr-tabs__gradient-container'],
          )}
          vOn:keyup_right={this.rightArrowNav}
          vOn:keyup_left={this.leftArrowNav}
          vOn:keydown_down_prevent={this.handleDownArrowNav}
        >
          <nav
            class={clsx(
              this.overflowLeft ? this.style['cdr-tabs__header-gradient-left'] : '',
              this.overflowRight ? this.style['cdr-tabs__header-gradient-right'] : '',
              this.style['cdr-tabs__header-container'],
            )}
          >
            <ol
              class={this.style['cdr-tabs__header']}
              role="tablist"
              ref="cdrTabsHeader"
            >
              {this.tabs.map((tab, index) => (
                  <li
                    key={tab.id ? tab.id : `${tab.name}-${index}`}
                    class={clsx(
                      tab.active ? this.style['cdr-tabs__header-item-active'] : '',
                      this.style['cdr-tabs__header-item'],
                    )}
                  >
                    {this.getTabEl(tab)}
                  </li>
              ))}
            </ol>
          </nav>

          <div
            class={this.style['cdr-tabs__underline']}
            style={this.underlineStyle}
          />
        </div>
        <div
          class={this.style['cdr-tabs__content-container']}
          ref="slotWrapper"
        >
          {this.$slots.default}
        </div>
      </div>
    );
  },
};
