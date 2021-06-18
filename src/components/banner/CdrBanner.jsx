import clsx from 'clsx';
import propValidator from '../../utils/propValidator';
import BuildClass from '../../mixins/buildClass';
import style from './styles/CdrBanner.scss';

export default {
  name: 'CdrBanner',
  mixins: [BuildClass],
  props: {
    type: {
      type: String,
      validator: (value) => propValidator(
        value,
        ['info', 'warning', 'success', 'error'],
      ),
      default: 'info',
    },
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-banner';
    },
    iconClass() {
      return this.modifyClassName(this.baseClass, this.type);
    },
  },
  render() {
    return (
      <div class={clsx(this.style[this.baseClass], this.iconClass)}>
        {this.$slots.default}
      </div>
    );
  },
};
