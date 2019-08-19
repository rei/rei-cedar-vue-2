import s from './styles/CdrCta.scss';
import modifier from 'mixinsdir/modifier';
import space from 'mixinsdir/space';
import cs from 'classnames';

export default {
  name: 'CdrCta',
  mixins: [modifier, space],
  props: {
    /**
      * Change the color of the cdr-cta button match different themes.
      */
    ctaStyle: {
      type: String,
      default: 'dark',
      validator: value => (['brand', 'dark', 'light', 'sale'].indexOf(value) >= 0) || false,
    },
    /**
     * Sets width to be 100%.
    */
    fullWidth: {
      type: Boolean,
      default: false,
      validator: value => typeof value === 'boolean',
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
      style: s,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-cta';
    },
    ctaClass() {
      return this.modifyClassName(this.baseClass, this.ctaStyle);
    },
    fullWidthClass() {
      return this.fullWidth && !this.iconOnly
        ? this.modifyClassName(this.baseClass, 'full-width') : null;
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
      class={cs(
        this.modifierClass,
        this.ctaClass,
        this.fullWidthClass,
        this.space
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
        class={s['cdr-cta__icon']}
      >
        <path d="M16 12a.997.997 0 0 0-.288-.702l-5.005-5.005a1 1 0 0 0-1.414 1.414L13.585 12 9.29 16.295a1 1 0 0 0 1.417 1.412l4.98-4.98A.997.997 0 0 0 16 12z" />
      </svg>
    </a>)
  }
};
