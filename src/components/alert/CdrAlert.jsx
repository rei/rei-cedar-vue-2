import clsx from 'clsx';
import propValidator from '../../utils/propValidator';
import BuildClass from '../../mixins/buildClass';
import style from './styles/CdrAlert.scss';
import IconXSm from '../icon/comps/x-sm';
import CdrButton from '../button/CdrButton';

export default {
  name: 'CdrAlert',
  components: {
    CdrButton,
    IconXSm,
  },
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
    dismissable: {
      type: Boolean,
      default: false,
    }
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
      return this.modifyClassName(this.baseClass, this.type);
    },
  },
  methods: {
    closeAlert(e) {
      // naming?
      this.$emit('close', e);
    }
  },
  render() {
    return (
      <div class={clsx(this.style[this.baseClass], this.iconClass)}>
        {this.$slots.default}
        {this.dismissable && (
          <cdr-button icon-only on-click={this.closeAlert} class={this.style['cdr-alert__close']}><icon-x-sm slot="icon"/></cdr-button>
        )}
      </div>
    );
  },
};
