import clsx from 'clsx';
import tabbable from 'tabbable';
import style from './styles/CdrPopover.scss';
import propValidator from '../../utils/propValidator';
import IconXSm from '../icon/comps/x-sm';
import CdrButton from '../button/CdrButton';

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
      return this.style[`cdr-popover__${this.pos}`];
    },
    cornerClass() {
      if (this.corner) return this.style[`cdr-popover__corner--${this.corner}`];
    }
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
      if (target !== this.$refs.popover && !this.$refs.popover.contains(target)) {
        this.closePopover();
      }
    },
    addHandlers() {
      this.keyHandler = this.handleKeyDown.bind(this);
      document.addEventListener('keydown', this.keyHandler);
      this.clickHandler = this.handleClick.bind(this);
      document.addEventListener('click', this.clickHandler);
    },
    calculatePlacement() {
      // Reset pos so size/position is calculated correctly
      this.pos = this.position;

      const rect = this.$el.getBoundingClientRect()
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
        this.corner = 'left'
        console.log('left corner')
      } else if (orientation === 'vertical' && rect.right >= window.innerWidth) {
        this.corner = 'right'
        console.log('right corner')
      } else if (orientation === 'horizontal' && rect.top <= 0) {
        this.corner = 'top'
        console.log('top corner')
      } else if (orientation === 'horizontal' && rect.bottom >= window.innerHeight) {
        this.corner = 'bottom'
        console.log('bottom corner')
      }

    },
    handleOpened() {
      const { activeElement } = document;

      this.lastActive = activeElement;
      // need setTimeout, otherwise the initial click on the trigger element gets handled by the clickHandler?!?!?!?
      this.$nextTick(() => {
        if (this.autoPosition) {
          this.calculatePlacement();
        }
      })

      setTimeout(() => {
        this.addHandlers();

        const tabbables = tabbable(this.$refs.popover);
        if (tabbables[0]) tabbables[0].focus();
      }, 1);

    },
    handleClosed() {
      document.removeEventListener('keydown', this.keyHandler);
      document.removeEventListener('click', this.clickHandler);
      if (this.lastActive) this.lastActive.focus();
    },
  },
  render() {
    return this.opened ? (
      <div
        class={clsx(this.style['cdr-popover'], this.positionClass, this.cornerClass)}
        role="dialog"
        ref="popover"
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
          <cdr-button
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
          </cdr-button>
        </div>
      </div>
    ) : undefined;
  },
};
