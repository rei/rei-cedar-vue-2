import debounce from 'lodash-es/debounce';
import delay from 'lodash-es/delay';
import clsx from 'clsx';
import modifier from '../../mixins/modifier';
import style from './styles/CdrTabs.scss';
import IconCaretLeft from '../icon/comps/caret-left';
import IconCaretRight from '../icon/comps/caret-right';

export default {
  name: 'CdrTabs',
  components: {
    IconCaretLeft,
    IconCaretRight
  },
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
      headerOffsetX: 0,
      headerScrollX: 0,
      headerWidth: 0,
      containerWidth: 0,
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
    headerStyle() {
      return {
        transform: `translateX(${this.headerOffsetX}px)`,
        width: `${this.headerWidth}px`,
      };
    },
    previousCaret() {
      // return <icon-caret-left class={this.style['cdr-tabs__previous-caret']} /> ;
      return this.overflowLeft ? <button vOn:click_prevent={e => this.handlePreviousClick(e)}
          class={this.style['cdr-tabs__pagination-button']}>
          <icon-caret-left class={this.style['cdr-tabs__previous-caret']} />
        </button> : '';
    },
    nextCaret() {
      return this.overflowRight ? <button vOn:click_prevent={e => this.handleNextClick(e)}
          class={this.style['cdr-tabs__pagination-button']}>
          <icon-caret-right class={this.style['cdr-tabs__next-caret']} />
        </button> : '';
      // return <icon-caret-right class={this.style['cdr-tabs__next-caret']} /> ;
    }
  },
  mounted() {
    this.tabs = (this.$slots.default || [])
      .map(vnode => vnode.componentInstance)
      .filter(tab => tab); // get vue component children in the slot

    this.$nextTick(() => {
      this.initializeOffsets();
      this.headerWidth = this.getHeaderWidth();
      this.calculateOverflow();
      if (this.tabs[0] && this.tabs[0].setActive) this.tabs[0].setActive(true);
    });
    // Check for header overflow on window resize for gradient behavior.
    window.addEventListener('resize', debounce(() => {
      this.headerWidth = this.getHeaderWidth();
      this.calculateOverflow();
    }, 500));
    // Check for header overflow on widow resize for gradient behavior.
    this.$refs.cdrTabsHeader.parentElement.addEventListener('scroll', debounce((e) => {
      this.headerScrollX = e.srcElement.scrollLeft;
      console.log('scroll event fired on cdrTabsHeader.parentElement', e.srcElement.scrollLeft);
      this.calculateOverflow();
      this.updateUnderline();
      //this.headerOffsetX = this.headerOffsetX - e.target.element.leftScroll;
    }, 250));

  },
  methods: {
    handleClick(tabClicked) {
      const newSelectedTab = this.tabs.find(tab => tabClicked.name === tab.name);
      this.tabs.forEach((tab, index) => {
        if (newSelectedTab.name === tab.name) {
          if (this.activeTabIndex < index) {-
            tab.setAnimationDirection('flyRight');
            this.tabs[this.activeTabIndex].setAnimationDirection('flyLeft');
          } else {
            tab.setAnimationDirection('flyLeft');
            this.tabs[this.activeTabIndex].setAnimationDirection('flyRight');
          }
          this.activeTabIndex = index;
          // this.hideScrollBar();
          this.$nextTick(() => tab.setActive(true));
        } else {
          this.$nextTick(() => tab.setActive(false));
        }
      });
      this.updateUnderline();
    },
    handleNextClick(el) {
      // console.log('this.headerWidth = ', this.headerWidth);
      // console.log('this.containerWidth = ', this.containerWidth);
      // console.log('this.tabs = ', this.tabs);
      this.headerOffsetX = Math.max(
        this.headerOffsetX - this.containerWidth,
        (this.containerWidth - (this.headerWidth + 45)));
      this.updateUnderline();
      this.calculateOverflow();
    },
    handlePreviousClick(el) {
      console.log('this.headerWidth = ', this.headerWidth);
      console.log('this.tabs = ', this.tabs);
      this.headerOffsetX = Math.min(this.headerOffsetX + this.containerWidth, 0);
      this.updateUnderline();
      this.calculateOverflow();
    },
    initializeOffsets() {
      if (!this.widthInitialized && this.$refs.cdrTabsHeader.children.length > 0) {
        const elements = Array.from(this.$refs.cdrTabsHeader.children);
        this.underlineWidth = elements[0].children[0].offsetWidth;
        this.widthInitialized = true;
      }
    },
    calculateOverflow() {
      if (this.$refs.cdrTabsContainer) {
        this.containerWidth = this.$refs.cdrTabsContainer.offsetWidth;
      }
      console.log('calculateOverflow, headerOffsetX = ', this.headerOffsetX);
      console.log('calculateOverflow, this.headerWidth = ', this.headerWidth);
      console.log('calculateOverflow, this.containerWidth = ', this.containerWidth);
      this.overflowLeft = this.headerOffsetX - this.headerScrollX < 0;
      this.overflowRight = (this.headerWidth + (this.headerOffsetX - this.headerScrollX)) > this.containerWidth;
      // this.$nextTick(this.setFocusToActiveTabHeader());
    },
    updateUnderline() {
      const elements = Array.from(this.$refs.cdrTabsHeader.children);
      if (elements) {
        const activeTab = elements[this.activeTabIndex];
        this.underlineOffsetX = activeTab.offsetLeft
          + this.headerOffsetX - this.headerScrollX;
        this.underlineWidth = activeTab.firstChild.offsetWidth;
      }
    },
    rightArrowNav() {
      if (!this.animationInProgress) {
        if (this.activeTabIndex < (this.tabs.length - 1)) {
          this.tabs[this.activeTabIndex].setAnimationDirection('flyLeft');
          this.tabs[this.activeTabIndex + 1].setAnimationDirection('flyRight');
          // this.hideScrollBar();
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
          // this.hideScrollBar();
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
      console.log('setFocusToActiveTabHeader, children = ', this.$refs.cdrTabsHeader.children[this.activeTabIndex].children);
      this.$refs.cdrTabsHeader.children[this.activeTabIndex].children[0].focus();
    },
    getHeaderWidth() {
      let headerElements = [];
      if (this.$refs.cdrTabsHeader) {
        headerElements = Array.from(this.$refs.cdrTabsHeader.children);
        console.log('getHeaderWidth, headerElements = ', headerElements);
      }
      let totalWidth = 0;
      headerElements.forEach((element) => {
        totalWidth += element.offsetWidth || 0;
        console.log('getHeaderWidth, element = ', element.offsetWidth);
      });
      console.log('getHeaderWidth, totalWidth = ', totalWidth);
      return totalWidth;
    },
    // TODO: Look into getting rid of this as the pagination update should remove
    // need for this.
    // hideScrollBar() {
    //   // const styleRef = this.$refs.cdrTabsContainer.style;
    //   // window.addEventListener('transitionend', () => {
    //   //   styleRef.setProperty('overflow-x', 'unset');
    //   // }, { once: true });
    //   // styleRef.setProperty('overflow-x', 'hidden');
    // },
  },
  render() {
    return (
      <div
        class={this.modifierClass}
        ref="cdrTabsContainer"
        style={{ height: this.height }}
      >
        <div
          class={clsx(
            // this.overflowLeft ? this.style['cdr-tabs__header-gradient-left'] : '',
            // this.overflowRight ? this.style['cdr-tabs__header-gradient-right'] : '',
            this.style['cdr-tabs__gradient-container'],
          )}
          vOn:keyup_right={this.rightArrowNav}
          vOn:keyup_left={this.leftArrowNav}
          vOn:keydown_down_prevent={this.handleDownArrowNav}
        >
          {this.previousCaret}
          <nav
            class={clsx(
              // this.overflowLeft ? this.style['cdr-tabs__header-gradient-left'] : '',
              // this.overflowRight ? this.style['cdr-tabs__header-gradient-right'] : '',
              this.style['cdr-tabs__header-container'],
              )}
          >

            <ol
              class={this.style['cdr-tabs__header']}
              role="tablist"
              ref="cdrTabsHeader"
              style={this.headerStyle}
            >
              {this.tabs.map((tab, index) => (
                  <li
                    role="tab"
                    aria-selected={tab.active}
                    key={tab.id ? tab.id : `${tab.name}-${index}`}
                    class={clsx(
                      tab.active ? this.style['cdr-tabs__header-item-active'] : '',
                      this.style['cdr-tabs__header-item'],
                    )}
                  >
                    <a
                      vOn:click_prevent={e => this.handleClick(tab, e)}
                      href={tab.name}
                      class={this.style['cdr-tabs__header-item-label']}
                    >
                      { tab.name }
                    </a>
                  </li>
              ))}
            </ol>
            <div
              class={this.style['cdr-tabs__underline']}
              style={this.underlineStyle}
            />
          </nav>
          {this.nextCaret}
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
