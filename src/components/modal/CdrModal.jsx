import tabbable from 'tabbable';
import clsx from 'clsx';
import style from './styles/CdrModal.scss';
import onTransitionEnd from './onTransitionEnd';
import CdrButton from '../button/CdrButton';
import IconXLg from '../icon/comps/x-lg';
import CdrText from '../text/CdrText';
import size from '../../mixins/size';

export default {
  name: 'CdrModal',
  components: {
    CdrButton,
    IconXLg,
    CdrText,
  },
  mixins: [size],
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
      return `${this.style['cdr-modal__dialog']} ${this.size}`;
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
      this.addNoScroll();
      this.addHandlers();
    }
  },
  beforeDestroy() {
    if (this.unsubscribe) this.unsubscribe();
    if (this.opened) this.removeNoScroll();
    document.removeEventListener('focusin', this.focusHandler, true);
    document.removeEventListener('keydown', this.keyHandler);
  },
  methods: {
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
        this.$refs.modal.focus();
        this.addHandlers();

        setTimeout(() => {
          // for some reason Safari scrolls the wrapper down a bit?
          // doesn't work without setTimeout for some unknown reason
          this.$refs.wrapper.scrollTop = 0;
        });
      });
    },
    handleClosed() {
      document.removeEventListener('keydown', this.keyHandler);

      this.unsubscribe = onTransitionEnd(
        this.$refs.wrapper,
        () => {
          this.unsubscribe();
          this.removeNoScroll();
          this.unsubscribe = null;
          this.reallyClosed = true;

          // restore previous scroll position
          window.scrollTo(this.offset.x, this.offset.y);

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
      /*
        slots: title, pinnedContentSlot, scrollingContentSlot, footer
      */
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
        role="presentation"
      >
        <div class={clsx(this.style['cdr-modal__outerWrap'], wrapperClass)}>
          <div
            aria-hidden="true"
            onClick={onClick}
            class={clsx(this.style['cdr-modal__overlay'], overlayClass)}
          />
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
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
            {...{ attrs: this.dialogAttrs || {} }}
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
                  <div class={this.style['cdr-modal__header']}>
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
                      id="close-modal-button"
                      class={this.style['cdr-modal__close-button']}
                      icon-only={true}
                      on-click={onClick}
                      aria-label="close"
                    >
                      <IconXLg
                        slot="icon"
                        class={this.style['cdr-button__icon']}
                        inherit-color
                      />
                    </cdr-button>
                  </div>
                  {
                    this.$slots.stickyContentSlot && (
                      <div class={this.style['cdr-modal__sticky-content']}>
                        {this.$slots.stickyContentSlot}
                      </div>
                    )
                  }
                  <div
                    role="document"
                    tabindex="0"
                    class={this.style['cdr-modal__text']}
                  >
                    <div class={this.style['cdr-modal__text-content']}>
                      {this.$slots.scrollingContentSlot}
                    </div>
                    <div class={this.style['cdr-modal__text-fade']} />
                    {
                      this.$slots.footer && (
                        <div class={this.style['cdr-modal__footer']}>
                          {this.$slots.footer}
                        </div>
                      )
                    }
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
          <div tabIndex={opened ? '0' : undefined} />
        </div>
      </div>
    );
  },
};
