import debounce from 'lodash-es/debounce';
import clsx from 'clsx';
import { CdrSpaceOneX } from '@rei/cdr-tokens';
import modifier from '../../mixins/modifier';
import CdrButton from '../button/CdrButton';
import CdrIcon from '../icon/CdrIcon';
import size from '../../mixins/size';
import style from './styles/CdrTabs.scss';

export default {
  name: 'CdrTabs',
  components: {
    CdrButton,
    CdrIcon,
  },
  mixins: [modifier, size],
  props: {
    height: {
      type: String,
      default: '240px',
    },
    activeTab: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      tabs: [],
      underlineOffsetX: 0,
      underlineWidth: 0,
      underlineScrollX: 0,
      overflowScrollX: 0,
      activeTabIndex: 0,
      pages: [],
      pageIndex: 0,
      headerWidth: 0,
      headerScrollWidth: 0,
      tabPages: {},
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
    headerOverflow() {
      return this.headerScrollWidth > this.headerWidth;
    },
    leftPosition() {
      return this.pageIndex ? `-${this.pages[this.pageIndex].offsetLeft}` : 0;
    },
    overflowLeft() {
      return this.pages.length > 0 && this.pageIndex !== 0;
    },
    overflowRight() {
      return this.pages.length > 0 && this.pageIndex !== this.pages.length - 1;
    },
  },
  mounted() {
    this.tabs = (this.$slots.default || [])
      .map(vnode => vnode.componentInstance)
      .filter(tab => tab); // get vue component children in the slot

    this.activeTabIndex = this.getNextTab(this.activeTab);

    if (this.tabs[this.activeTabIndex] && this.tabs[this.activeTabIndex].setActive) {
      this.tabs[this.activeTabIndex].setActive(true);
    }

    this.$nextTick(() => {
      this.calculateOverflow();
      this.updateUnderline();
    });
    // Check for header overflow on window resize for gradient behavior.
    window.addEventListener('resize', debounce(() => {
      this.calculateOverflow();
      this.updateUnderline();
    }, 500));
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
      const newIndex = this.tabs.findIndex(tab => tabClicked.name === tab.name);
      this.changeTab(newIndex);
    }, 500, { leading: true, trailing: false }),
    changeTab(newIndex) {
      const oldIndex = this.activeTabIndex;

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
      this.$refs.cdrTabsHeader.children[this.activeTabIndex].children[0].focus();
    },
    rightArrowNav: debounce(function handleRightArrow() {
      const nextTab = this.getNextTab(this.activeTabIndex + 1);
      const nextTabPage = this.tabPages[nextTab];

      if (nextTabPage !== this.pageIndex) {
        this.underlineWidth = 0;
        this.pageIndex = nextTabPage;
      }
      this.changeTab(nextTab);
    }, 300, { leading: true, trailing: false }),
    leftArrowNav: debounce(function handleLeftArrow() {
      const previousTab = this.getPreviousTab(this.activeTabIndex - 1);
      const previousTabPage = this.tabPages[previousTab];

      if (previousTabPage !== this.pageIndex) {
        this.underlineWidth = 0;
        this.pageIndex = previousTabPage;
      }
      this.changeTab(previousTab);
    }, 300, { leading: true, trailing: false }),
    slideRight() {
      this.pageIndex += 1;
    },
    slideLeft() {
      this.pageIndex -= 1;
    },
    calculateOverflow() {
      if (this.$refs.cdrTabsHeader) {
        this.headerWidth = this.$refs.cdrTabsHeader.offsetWidth;
        this.headerScrollWidth = this.$refs.cdrTabsHeader.scrollWidth;
      }

      if (this.headerOverflow) this.calculatePagination();
      this.updateUnderline();
    },
    calculatePagination() {
      let width = 0; // determines when new page occurs
      let totalWidth = 0; // total width of elements calculated
      const headerElements = Array.from(this.$refs.cdrTabsHeader.children); // tabs
      const endPage = this.headerScrollWidth - this.headerWidth; // end scroll position is known
      const tabSpace = Number(CdrSpaceOneX); // space between each tab
      const buttonSize = this.$refs.slideRight
        ? this.$refs.slideRight.$el.offsetWidth : this.$refs.slideLeft.offsetWidth;
      const pages = [{ tabIndex: 0, offsetLeft: 0 }]; // beginning scroll position is known
      const tabPages = {};

      for (let i = 0; i < headerElements.length; i += 1) {
        /*
          buttonSpace will double if there are going to be both left and right pagination buttons
        */
        const buttonSpace = pages.length < 2 ? buttonSize : buttonSize * 2;
        const elem = headerElements[i];

        width += elem.offsetWidth; // add elem width but not margin for checks

        if (width > this.headerWidth - buttonSpace) {
          // we have a new page!

          if ((this.headerScrollWidth - totalWidth) < (this.headerWidth - buttonSize)) {
            // there is less that one page remaining!
            pages.push({ tabIndex: i, offsetLeft: endPage });

            // add remaining items to tabPages
            for (let k = i; k < headerElements.length; k += 1) {
              tabPages[k] = pages.length - 1;
            }
            break;
          }

          // more than one page remaining
          pages.push({ tabIndex: i, offsetLeft: elem.offsetLeft - buttonSize }); // align where left scroll button ends
          width = elem.offsetWidth; // reset for new page
        }

        width += tabSpace; // add margin for [i] element
        totalWidth += (elem.offsetWidth + tabSpace);

        tabPages[i] = pages.length - 1;
      }

      this.pages = pages;
      this.tabPages = tabPages;
      this.pageIndex = this.tabPages[this.activeTabIndex];
    },
    updateUnderline() {
      console.log('updateUnderline');
      const elements = Array.from(this.$refs.cdrTabsHeader.children);
      if (elements.length > 0) {
        const activeTab = elements[this.activeTabIndex];
        this.underlineOffsetX = activeTab.offsetLeft + Number(this.leftPosition);
        this.underlineWidth = this.tabPages[this.activeTabIndex] !== this.pageIndex
          ? 0 : activeTab.firstChild.offsetWidth;
      }
    },
    animationEnd(event) {
      if (event.propertyName === 'left') {
        this.updateUnderline();
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
    getTabEl(tab) {
      return tab.disabled ? (
        <span
          class={clsx(
            this.style['cdr-tabs__header-item-label'],
            this.style['cdr-tabs__header-item-label--disabled'],
          )}
          aria-disabled="true"
          aria-selected="false"
        >
          {tab.name}
        </span>
      ) : (
        <a
          tabIndex={tab.active ? 0 : -1}
          vOn:click_prevent={e => this.handleClick(tab, e)}
          href={`#${tab.id}`}
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
        vOn:transitionend={this.animationEnd}
      >
        <div
          class={clsx(
            this.style['cdr-tabs__gradient-container'],
          )}
          vOn:keyup_right={this.rightArrowNav}
          vOn:keyup_left={this.leftArrowNav}
          vOn:keydown_down_prevent={this.handleDownArrowNav}
        >
          <cdr-button
            icon-only
            with-background={true}
            aria-label=""
            tabIndex="-1"
            vOn:click={this.slideLeft}
            ref="slideLeft"
            class={clsx(
              this.style['cdr-tabs__button'],
              this.style['cdr-tabs__nav-scroll-left'],
              { 'cdr-tabs__button--active': this.overflowLeft },
            )}
          >
            <cdr-icon
              use="#caret-left"
              inherit-color
              slot="icon"
              class="cdr-button__icon"
            />
          </cdr-button>

          <cdr-button
            icon-only
            with-background={true}
            aria-label=""
            tabIndex="-1"
            vOn:click={this.slideRight}
            ref="slideRight"
            class={clsx(
              this.style['cdr-tabs__button'],
              this.style['cdr-tabs__nav-scroll-right'],
              { 'cdr-tabs__button--active': this.overflowRight },
            )}
          >
            <cdr-icon
              use="#caret-right"
              inherit-color
              slot="icon"
              class="cdr-button__icon"
            />
          </cdr-button>

          <nav
            class={clsx(
              this.style['cdr-tabs__header-container'],
            )}
            ref="cdrTabsHeaderContainer"
          >
            <ol
              class={this.style['cdr-tabs__header']}
              role="tablist"
              ref="cdrTabsHeader"
              style={ { left: `${this.leftPosition}px` } }
            >
              {this.tabs.map(tab => (
                  <li
                    role="tab"
                    aria-selected={tab.active}
                    aria-disabled="false"
                    aria-controls={tab.id}
                    id={tab.ariaLabelledby}
                    key={tab.id}
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
