import clsx from 'clsx';
import propValidator from '../../utils/propValidator';
import BuildClass from '../../mixins/buildClass';
import style from './styles/CdrAlert.scss';

export default {
  name: 'CdrAlert',
  mixins: [BuildClass],
  props: {
    type: {
      type: String,
      validator: (value) => propValidator(
        value,
        ['info', 'warning', 'success', 'error'],
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
      return 'cdr-alert';
    },
    iconClass() {
      console.log(this.modifyClassName(this.baseClass, this.type));
      return this.modifyClassName(this.baseClass, this.type);
    },
  },
  render() {
    return (
      <div class={clsx(this.style[this.baseClass], this.iconClass)} role="alert">
        {this.$slots.default}
      </div>
    );
  },
};
