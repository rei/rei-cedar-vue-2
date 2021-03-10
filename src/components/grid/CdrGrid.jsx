import clsx from 'clsx';
import propValidator from '../../utils/propValidator';
import style from './styles/CdrGrid.scss';

export default {
  name: 'CdrGrid',
  props: {
    /**
     * Defines gutter size.
     * Possible values: {none, small, medium, large}.
     * Also accepts responsive values with `@breakpoint`: "none@md"
     */
    gutter: {
      type: String,
      validator: (value) => propValidator(
        value,
        ['none', 'small', 'medium', 'large'],
      ),
      default: 'medium@xs medium@sm large@md large@lg',
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    gutterClass() {
      const classStr = [];
      if (this.gutter) {
        this.gutter.split(' ').forEach((val) => {
          classStr.push(this.style[`cdr-grid--gutter-${val}`]);
        });
      }
      return classStr.join(' ');
    },
  },
  render() {
    const Component = this.tag;
    return (
      <Component class={clsx(this.style['cdr-grid'], this.gutterClass)}>
        {this.$slots.default}
      </Component>
    );
  },
};
