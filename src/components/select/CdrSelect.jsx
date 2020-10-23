import clsx from 'clsx';
import toArray from 'lodash-es/toArray';
import propValidator from '../../utils/propValidator';
import IconCaretDown from '../icon/comps/caret-down';
import IconErrorStroke from '../icon/comps/error-stroke';
import CdrLabelStandalone from '../labelStandalone/CdrLabelStandalone';
import size from '../../mixins/size';
import space from '../../mixins/space';
import style from './styles/CdrSelect.scss';

export default {
  name: 'CdrSelect',
  components: {
    IconCaretDown,
    IconErrorStroke,
    CdrLabelStandalone,
  },
  mixins: [size, space],
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    /**
     * `id` for the select that is mapped to the label `for` attribute. If one is not provided, it will be generated.
    */
    id: String,
    /**
     * Label text. This is required for a11y even if hiding the label with `hideLabel`.
    */
    label: {
      type: String,
      required: true,
    },
    /**
     * Removes the label element but sets the select `aria-label` to `label` text for a11y.
    */
    hideLabel: Boolean,
    /**
     * Adds an option that is disabled and selected by default to serve as a `placeholder` for the select.
    */
    prompt: String,
    /**
     * Build options programatically with data. Array of objects [{ text: String, value: String}] to give greater control. Array of strings ['String'] for simpler setup (value and text will be the same).
    */
    options: {
      type: Array,
    },
    // Set which background type the select renders on
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
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
    },
    disabled: Boolean,
    required: Boolean,
    optional: Boolean,
    multiple: Boolean,
    multipleSize: Number,
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    // Use given id or generate one
    selectId() {
      return this.id ? this.id : this._uid; // eslint-disable-line no-underscore-dangle
    },
    baseClass() {
      return 'cdr-select';
    },
    selectClass() {
      return {
        [this.style['cdr-select']]: true,
        [this.style['cdr-select__prompt']]: !this.value,
        [this.style['cdr-select--multiple']]: this.multiple,
        [this.style[`cdr-select--${this.background}`]]: true,
        [this.style['cdr-select--error']]: this.error,
        [this.style['cdr-select--preicon']]: this.$slots['pre-icon'],
      };
    },
    caretClass() {
      return {
        [this.style['cdr-select__caret']]: true,
        [this.style['cdr-select__caret--disabled']]: this.disabled,
      };
    },
    inputListeners() {
      // https://vuejs.org/v2/guide/components-custom-events.html#Binding-Native-Events-to-Components
      // handles conflict between v-model and v-on="$listeners"
      const vm = this;
      return {
        ...this.$listeners,
        change(event) {
          if (vm.multiple) {
            const optArr = toArray(event.target.options);
            const selected = optArr.filter((o) => o.selected === true).map((o) => o.value);

            vm.$emit('change', selected, event);
          } else {
            vm.$emit('change', event.target.value, event);
          }
        },
      };
    },
    selectEl() {
      return (
        <select
          class={clsx(this.sizeClass, this.selectClass)}
          id={this.selectId}
          multiple={this.multiple}
          size={this.multipleSize}
          disabled={this.disabled}
          required={this.required}
          aria-label={this.hideLabel ? this.label : null}
          ref="select"
          {...{ attrs: this.$attrs, on: this.inputListeners }}
          vModel={this.value}
        >

          {this.prompt
            && <option
              class="cdr-select__prompt"
              value=""
              disabled
              ref="prompt"
            >
              { this.prompt }
            </option>
          }
          {this.computedOpts.map((option) => (
              <option
                key={option.text}
                value={option.value}
              >
                { option.text }
              </option>
          ))}
          {this.$slots.default}
        </select>
      );
    },
    computedOpts() {
      const optsArr = [];
      if (this.options) {
        this.options.forEach((o) => {
          const optObj = {};
          let text = '';
          let val = '';
          if (typeof o === 'string') {
            text = o;
            val = o;
          } else {
            const { text: t, value: v } = o;
            text = t;
            val = v;
          }
          optObj.text = text;
          optObj.value = val;
          optsArr.push(optObj);
        });
      }
      return optsArr;
    },
  },
  render() {
    return (
      <div class={clsx(this.space)}>
        <cdr-label-standalone
          for-id={ `${this.selectId}` }
          label={ this.label }
          hide-label={ this.hideLabel }
          required={ this.required }
          optional={ this.optional }
        >
          { this.$slots['helper-text'] && (
            <template slot="helper">
              { this.$slots['helper-text'] }
            </template>
          )}
          { this.$slots.info && (
            <template slot="info">
              {this.$slots.info}
            </template>
          )}
        </cdr-label-standalone>
        <div class={this.style['cdr-select-outer-wrap']}>
          <div class={this.style['cdr-select-wrap']}>
            {this.$slots['pre-icon'] && (
              <span
                class={this.style['cdr-select__pre-icon']}
              >
                {this.$slots['pre-icon']}
              </span>
            )}
            {this.selectEl}
            <icon-caret-down
            class={this.caretClass}
            />
          </div>
          {this.$slots['info-action'] && (
            <div
              class={this.style['cdr-select__info-action']}
            >
              {this.$slots['info-action']}
            </div>
          )}
        </div>
        {this.$slots.error && this.error && (
          <span
            class={this.style['cdr-select__error-message']}
          >
            <icon-error-stroke inherit-color/> {this.$slots.error}
          </span>
        )}
      </div>
    );
  },
};
