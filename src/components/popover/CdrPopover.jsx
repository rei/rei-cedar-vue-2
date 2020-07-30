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
    arrowDirection: {
      type: String,
      required: false,
      default: 'up',
      validator: (value) => propValidator(
        value,
        ['up', 'down', 'left', 'right'],
      ),
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
    };
  },
  computed: {
    arrowDirectionClass() {
      return this.arrowDirection ? this.style[`cdr-popover__arrow--${this.arrowDirection}`] : '';
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
    handleOpened() {
      const { activeElement } = document;

      this.lastActive = activeElement;
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
        class={clsx(this.style['cdr-popover'], this.arrowDirectionClass)}
        role="dialog"
        ref="popover"
      >
        <div class={this.style['cdr-popover__header']}>
          <div class={this.style['cdr-popover__title']}>
            {
              this.$slots.title
            }
            {
              !this.$slots.title && (
                <span>
                  {this.label}
                </span>
              )
            }
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
        {this.$slots.default}
      </div>
    ) : undefined;
  },
};
