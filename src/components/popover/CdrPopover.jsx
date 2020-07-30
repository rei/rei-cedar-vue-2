import clsx from 'clsx';
import style from './styles/CdrPopover.scss';
import propValidator from '../../utils/propValidator';

export default {
  name: 'CdrPopover',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    arrowDirection: {
      type: String,
      required: false,
      default: 'up',
      validator: (value) => propValidator(
        value,
        ['up', 'down', 'left', 'right'],
      ),
    },
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    arrowDirectionClass() {
      return this.arrowDirection ? this.style[`cdr-popover__arrow--${this.arrowDirection}`] : '';
    },
  },
  render() {
    return this.open ? (
      <div
        class={clsx(this.style['cdr-popover'], this.arrowDirectionClass)}
        role="dialog"
      >
        {this.$slots.default}
      </div>
    ) : undefined;
  }
};
