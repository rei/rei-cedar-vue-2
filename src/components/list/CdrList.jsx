import clsx from 'clsx';
import modifier from '../../mixins/modifier';
import space from '../../mixins/space';
import contentPriority from '../../mixins/contentPriority';
import style from './styles/CdrList.scss';

export default {
  name: 'CdrList',
  mixins: [
    modifier,
    space,
    contentPriority,
  ],
  props: {
    /**
     * Tag accepts a user defined element and expects either: 'ul' = Unordered List or 'ol' = Ordered List.
     */
    tag: {
      type: String,
      default: 'ul',
      validator: value => ['ul', 'ol'].indexOf(value) >= 0 || false,
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
        this.modifierClass,
        this.space,
        this.contentPriorityClass,
      )}
    >
      {this.$slots.default}
    </Component>);
  },
};
