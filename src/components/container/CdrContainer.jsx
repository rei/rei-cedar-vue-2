import clsx from 'clsx';
import style from './styles/CdrContainer.scss';
import modifier from '../../mixins/modifier';
import propValidator from '../../utils/propValidator';

export default {
  name: 'CdrContainer',
  mixins: [modifier],
  props: {
    /** Any valid HTML tag */
    tag: {
      type: String,
      default: 'div',
    },
    modifier: {
      type: String,
      default: 'static',
      validator: (value) => propValidator(
        value,
        ['static', 'fluid'],
        false,
      ),
    },
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-container';
    },
    modifierClass() {
      return this.buildClass('modifier');
    },
  },
  render() {
    const Component = this.tag;
    return (<Component class={clsx(this.style[this.baseClass], this.modifierClass)}>
      {this.$slots.default}
    </Component>);
  },
};
