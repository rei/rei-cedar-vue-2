import clsx from 'clsx';
import merge from 'lodash-es/merge';
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
    const defaultDataObj = {
      attrs: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        role: 'presentation',
      },
    };
    let slotDataObj = {};

    if (this.$slots.default) {
      const vNode = this.$slots.default[0];
      if (vNode.tag === 'svg') {
        // keep svg attrs/classes/on/etc to bind to our svg
        slotDataObj = vNode.data;
        // remove wrapping svg from slot but keep its contents
        this.$slots.default = vNode.children;
      }
    }

    return (<svg
      {...merge({}, slotDataObj, defaultDataObj)}
      class={clsx(this.sizeClass, this.inheritColorClass, this.space)}
    >
      {this.$slots.default}
      {this.use ? <use
        href={this.use}
        xlinkHref={this.use}
      /> : ''}
    </svg>);
  },
};
