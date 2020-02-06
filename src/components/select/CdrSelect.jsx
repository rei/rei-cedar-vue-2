import clsx from 'clsx';
import toArray from 'lodash-es/toArray';
import IconCaretDown from '../icon/comps/caret-down';
import size from '../../mixins/size';
import space from '../../mixins/space';
import style from './styles/CdrSelect.scss';

export default {
  name: 'CdrSelect',
  components: {
    IconCaretDown,
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
    /** @ignore */
    value: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
    },
    /** @ignore */
    disabled: Boolean,
    /** @ignore */
    required: Boolean,
    /** DEPRECATED */
    multiple: Boolean,
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
      };
    },
    labelClass() {
      return {
        [this.style['cdr-select__label']]: true,
        [this.style['cdr-select__label--disabled']]: this.disabled,
      };
    },
    caretClass() {
      return {
        [this.style['cdr-select__caret']]: true,
        [this.style['cdr-select__caret--disabled']]: this.disabled,
      };
    },
    selectWrapClass() {
      return {
        [this.style['cdr-select-wrap']]: true,
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
          change(event) {
            if (vm.multiple) {
              const optArr = toArray(event.target.options);
              const selected = optArr.filter(o => o.selected === true).map(o => o.value);

              vm.$emit('change', selected, event);
            } else {
              vm.$emit('change', event.target.value, event);
            }
          },
        },
      );
    },
    selectEl() {
      return (
        <select
          class={clsx(this.sizeClass, this.selectClass)}
          id={this.selectId}
          multiple={this.multiple}
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
          {this.computedOpts.map(option => (
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
    labelEl() {
      const requiredEl = this.required ? (
        <span
          class={this.style['cdr-select__required-label']}
        >
          Required
        </span>
      ) : '';

      return !this.hideLabel ? (
        <label
          class={this.labelClass}
          for={this.selectId}
          ref="label"
        >{ this.label }
          {' '}
          {requiredEl}
        </label>
      ) : '';
    },
    infoEl() {
      return this.$slots.info ? (
        <span
          class={this.style['cdr-select__info-container']}
        >
          {this.$slots.info}
        </span>
      ) : '';
    },
    helperEl() {
      return this.$slots['helper-text'] ? (
        <span
          class={this.style['cdr-select__helper-text']}
        >
          {this.$slots['helper-text']}
        </span>
      ) : '';
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
        {this.labelEl}
        {this.infoEl}
        <div class={this.selectWrapClass}>
          {this.selectEl}
          <icon-caret-down
          class={this.caretClass}
          />
        </div>
        {this.helperEl}
      </div>
    );
  },
};
