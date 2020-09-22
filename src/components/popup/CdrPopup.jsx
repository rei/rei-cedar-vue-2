import clsx from 'clsx';
import debounce from 'lodash-es/debounce';
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
      resizeHandler: undefined,
      pos: this.position,
      corner: undefined,
      exiting: false,
      popupRect: undefined,
      closed: !this.opened,
    };
  },
  computed: {
    positionClass() {
      return this.opened || this.exiting ? this.style[`cdr-popup--${this.pos}`] : undefined;
    },
    cornerClass() {
      return this.corner ? this.style[`cdr-popup--corner-${this.corner}`] : undefined;
    },
    openClass() {
      return this.opened ? this.style['cdr-popup--open'] : undefined;
    },
    closedClass() {
      return this.closed && !this.exiting ? this.style['cdr-popup--closed'] : undefined;
    },
    exitingClass() {
      return this.exiting ? this.style['cdr-popup--exit'] : undefined;
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
  mounted() {
    this.measurePopup();

    this.resizeHandler = this.handleResize.bind(this);
    window.addEventListener('resize', this.resizeHandler);
  },
  destroyed() {
    document.removeEventListener('keydown', this.keyHandler);
    document.removeEventListener('click', this.clickHandler);
    window.removeEventListener('resize', this.resizeHandler);
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
    handleResize() {
      debounce(() => {
        this.measurePopup();
      }, 300);
    },
    addHandlers() {
      this.keyHandler = this.handleKeyDown.bind(this);
      document.addEventListener('keydown', this.keyHandler);
      this.clickHandler = this.handleClick.bind(this);
      document.addEventListener('click', this.clickHandler);
    },
    measurePopup() {
      this.closed = false;
      this.$nextTick(() => {
        this.popupRect = this.$refs.popup.getBoundingClientRect();
        this.closed = true;
      });
    },
    calculatePlacement(triggerRect, popupRect, screenWidth, screenHeight) {
      const offset = 14; // 10px for arrow 4px for spacing
      const borderSize = 2; // need to include border for corner calculations
      const triggerCenterY = triggerRect.top + (triggerRect.height / 2);
      const triggerCenterX = triggerRect.left + (triggerRect.width / 2);

      const dirs = {
        up: triggerRect.top - popupRect.height - offset,
        down: screenHeight - triggerRect.bottom - popupRect.height - offset,
        left: triggerRect.left - popupRect.width - offset,
        right: screenWidth - triggerRect.right - popupRect.width - offset,
      };

      const corners = {
        left: triggerCenterX - (popupRect.width / 2) - borderSize <= 0,
        right: triggerCenterX + (popupRect.width / 2) + borderSize >= screenWidth,
        top: triggerCenterY - (popupRect.height / 2) - borderSize <= 0,
        bottom: triggerCenterY + (popupRect.height / 2) + borderSize >= screenHeight,
      };

      const invert = {
        up: 'down',
        down: 'up',
        left: 'right',
        right: 'left',
      };

      const inverse = invert[this.position];
      const validDirs = Object.keys(dirs).filter((dir) => dirs[dir] > 0);
      const sortedDirs = Object.keys(dirs).sort((a, b) => {
        if (dirs[a] > dirs[b]) {
          return -1;
        } if (dirs[a] < dirs[b]) {
          return 1;
        }
        return 0;
      });

      if (dirs[this.position] > 0) {
        // selected position is valid, or no positions are valid
        this.pos = this.position;
      } else if (dirs[inverse] > 0) {
        // inverted position is valid
        this.pos = inverse;
      } else if (validDirs.length) {
        // try the angles
        [this.pos] = validDirs;
      } else {
        // use whichever direction has the most space
        [this.pos] = sortedDirs;
      }

      if (this.pos === 'down' || this.pos === 'up') {
        if (corners.left) {
          this.corner = 'left';
        } else if (corners.right) {
          this.corner = 'right';
        }
      } else if (corners.top) {
        this.corner = 'top';
      } else if (corners.bottom) {
        this.corner = 'bottom';
      }
    },
    handleOpened() {
      this.closed = false;
      this.pos = this.position;
      this.corner = undefined;

      if (this.autoPosition) {
        this.$nextTick(() => {
          const triggerRect = this.$el.parentElement.getBoundingClientRect();
          const { popupRect } = this;
          const { innerHeight, innerWidth } = window;
          this.calculatePlacement(triggerRect, popupRect, innerWidth, innerHeight);
        });
      }

      setTimeout(() => {
        this.addHandlers();
      }, 1);
    },
    handleClosed() {
      this.closed = true;
      document.removeEventListener('keydown', this.keyHandler);
      document.removeEventListener('click', this.clickHandler);
      this.exiting = true;
      setTimeout(() => {
        this.exiting = false;
      }, 200); // $cdr-duration-2;
    },
  },
  render() {
    return (
      <div class={clsx(
        this.style['cdr-popup'],
        this.openClass,
        this.exitingClass,
        this.positionClass,
        this.cornerClass,
        this.closedClass,
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
