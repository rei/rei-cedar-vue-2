import clsx from 'clsx';
import size from '../../mixins/size';
import space from '../../mixins/space';
import propValidator from '../../utils/propValidator';
import style from './styles/CdrInput.scss';
/**
 * Cedar 2 component for input
 * **NOTE:** `v-model` is required.
 * @version 1.0.0
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrInput',
  mixins: [size, space],
  inheritAttrs: false,
  props: {
    /**
     * `id` for the input that is mapped to the label `for` attribute. If one is not provided, it will be auto generated.
    */
    id: String,
    /**
     *  'type' attribute for the input as defined by w3c.  Only supporting text|email|number|password|search|url.
     *  The increment/decrement webkit psuedo element is hidden for number.
     *  See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input for more details.
    */
    type: {
      type: [String],
      default: 'text',
      validator: value => propValidator(
        value,
        ['text', 'email', 'number', 'password', 'search', 'url'],
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
     * Removes the label element but sets the input `aria-label` to `label` text for a11y.
    */
    hideLabel: Boolean,
    /**
     * Number of rows for input.  Converts component to text-area if rows greater than 1.
    */
    rows: Number,
    /** @ignore */
    disabled: Boolean,
    /** @ignore */
    required: Boolean,
    /** @ignore */
    value: {
      type: [String, Number],
    },
  },
  data() {
    return {
      style,
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
    labelClass() {
      return {
        [this.style['cdr-input__label']]: true,
        [this.style['cdr-input__label--disabled']]: this.disabled,
      };
    },
    inputClass() {
      return {
        [this.style['cdr-input']]: true,
        [this.style['cdr-input--multiline']]: this.rows > 1,
        [this.style['cdr-input--preicon']]: this.$slots['pre-icon'],
      };
    },
    inputWrapClass() {
      return {
        [this.style['cdr-input-wrap']]: true,
      };
    },
    inputListeners() {
      // https://vuejs.org/v2/guide/components-custom-events.html#Binding-Native-Events-to-Components
      // handles conflict between v-model and v-on="$listeners"
      const vm = this;
      return Object.assign(
        {},
        this.$listeners,
        {
          input(event) {
            vm.$emit('input', event.target.value);
          },
        },
      );
    },
    labelEl() {
      const requiredEl = this.required ? (
        <span
          class={this.style['cdr-input__required-label']}
        >
          Required
        </span>
      ) : '';

      return !this.hideLabel ? (
        <label
          class={this.labelClass}
          for={this.inputId}
          ref="label"
        >{ this.label }
          {requiredEl}
        </label>
      ) : '';
    },
    inputEl() {
      if (this.rows && this.rows > 1) {
        return (
          <textarea
            rows={this.rows}
            class={clsx(this.inputClass, this.sizeClass, this.space)}
            id={this.inputId}
            disabled={this.disabled}
            required={this.required}
            aria-label={this.hideLabel ? this.label : null}
            ref="input"
            {...{ attrs: this.$attrs, on: this.inputListeners }}
            vModel={this.value}
          />
        );
      }
      return (
          <input
            type={this.type}
            class={clsx(this.inputClass, this.sizeClass, this.space)}
            id={this.inputId}
            disabled={this.disabled}
            required={this.required}
            aria-label={this.hideLabel ? this.label : null}
            ref="input"
            {...{ attrs: this.$attrs, on: this.inputListeners }}
            vModel={this.value}
          />
      );
    },
  },
  render() {
    return (
      <div class={this.style['cdr-input-container']}>
        {this.labelEl}
        {this.$slots.info && (
          <span
            class={this.style['cdr-input__info-container']}
          >
            {this.$slots.info}
          </span>
        )}
        <div class={this.inputWrapClass}>
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
        {this.$slots['helper-text'] && (
          <span
            class={this.style['cdr-input__helper-text']}
          >
            {this.$slots['helper-text']}
          </span>
        )}
      </div>
    );
  },
};
