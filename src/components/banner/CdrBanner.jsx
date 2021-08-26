import clsx from 'clsx';
import propValidator from '../../utils/propValidator';
import BuildClass from '../../mixins/buildClass';
import style from './styles/CdrBanner.scss';

export default {
  name: 'CdrBanner',
  mixins: [BuildClass],
  props: {
    type: {
      type: String,
      validator: (value) => propValidator(
        value,
        ['info', 'warning', 'success', 'error'],
      ),
      default: 'info',
    },
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-banner';
    },
    borderClass() {
      return this.modifyClassName(this.baseClass, this.type);
    },
    iconClass() {
      return this.modifyClassName(`${this.baseClass}__icon-left`, this.type);
    },
    mainTheme() {
      return this.modifyClassName(`${this.baseClass}__main`, this.type);
    },
    prominenceClass() {
      return this.$slots['message-body']
        ? this.modifyClassName(`${this.baseClass}__wrapper`, 'prominence')
        : undefined;
    },
    noMsgBodyClass() {
      return !this.$slots['message-body']
        ? this.modifyClassName(`${this.baseClass}__main`, 'no-msg')
        : undefined;
    },
  },
  render() {
    return (
      <div class={clsx(this.style[this.baseClass], this.borderClass)}>
        <div class={clsx(this.style['cdr-banner__wrapper'], this.prominenceClass)}>
          <div class={clsx(this.style['cdr-banner__main'], this.mainTheme, this.noMsgBodyClass)}>
            {this.$slots['icon-left'] && (
              <div class={clsx(this.style['cdr-banner__icon-left'], this.iconClass)}>
                {this.$slots['icon-left']}
              </div>
            )}
            <span class={this.style['cdr-banner__message']}>
              { this.$slots.default }
            </span>
            {this.$slots['icon-right'] && (
              <div class={this.style['cdr-banner__icon-right']}>
                {this.$slots['icon-right']}
              </div>
            )}
          </div>
          {this.$slots['message-body'] && (
            <div class={this.style['cdr-banner__message-body']}>
              {this.$slots['message-body']}
            </div>
          )}
        </div>
        {this.$slots['info-action'] && (
          <div class={this.style['cdr-banner__info-action']}>
            {this.$slots['info-action']}
          </div>
        )}
      </div>
    );
  },
};
