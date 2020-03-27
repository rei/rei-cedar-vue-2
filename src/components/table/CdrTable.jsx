import clsx from 'clsx';
import modifier from '../../mixins/modifier';
import size from '../../mixins/size';
import style from './styles/CdrTable.scss';

export default {
  name: 'CdrTable',
  mixins: [modifier, size],
  props: {
    striped: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: true,
    },
    // can't use fullWidth mixin because its default is false :(
    fullWidth: {
      type: [Boolean, String],
      default: true,
    },
    responsive: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      style,
      baseClass: 'cdr-table',
    };
  },
  computed: {
    tableClasses() {
      return {
        [this.style[this.baseClass]]: true,
        [this.sizeClass]: true,
        [this.modifyClassName(this.baseClass, 'striped')]: this.striped,
        [this.modifyClassName(this.baseClass, 'border')]: this.border && !this.striped,
        [this.responsiveModifyClass(this.baseClass, 'full-width', this.fullWidth)]: this.fullWidth,
      };
    },
    wrapperClasses() {
      return {
        [this.modifyClassName(this.baseClass, 'responsive')]: this.responsive,
      };
    },
  },
  render() {
    return (
      <div class={clsx(this.wrapperClasses)}>
        <table
          class={clsx(this.tableClasses)}
          {... { attrs: this.$attrs } }
        >
          {this.$slots.default}
        </table>
      </div>
    );
  },
};
