import clsx from 'clsx';
import size from '../../mixins/size';
import propValidator from '../../utils/propValidator';
import CdrLabelStandalone from '../labelStandalone/CdrLabelStandalone';
import CdrFormError from '../formError/CdrFormError';
import style from './styles/CdrInput.scss';
/**
 * Cedar 2 component for input
 * **NOTE:** `v-model` is required.
 * @version 1.0.0
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrInput',
  components: {
    CdrLabelStandalone,
    CdrFormError,
  },
  mixins: [size],
  inheritAttrs: false,
  props: {
    /**
     * `id` for the input that is mapped to the label `for` attribute.
     *  If one is not provided, it will be auto generated.
    */
    id: String,
    /**
     *  'type' attribute for the input as defined by w3c.
     *  Only supporting text|email|number|password|search|url.
     *  The increment/decrement webkit psuedo element is hidden for number.
    */
    type: {
      type: [String],
      default: 'text',
      validator: (value) => propValidator(
        value,
        ['text', 'email', 'number', 'password', 'search', 'url', 'tel'],
      ),
    },
    /**
     * Label text. This is required for a11y even if hiding the label with `hideLabel`.
    */
    label: {
      type: String,
      required: true,
    },
    /**
     * Override the error message role, default is `status`.
     */
    errorRole: {
      type: String,
      required: false,
      default: 'status',
    },
    /**
     * Removes the label element but sets the input `aria-label` to `label` text for a11y.
    */
    hideLabel: Boolean,
    // sets default attrs for inputs that should use a numeric keyboard but are not strictly "numbers" (security code, CC number, postal code)
    numeric: {
      type: Boolean,
      default: false,
    },
    /**
     * Number of rows for input.  Converts component to text-area if rows greater than 1.
    */
    rows: Number,
    // Set which background type the input renders on
    background: {
      type: [String],
      default: 'primary',
      validator: (value) => propValidator(
        value,
        ['primary', 'secondary'],
      ),
    },
    // Set error styling
    error: {
      type: [Boolean, String],
      default: false,
    },
    disabled: Boolean,
    required: Boolean,
    optional: Boolean,
    value: {
      type: [String, Number],
    },
  },
  data() {
    return {
      style,
      isFocused: false,
    };
  },
  computed: {
    // Use given id or generate one
    inputId() {
      return this.id ? this.id : this._uid; // eslint-disable-line no-underscore-dangle
    },
    baseClass() {
      return 'cdr-input';
    },
    inputAttrs() {
      const isNum = this.numeric || this.type === 'number';
      return {
        pattern: isNum && '[0-9]*',
        inputmode: isNum && 'numeric',
        novalidate: isNum,
        autocorrect: 'off',
        spellcheck: 'false',
        autocapitalize: 'off',
        ...this.$attrs,
      };
    },
    inputClass() {
      const hasPostIcon = !!this.$slots['post-icon'];
      const hasPostIcons = hasPostIcon && this.$slots['post-icon'].length > 1;
      return {
        [this.style['cdr-input']]: true,
        [this.style['cdr-input--multiline']]: this.rows > 1,
        [this.style['cdr-input--preicon']]: this.$slots['pre-icon'],
        [this.style['cdr-input--posticon']]: hasPostIcon,
        [this.style['cdr-input--posticons']]: hasPostIcons,
        [this.style['cdr-input--error']]: this.error,
        [this.style[`cdr-input--${this.background}`]]: true,
      };
    },
    wrapperClass() {
      return {
        [this.style['cdr-input-wrap']]: true,
        [this.style['cdr-input--focus']]: this.isFocused,
      };
    },
    inputListeners() {
      // https://vuejs.org/v2/guide/components-custom-events.html#Binding-Native-Events-to-Components
      // handles conflict between v-model and v-on="$listeners"
      const vm = this;
      return {
        ...this.$listeners,
        input(event) {
          vm.$emit('input', event.target.value);
        },
        focus(event) {
          vm.isFocused = true;
          vm.$emit('focus', event);
        },
        blur(event) {
          vm.isFocused = false;
          vm.$emit('blur', event);
        },
      };
    },
    inputEl() {
      if (this.rows && this.rows > 1) {
        return (
          <textarea
            rows={this.rows}
            class={clsx(
              this.inputClass,
              this.sizeClass,
            )}
            id={this.inputId}
            disabled={this.disabled}
            required={this.required}
            aria-label={this.hideLabel ? this.label : null}
            ref="input"
            {...{ attrs: this.inputAttrs, on: this.inputListeners }}
            vModel={this.value}
          />
        );
      }
      return (
          <input
            type={this.type}
            class={clsx(
              this.inputClass,
              this.sizeClass,
            )}
            id={this.inputId}
            disabled={this.disabled}
            required={this.required}
            aria-label={this.hideLabel ? this.label : null}
            ref="input"
            {...{ attrs: this.inputAttrs, on: this.inputListeners }}
            vModel={this.value}
          />
      );
    },
  },
  render() {
    return (
      <div>
        <cdr-label-standalone
          for-id={ `${this.inputId}` }
          label={ this.label }
          hide-label={ this.hideLabel }
          required={ this.required }
          optional={ this.optional }
          disabled={ this.disabled }
        >
          { this.$slots['helper-text-top'] && (
            <template slot="helper">
              { this.$slots['helper-text-top'] }
            </template>
          )}
          { this.$slots.info && (
            <template slot="info">
              {this.$slots.info}
            </template>
          )}
        </cdr-label-standalone>
        <div class={this.style['cdr-input-outer-wrap']}>
          <div class={this.wrapperClass}>
            {this.inputEl}
            {this.$slots['pre-icon'] && (
              <span
                class={this.style['cdr-input__pre-icon']}
              >
                {this.$slots['pre-icon']}
              </span>
            )}

            {this.$slots['post-icon'] && (
              <span
                class={this.style['cdr-input__post-icon']}
              >
                {this.$slots['post-icon']}
              </span>
            )}
          </div>
          {this.$slots['info-action'] && (
            <div
              class={this.style['cdr-input__info-action']}
            >
              {this.$slots['info-action']}
            </div>
          )}
        </div>
        {(this.$slots['helper-text-bottom'])
          && !this.error && (
            <span class={this.style['cdr-input__helper-text']}>
              {this.$slots['helper-text-bottom']}
            </span>
        )}
        {this.error && (
          <cdr-form-error role={this.errorRole} error={this.error}>
            <template slot="error">
              {this.$slots.error}
            </template>
          </cdr-form-error>
        )}
      </div>
    );
  },
};
