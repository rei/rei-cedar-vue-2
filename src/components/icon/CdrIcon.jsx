import s from './styles/CdrIcon.scss';
import size from 'mixinsdir/size';
import space from 'mixinsdir/space';
import cs from 'classnames';

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
      style: s,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-icon';
    },
    inheritColorClass() {
      return this.inheritColor ? s['cdr-icon--inherit-color'] : '';
    },
  },
  render(h) {
    return ( <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class={cs(this.sizeClass, this.inheritColorClass, this.space)}
      role="presentation"
    >
      {this.$slots.default}
      {this.use ? <use
        href={this.use}
        xlinkHref={this.use}
      /> : ''}
    </svg>)
  }
};
