import clsx from 'clsx';
import modifier from '../../mixins/modifier';
import fullWidth from '../../mixins/fullWidth';
import space from '../../mixins/space';
import style from './styles/CdrCta.scss';

export default {
  name: 'CdrCta',
  mixins: [modifier, space, fullWidth],
  props: {
    /**
      * Change the color of the cdr-cta button match different themes.
      */
    ctaStyle: {
      type: String,
      default: 'dark',
      /* istanbul ignore next */
      validator: value => (['brand', 'dark', 'light', 'sale'].indexOf(value) >= 0) || false,
    },
    href: {
      type: String,
      default: '#',
    },
    /** @ignore */
    target: String,
    /** @ignore */
    rel: String,
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-cta';
    },
    ctaClass() {
      return this.modifyClassName(this.baseClass, this.ctaStyle);
    },
    computedRel() {
      if (this.target === '_blank') {
        return this.rel || 'noopener noreferrer';
      }
      return this.rel;
    },
  },
  render() {
    return (<a
      class={clsx(
        this.modifierClass,
        this.ctaClass,
        this.fullWidthClass,
        this.space,
      )}
      target={this.target}
      rel={this.computedRel}
      href={this.href}
    >
      {this.$slots.default}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        role="presentation"
        class={this.style['cdr-cta__icon']}
      >
        {/* eslint-disable-next-line max-len */}
        <path d="M16 12a.997.997 0 0 0-.288-.702l-5.005-5.005a1 1 0 0 0-1.414 1.414L13.585 12 9.29 16.295a1 1 0 0 0 1.417 1.412l4.98-4.98A.997.997 0 0 0 16 12z" />
      </svg>
    </a>);
  },
};
