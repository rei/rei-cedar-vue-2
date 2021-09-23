import clsx from 'clsx';
import propValidator from '../../utils/propValidator';
import BuildClass from '../../mixins/buildClass';
import IconXSm from '../icon/comps/x-sm';
import CdrButton from '../button/CdrButton';
import style from './styles/CdrToast.scss';

export default {
  name: 'CdrToast',
  components: {
    CdrButton,
    IconXSm,
  },
  mixins: [BuildClass],
  props: {
    type: {
      type: String,
      validator: (value) => propValidator(
        value,
        ['info', 'warning', 'success', 'error', 'default'],
      ),
      default: 'default',
    },
    open: {
      type: Boolean,
      default: false,
    },
    autoDismiss: {
      type: Boolean,
      default: true,
    },
    dismissDelay: {
      type: Number,
      default: 5000,
    },
  },
  data() {
    return {
      style,
      opened: undefined,
      timeout: undefined,
      openHandler: undefined,
      closeHandler: undefined,
      toastElement: undefined,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-toast';
    },
    typeClass() {
      return this.modifyClassName(this.baseClass, this.type);
    },
  },
  watch: {
    open() {
      if (this.open) {
        this.openToast();
      }
    },
  },
  updated() {
    this.addHandlers();
  },
  beforeDestroy() {
    this.removeHandlers();
  },
  methods: {
    openToast(e) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      } else {
        this.$emit('open', e);
      }
      this.opened = true;
      if (this.autoDismiss && !e) {
        this.closeToastWithDelay();
      }
    },
    closeToast(e) {
      this.removeHandlers();
      this.opened = false;
      this.$emit('closed', e);
    },
    closeToastWithDelay(e) {
      this.timeout = setTimeout(() => {
        this.removeHandlers();
        this.opened = false;
        this.$emit('closed', e);
      }, this.dismissDelay);
    },
    addHandlers() {
      this.openHandler = this.openToast.bind(this);
      this.closeHandler = this.closeToastWithDelay.bind(this);
      this.toastElement = this.$refs.toastEl;
      if (this.toastElement) {
        this.toastElement.addEventListener('mouseover', this.openHandler);
        this.toastElement.addEventListener('mouseleave', this.closeHandler);
      }
    },
    removeHandlers() {
      if (this.toastElement) {
        this.toastElement.removeEventListener('mouseover', this.openHandler);
        this.toastElement.removeEventListener('mouseleave', this.closeHandler);
      }
    },
  },
  render() {
    return (
      <transition
        enter-class={clsx(this.style['cdr-toast__transition--toast-enter'])}
        enter-active-class={clsx(this.style['cdr-toast__transition--toast-enter-active'])}
        leave-to-class={clsx(this.style['cdr-toast__transition--toast-leave-to'])}
        leave-active-class={clsx(this.style['cdr-toast__transition--toast-leave-active'])}
      >
        { this.opened
          ? <div
              class={clsx(
                this.style[this.baseClass],
                this.typeClass,
              )}
              ref="toastEl"
            >
          <div class={clsx(this.style['cdr-toast__main'])}>
            { this.$slots['icon-left'] && (
                  <div class={clsx(this.style['cdr-toast__icon-left'])}>
                    {this.$slots['icon-left'] }
                  </div>
            )}
            <span class={this.style['cdr-toast__message']}>
              { this.$slots.default }
            </span>
            <cdr-button
                class={this.style['cdr-toast__close-button']}
                icon-only
                on-click={ this.closeToast }
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
          : null }
    </transition>
    );
  },
};
