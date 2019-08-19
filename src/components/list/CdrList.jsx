import modifier from 'mixinsdir/modifier';
import space from 'mixinsdir/space';
import contentPriority from 'mixinsdir/contentPriority';
import s from './styles/CdrList.scss';
import cs from 'classnames';

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
      style: s,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-list';
    },
  },
  render() {
    const Component = this.tag
    return (<Component
      class={cs(
        this.modifierClass,
        this.space,
        this.contentPriorityClass
      )}
    >
      {this.$slots.default}
    </Component>)
  }
};