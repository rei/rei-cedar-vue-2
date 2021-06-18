import clsx from 'clsx';
import style from './styles/CdrFormGroup.scss';
import IconErrorStroke from '../icon/comps/error-stroke';
import CdrFormError from '../formError/CdrFormError';

export default {
  name: 'CdrFormGroup',
  components: {
    IconErrorStroke,
    CdrFormError,
  },
  props: {

    id: String,
    label: {
      type: String,
      default: '',
      required: false,
    },
    // Set error styling
    error: {
      type: [Boolean, String],
      default: false,
    },
    /**
    * Override the error message role, default is `status`.
    */
    errorRole: {
      type: String,
      required: false,
      default: 'status',
    },
    required: Boolean,
    optional: Boolean,
    disabled: Boolean,
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
    disabledClass() {
      return this.disabled ? this.style['cdr-form-group--disabled'] : '';
    },
    groupId() {
      return this.id ? this.id : this._uid; // eslint-disable-line no-underscore-dangle
    },
  },
  render() {
    const requiredEl = this.required ? (
      <span aria-label="required">
        *
      </span>
    ) : '';

    const optionalEl = this.optional ? (
      <span
        class={this.style['cdr-form-group__optional']}
      >
        (optional)
      </span>
    ) : '';

    return (
      <fieldset
        class={clsx(this.style[this.baseClass], this.disabledClass)}
        disabled={this.disabled}
        aria-invalid={!!this.error}
        aria-errormessage={!!this.error && `${this.groupId}-error`}
      >
        <legend>
          {this.$slots.label || this.label}
          {requiredEl || optionalEl ? ' ' : ''}
          {requiredEl || optionalEl}
        </legend>
        <div class={clsx(this.style['cdr-form-group__wrapper'], this.errorClass)}>
          {this.$slots.default}
        </div>
        {this.error && (
          <cdr-form-error role={this.errorRole} error={this.error} id={`${this.groupId}-error`}>
            <template slot="error">
              {this.$slots.error}
            </template>
          </cdr-form-error>
        )}
      </fieldset>
    );
  },
};
