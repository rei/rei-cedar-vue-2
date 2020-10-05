import debounce from 'lodash-es/debounce';
import tabbable from 'tabbable';
import clsx from 'clsx';
import {
  CdrBreakpointSm, CdrSpaceOneX, CdrSpaceTwoX,
} from '@rei/cdr-tokens/dist/js/cdr-tokens.esm';
import style from './styles/CdrModal.scss';
import onTransitionEnd from './onTransitionEnd';
import CdrButton from '../button/CdrButton';
import IconXLg from '../icon/comps/x-lg';
import CdrText from '../text/CdrText';

export default {
  name: 'CdrModal',
  components: {
    CdrButton,
    IconXLg,
    CdrText,
  },
  props: {
    opened: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    showTitle: {
      type: Boolean,
      required: false,
      default: true,
    },
    ariaDescribedbBy: {
      type: String,
      required: false,
      default: null,
    },
    id: {
      type: String,
      required: false,
      default: null,
    },
    overlayClass: String,
    wrapperClass: String,
    contentClass: String,
    animationDuration: {
      type: Number,
      default: 300,
    },
  },
  data() {
    return {
      style,
      unsubscribe: null,
      keyHandler: null,
      lastActive: null,
      focusHandler: null,
      reallyClosed: !this.opened,
      offset: null,
      headerHeight: 0,
      totalHeight: 0,
      scrollHeight: 0,
      offsetHeight: 0,
      fullscreen: false,
    };
  },
  computed: {
    dialogAttrs() {
      return {
        'aria-describedby': this.ariaDescribedBy,
        'aria-modal': 'true',
        id: this.id,
      };
    },
    dialogClass() {
      return `${this.style['cdr-modal__dialog']}`;
    },
    verticalSpace() {
      // contentWrap vertical padding
      const fullscreen = Number(CdrSpaceTwoX);
      const windowed = Number(CdrSpaceTwoX) + Number(CdrSpaceOneX);

      return this.fullscreen
        ? fullscreen
        : windowed + fullscreen; // fullscreen, here, would account for outerWrap padding, which is the same CdrSpaceTwoX
    },
    scrollMaxHeight() {
      return this.totalHeight
        - this.headerHeight
        - this.verticalSpace;
    },
    scrolling() {
      return this.scrollHeight > this.offsetHeight;
    },
  },
  watch: {
    opened(newValue, oldValue) {
      if (!!newValue === !!oldValue) return;
      if (newValue) {
        this.handleOpened();
      } else {
        this.handleClosed();
      }
    },
  },
  mounted() {
    if (this.opened) {
      this.handleOpened();
    }

    window.addEventListener('resize', debounce(() => {
      this.measureContent();
    }, 300));
  },
  beforeDestroy() {
    if (this.unsubscribe) this.unsubscribe();
    if (this.opened) this.removeNoScroll();
    document.removeEventListener('focusin', this.focusHandler, true);
    document.removeEventListener('keydown', this.keyHandler);
  },
  methods: {
    measureContent() {
      this.$nextTick(() => {
        this.totalHeight = window.innerHeight;
        this.fullscreen = window.innerWidth < CdrBreakpointSm;
        this.headerHeight = this.$refs.header.offsetHeight;
        this.scrollHeight = this.$refs.content.scrollHeight;
        this.offsetHeight = this.$refs.content.offsetHeight;
      });
    },
    handleKeyDown({ key }) {
      switch (key) {
        case 'Escape':
        case 'Esc':
          this.onClick();
          break;
        default: break;
      }
    },
    handleFocus(e) {
      const { documentElement } = document;
      if (this.$refs.modal.contains(e.target) || !documentElement) return;

      const tabbables = tabbable(documentElement);
      const these = tabbable(this.$refs.modal);
      const nextIx = tabbables.indexOf(e.target);
      const firstModalIx = tabbables.indexOf(these[0]);
      const nextRef = nextIx < firstModalIx ? these[these.length - 1] : these[0];
      if (nextRef) nextRef.focus();

      documentElement.scrollTop = this.scrollTop;
      documentElement.scrollLeft = this.scrollLeft;
    },
    handleOpened() {
      const { activeElement } = document;

      this.addNoScroll();
      this.reallyClosed = false;
      this.lastActive = activeElement;

      this.$nextTick(() => {
        if (this.$refs.modal) this.$refs.modal.focus(); // wrapped in if so testing error isn't thrown
        this.measureContent();
        this.addHandlers();

        setTimeout(() => {
          // for some reason Safari scrolls the wrapper down a bit?
          // doesn't work without setTimeout for some unknown reason
          if (this.$refs.wrapper) this.$refs.wrapper.scrollTop = 0;

          // there is a race condition for measuring overflow when modal defaults to open,
          // this seems to cover that
          this.measureContent();
        });
      });
    },
    handleClosed() {
      const { documentElement } = document;
      document.removeEventListener('keydown', this.keyHandler);

      this.unsubscribe = onTransitionEnd(
        this.$refs.wrapper,
        () => {
          this.unsubscribe();
          this.removeNoScroll();
          this.unsubscribe = null;
          this.reallyClosed = true;

          // handle scroll-behavior: smooth
          if (documentElement) documentElement.style.scrollBehavior = 'auto';
          // restore previous scroll position
          window.scrollTo(this.offset.x, this.offset.y);
          if (documentElement) documentElement.style.scrollBehavior = '';

          document.removeEventListener('focusin', this.focusHandler, true);

          if (this.lastActive) this.lastActive.focus();
        },
        this.animationDuration + 16,
      );
    },
    addNoScroll() {
      const { documentElement, body } = document;
      const offset = {
        x: window.scrollX
          || (documentElement || {}).scrollLeft
          || (body || {}).scrollLeft
          || 0,
        y: window.scrollY
          || (documentElement || {}).scrollTop
          || (body || {}).scrollTop
          || 0,
      };
      this.offset = offset;

      if (documentElement) {
        documentElement.classList.add(style['cdr-modal__noscroll']);
        // keep current scroll position manually
        documentElement.style.top = `-${offset.y}px`;
        documentElement.style.left = `-${offset.x}px`;
      }

      if (body) {
        body.classList.add(style['cdr-modal__noscroll']);
      }
    },
    removeNoScroll() {
      const { documentElement, body } = document;

      if (body) {
        body.classList.remove(style['cdr-modal__noscroll']);
      }

      if (documentElement) {
        documentElement.classList.remove(style['cdr-modal__noscroll']);
        documentElement.style.top = '';
        documentElement.style.left = '';
      }
    },
    addHandlers() {
      this.focusHandler = this.handleFocus.bind(this);
      this.keyHandler = this.handleKeyDown.bind(this);
      document.addEventListener('focusin', this.focusHandler, true);
      document.addEventListener('keydown', this.keyHandler);
    },
    onClick(e) {
      this.$emit('closed', e);
    },
  },
  render() {
    const {
      onClick,
      modalId,
      opened,
      label,
      wrapperClass,
      overlayClass,
      dialogClass,
      contentClass,
      reallyClosed,
    } = this;
    return (
      <div
        class={clsx(
          this.style['cdr-modal'],
          {
            [this.style.closed]: !opened,
          },
        )}
        ref="wrapper"
      >
        <div class={clsx(this.style['cdr-modal__outerWrap'], wrapperClass)}>
          <div
            aria-hidden="true"
            onClick={onClick}
            class={clsx(this.style['cdr-modal__overlay'], overlayClass)}
          />
          <div tabIndex={opened ? '0' : undefined} />
          {/*
            this is the "uncommon case of an element that captures incoming tab traversal
            for a composite widget" mentioned in the rule docs
          */}
          <div
            ref="modal"
            class={clsx(this.style['cdr-modal__contentWrap'], dialogClass)}
            id={modalId}
            tabIndex="-1"
            role="dialog"
            aria-modal={!!opened}
            aria-label={label}
            {...{ attrs: this.dialogAttrs }}
          >
            <div
              class={clsx(this.style['cdr-modal__innerWrap'], contentClass)}
              style={reallyClosed
                ? { display: 'none' }
                : undefined
              }
            >
              <section>
                <div class={this.style['cdr-modal__content']}>
                  <div
                    class={this.style['cdr-modal__header']}
                    ref="header"
                  >
                    <div class={this.style['cdr-modal__title']}>
                      {
                        this.showTitle && this.$slots.title
                      }
                      {
                        this.showTitle && !this.$slots.title && (
                          <cdr-text
                            tag="h1"
                            modifier="heading-serif-600"
                          >
                            {this.label}
                          </cdr-text>
                        )
                      }
                    </div>
                    <cdr-button
                      class={this.style['cdr-modal__close-button']}
                      icon-only
                      with-background={true}
                      on-click={onClick}
                      aria-label="Close"
                    >
                      <IconXLg
                        slot="icon"
                        inherit-color
                      />
                    </cdr-button>
                  </div>
                  <div
                    role="document"
                    class={this.style['cdr-modal__text']}
                  >
                    <div
                      class={this.style['cdr-modal__text-content']}
                      style={ { maxHeight: `${this.scrollMaxHeight}px` } }
                      ref="content"
                      tabindex="0"
                    >
                      {this.$slots.default}
                    </div>
                    {
                      this.scrolling && (
                        <div
                        class={this.style['cdr-modal__text-fade']}
                      />
                      )
                    }
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div tabIndex={opened ? '0' : undefined} />
        </div>
      </div>
    );
  },
};
