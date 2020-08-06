import clsx from 'clsx';
import tabbable from 'tabbable';
import style from './styles/CdrPopover.scss';
import propValidator from '../../utils/propValidator';
import IconXSm from '../icon/comps/x-sm';
import CdrButton from '../button/CdrButton';

// for corner cases, im centering the arrow and aligning the popup to the container edge.
// - Can offset pretty easily if desired

// do we need to handle hovering over an opened tooltip? c1 popover doesn't do that http://patterns.rei.com/modules/tool-tips/

// CSS arrows don't get box-shadow
// - could theoretically drop in a double arrow SVG instead of the CSS arrows

// need to create a token or value for "tooltip" background,
// - currently using cta/button-dark for background, text-inverse for color

// binding a tooltip is funky. vue directive?

export default {
  name: 'CdrPopover',
  components: {
    IconXSm,
    CdrButton,
  },
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      required: false,
      validator: (value) => propValidator(
        value,
        ['up', 'down', 'left', 'right'],
      ),
    },
    autoPosition: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    // TODO: fix spacing/layout if tooltip
    trigger: {
      type: String,
      default: 'popover',
    },
  },
  data() {
    return {
      style,
      lastActive: undefined,
      keyHandler: undefined,
      clickHandler: undefined,
      pos: this.position,
      corner: undefined,
    };
  },
  computed: {
    positionClass() {
      return this.style[`cdr-popover__wrapper--${this.pos}`];
    },
    cornerClass() {
      return this.corner ? this.style[`cdr-popover__corner--${this.corner}`] : undefined;
    },
    triggerClass() {
      return this.style[`cdr-popover--${this.trigger}`];
    },
  },
  watch: {
    position() {
      this.pos = this.position;
    },
    opened(newValue, oldValue) {
      if (!!newValue === !!oldValue) return;
      if (newValue) {
        this.handleOpened();
      } else {
        this.handleClosed();
      }
    },
  },
  destroyed() {
    document.removeEventListener('keydown', this.keyHandler);
    document.removeEventListener('click', this.clickHandler);
  },
  methods: {
    closePopover(e) {
      this.$emit('closed', e);
    },
    handleKeyDown({ key }) {
      switch (key) {
        case 'Escape':
        case 'Esc':
          this.closePopover();
          break;
        default: break;
      }
    },
    handleClick({ target }) {
      this.$nextTick(() => {
        if (target !== this.$refs.popover && !this.$refs.popover.contains(target)) {
          this.closePopover();
        }
      });
    },
    addHandlers() {
      this.keyHandler = this.handleKeyDown.bind(this);
      document.addEventListener('keydown', this.keyHandler);
      this.clickHandler = this.handleClick.bind(this);
      document.addEventListener('click', this.clickHandler);
    },
    calculatePlacement() {
      const rect = this.$refs.popover.getBoundingClientRect();
      if (this.pos === 'down' && rect.bottom >= window.innerHeight) {
        this.pos = 'up';
      } else if (this.pos === 'up' && rect.top <= 0) {
        this.pos = 'down';
      } else if (this.pos === 'left' && rect.left <= 0) {
        this.pos = 'right';
      } else if (this.pos === 'right' && rect.right >= window.innerWidth) {
        this.pos = 'left';
      }

      const orientation = this.pos === 'down' || this.pos === 'up' ? 'vertical' : 'horizontal';

      if (orientation === 'vertical' && rect.left <= 0) {
        this.corner = 'left';
      } else if (orientation === 'vertical' && rect.right >= window.innerWidth) {
        this.corner = 'right';
      } else if (orientation === 'horizontal' && rect.top <= 0) {
        this.corner = 'top';
      } else if (orientation === 'horizontal' && rect.bottom >= window.innerHeight) {
        this.corner = 'bottom';
      }
    },
    handleOpened() {
      const { activeElement } = document;

      this.lastActive = activeElement;

      this.pos = this.position;
      this.corner = undefined;
      if (this.autoPosition) {
        this.$nextTick(() => {
          this.calculatePlacement();
        });
      }

      setTimeout(() => {
        this.addHandlers();
        if (this.trigger === 'popover') {
          const tabbables = tabbable(this.$refs.popover);
          if (tabbables[0]) tabbables[0].focus();
        }
      }, 1);
    },
    handleClosed() {
      document.removeEventListener('keydown', this.keyHandler);
      document.removeEventListener('click', this.clickHandler);
      if (this.lastActive && this.trigger === 'popover') this.lastActive.focus();
    },
  },
  render() {
    return this.opened ? (
      <div class={clsx(
        this.style['cdr-popover__wrapper'],
        this.positionClass,
        this.cornerClass,
        this.triggerClass,
      )}
      >
        <div
          class={this.style['cdr-popover']}
          role="dialog"
          ref="popover"
          {... { attrs: this.$attrs } }
        >
          <div class={this.style['cdr-popover__container']}>
            <div class={this.style['cdr-popover__content']}>
              {
                (this.$slots.title || this.label) && (
                  <div class={this.style['cdr-popover__title']}>
                    {
                      this.$slots.title
                    }
                    {
                      !this.$slots.title && this.label && (
                        <span>
                          {this.label}
                        </span>
                      )
                    }
                  </div>
                )
              }

              <div class={this.style['cdr-popover__slot']}>
                {this.$slots.default}
              </div>
            </div>
            {
              this.trigger === 'popover' && (<cdr-button
                class={this.style['cdr-popover__close-button']}
                icon-only
                on-click={this.closePopover}
                aria-label="Close"
                size="small"
              >
                <icon-x-sm
                  slot="icon"
                  inherit-color
                />
              </cdr-button>)
            }
          </div>
        </div>
        <div class={this.style['cdr-popover__arrow']}/>
      </div>
    ) : undefined;
  },
};
