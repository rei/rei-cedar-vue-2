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
        ['info', 'warning', 'success', 'error', 'default'],
      ),
      default: 'default',
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
    typeClass() {
      return this.modifyClassName(this.baseClass, this.type);
    },
    prominenceClass() {
      return this.$slots['message-body']
        ? this.modifyClassName(`${this.baseClass}__wrapper`, 'prominence')
        : undefined;
    },
  },
  render() {
    return (
      <div class={clsx(this.style[this.baseClass], this.typeClass)}>
        <div class={clsx(this.style['cdr-banner__wrapper'], this.prominenceClass)}>
          <div class={clsx(this.style['cdr-banner__main'])}>
            {this.$slots['icon-left'] && (
              <div class={clsx(this.style['cdr-banner__icon-left'])}>
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
