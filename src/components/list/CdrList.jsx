import clsx from 'clsx';
import modifier from '../../mixins/modifier';
import style from './styles/CdrList.scss';

export default {
  name: 'CdrList',
  mixins: [
    modifier,
  ],
  props: {
    /**
     * Tag accepts a user defined element and expects either: 'ul' = Unordered List or 'ol' = Ordered List.
     */
    tag: {
      type: String,
      default: 'ul',
      validator: (value) => ['ul', 'ol'].indexOf(value) >= 0 || false,
    },
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-list';
    },
  },
  render() {
    const Component = this.tag;
    return (<Component
      class={clsx(
        this.style[this.baseClass],
        this.modifierClass,
      )}
    >
      {this.$slots.default}
    </Component>);
  },
};
