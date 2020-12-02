import clsx from 'clsx';
import size from '../../mixins/size';
import style from './styles/CdrIcon.scss';

export default {
  name: 'CdrIcon',
  mixins: [size],
  props: {
    /**
    * The href attribute passed to the use element. Will be prefixed with # automatically
    */
    use: String,
    /**
    * Sets icon fill to "inherit" so as to use parent/ancestor fill color.
    */
    inheritColor: Boolean,
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-icon';
    },
    inheritColorClass() {
      return this.inheritColor ? this.style['cdr-icon--inherit-color'] : '';
    },
  },
  render() {
    const defaultDataObj = {
      // attrs: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
      // },
    };

    if (!this.$attrs['aria-label'] && !this.$attrs['aria-labelledby']) {
      defaultDataObj['aria-hidden'] = true;
    }

    return (<svg
      {...defaultDataObj}
      class={clsx(
        this.style[this.baseClass],
        this.sizeClass,
        this.inheritColorClass,
      )}
    >
      {this.$slots.default && this.$slots.default()}
      {this.use ? <use
        href={this.use}
        xlinkHref={this.use}
      /> : ''}
    </svg>);
  },
};
