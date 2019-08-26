import clsx from 'clsx';
import size from '../../mixins/size';
import space from '../../mixins/space';
import style from './styles/CdrIcon.scss';

export default {
  name: 'CdrIcon',
  mixins: [size, space],
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
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class={clsx(this.sizeClass, this.inheritColorClass, this.space)}
      role="presentation"
    >
      {this.$slots.default}
      {this.use ? <use
        href={this.use}
        xlinkHref={this.use}
      /> : ''}
    </svg>);
  },
};
