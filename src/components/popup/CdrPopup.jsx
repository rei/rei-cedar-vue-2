import clsx from 'clsx';
import style from './styles/CdrPopup.scss';
import propValidator from '../../utils/propValidator';

export default {
  name: 'CdrPopup',
  inheritAttrs: false,
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      required: false,
      default: 'up',
      validator: (value) => propValidator(
        value,
        ['up', 'down', 'left', 'right'],
      ),
    },
    autoPosition: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      style,
      keyHandler: undefined,
      clickHandler: undefined,
      pos: this.position,
      corner: undefined,
    };
  },
  computed: {
    positionClass() {
      return this.style[`cdr-popup--${this.pos}`];
    },
    cornerClass() {
      return this.corner ? this.style[`cdr-popup--corner-${this.corner}`] : undefined;
    },
    openClass() {
      return this.opened ? this.style['cdr-popup--open'] : undefined;
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
    closePopup(e) {
      this.$emit('closed', e);
    },
    handleKeyDown({ key }) {
      switch (key) {
        case 'Escape':
        case 'Esc':
          this.closePopup();
          break;
        default: break;
      }
    },
    handleClick({ target }) {
      this.$nextTick(() => {
        if (target !== this.$refs.popup && !this.$refs.popup.contains(target)) {
          this.closePopup();
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
      const rect = this.$refs.popup.getBoundingClientRect();
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
      this.pos = this.position;
      this.corner = undefined;
      
      if (this.autoPosition) {
        this.$nextTick(() => {
          this.calculatePlacement();
        });
      }

      setTimeout(() => {
        this.addHandlers();
      }, 1);
    },
    handleClosed() {
      document.removeEventListener('keydown', this.keyHandler);
      document.removeEventListener('click', this.clickHandler);
    },
  },
  render() {
    return (
      <div class={clsx(
        this.style['cdr-popup'],
        this.openClass,
        this.positionClass,
        this.cornerClass,
      )}
      >
        <div
          class={this.style['cdr-popup__content']}
          ref="popup"
          {... { attrs: this.$attrs } }
        >
          { this.$slots.default }
        </div>
        <div class={this.style['cdr-popup__arrow']}/>
      </div>
    );
  },
};
