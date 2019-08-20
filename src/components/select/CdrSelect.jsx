import toArray from 'lodash/toArray';
import style from './styles/CdrSelect.scss';

export default {
  name: 'CdrSelect',
  inheritAttrs: false,
  props: {
    /**
     * Label text.
    */
    label: {
      type: String,
      required: true,
    },
    /**
     * `id` for the select that is mapped to the label `for` attribute. If one is not provided, it will be generated.
    */
    id: String,
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
      required: false,
    },
    /** @ignore */
    required: Boolean,
    /** @ignore */
    size: String,
    /** @ignore */
    multiple: Boolean,
  },
  data() {
    return {
      newValue: this.value,
      style,
    };
  },
  computed: {
    // Use given id or generate one
    selectId() {
      return this.id ? this.id : this._uid; // eslint-disable-line no-underscore-dangle
    },
    selectClass() {
      return {
        [style['cdr-select']]: true,
        [style['cdr-select--size']]: parseInt(this.size, 10) > 0,
      };
    },
    labelClass() {
      return {
        [style['cdr-select__label']]: true,
        [style['cdr-select__label--disabled']]: this.disabled,
      };
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
  watch: {
    value() {
      if (!this.multiple) {
        this.newValue = this.value;
      }
    },
  },
  mounted() {
    // initialize options as selected if multiple
    if (this.multiple) {
      const opts = toArray(this.$refs.select.options);
      opts.forEach((opt) => {
        const o = opt;
        if (this.newValue.indexOf(o.value) !== -1) {
          o.selected = true;
        }
      });
    }
  },
  methods: {
    onChange(e) {
      /**
       * Current input value. Fires when
       * @event input
       * @type string|array
       */
      if (this.multiple) {
        const optArr = toArray(e.target.options);
        const selected = optArr.filter(o => o.selected === true).map(o => o.value);
        this.newValue = selected;
        this.$emit('change', selected, e);
        this.$emit('input', selected, e);
      } else {
        this.newValue = e.target.value;
        this.$emit('change', e.target.value, e);
        this.$emit('input', e.target.value, e);
      }
    },
  },
  render() {
    return (
      <div class={style['cdr-input-group']}>
        {!this.hideLabel
          && <label
            class={this.labelClass}
            for={this.selectId}
            ref="label"
          >
            { this.label }
            { this.required && <span>*</span>}
          </label>
        }
        <select
          class={this.selectClass}
          {...{ attrs: this.$attrs }}
          id={this.selectId}
          size={this.size}
          onChange={this.onChange}
          ref="select"
          vModel={this.newValue}
          required={this.required}
          multiple={this.multiple}
          aria-label={this.hideLabel ? this.label : null}
        >
          {this.prompt
            && <option
              value=""
              disabled
              hidden={!this.multiple}
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
      </div>
    );
  },
};
