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
      closed: null,
      opened: null,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-toast';
    },
    borderClass() {
      return this.modifyClassName(this.baseClass, this.type);
    },
    iconClass() {
      return this.modifyClassName(`${this.baseClass}__icon-left`, this.type);
    },
    themeClass() {
      return this.modifyClassName(`${this.baseClass}__main`, this.type);
    },
  },
  watch: {
    open(newValue, oldValue) {
      if (!!newValue === !!oldValue) return;
      if (newValue) {
        this.openToast();
      } else {
        this.closeToast();
      }
    },
  },
  methods: {
    openToast() {
      this.closed = false;
      this.opened = true;
      if (this.autoDismiss) {
        setTimeout(this.closeToast, this.dismissDelay);
      }
    },
    closeToast() {
      this.opened = false;
      this.closed = true;
    },

  },
  render() {
    return (
      <transition
        enter-class={clsx(this.style['cdr-toast--toast-enter'])}
        enter-active-class={clsx(this.style['cdr-toast--toast-enter-active'])}
        leave-to-class={clsx(this.style['cdr-toast--toast-leave-to'])}
        leave-active-class={clsx(this.style['cdr-toast--toast-leave-active'])}
      >
        { this.opened
          ? <div
              class={clsx(
                this.style[this.baseClass],
                this.borderClass,
              )}
            >
          <div class={clsx(this.style['cdr-toast__main'], this.themeClass)}>
            { this.$slots['icon-left'] && (
                  <div class={clsx(this.style['cdr-toast__icon-left'], this.iconClass)}>
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
