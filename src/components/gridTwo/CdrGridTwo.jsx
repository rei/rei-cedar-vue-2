import clsx from 'clsx';
import propValidator from '../../utils/propValidator';
import style from './styles/CdrGridTwo.scss';

export default {
  name: 'CdrGridTwo',
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
          classStr.push(this.style[`cdr-grid-two--gutter-${val}`]);
        });
      }
      return classStr.join(' ');
    },
  },
  render() {
    return (
      <div class={clsx(this.style['cdr-grid-two'], this.gutterClass)}>
        {this.$slots.default}
      </div>
    );
  },
};
