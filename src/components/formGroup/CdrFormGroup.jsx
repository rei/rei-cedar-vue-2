import clsx from 'clsx';
import style from './styles/CdrFormGroup.scss';
import IconErrorStroke from '../icon/comps/error-stroke';

export default {
  name: 'CdrFormGroup',
  components: {
    IconErrorStroke,
  },
  props: {
    label: {
      type: String,
      default: '',
      required: false,
    },
    error: Boolean,
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-form-group';
    },
    errorClass() {
      return this.error ? this.style['cdr-form-group--error'] : '';
    },
  },
  render() {
    return (<fieldset class={this.style[this.baseClass]}>
      <legend>{this.$slots.label || this.label}</legend>
      <div class={clsx(this.style['cdr-form-group__wrapper'], this.errorClass)}>
        {this.$slots.default}
        {this.$slots.error && (
          <div class={this.style['cdr-form-group__error-message']}>
            <icon-error-stroke inherit-color/> { this.$slots.error }
          </div>
        )}
      </div>
    </fieldset>);
  },
};
