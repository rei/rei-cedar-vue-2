import clsx from 'clsx';
import toArray from 'lodash-es/toArray';
import IconCaretDown from '../icon/comps/caret-down';
import size from'../../mixins/size';
import space from '../../mixins/space';
import style from './styles/CdrSelect.scss';

export default {
  name: 'CdrSelect',
  mixins: [size, space],
  components: {
    IconCaretDown,
  },
  inheritAttrs: false,
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
    /** DEPRECATED */
    multiple: Boolean,
    /** @ignore */
    value: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
      required: false,
    },
    /** @ignore */
    disabled: Boolean,
    /** @ignore */
    required: Boolean,
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
          input(event) {
            vm.$emit('input', event.target.value);
          },
          // Deprecated event
          change(event) {
            vm.$emit('change', event.target.value, event);
          },
        },
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
          {" "}
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
        console.log('KRISKRISKRIS this.options = ', this.options);
        this.options.forEach((o) => {
          console.log('KRISKRISKRIS o = ', o);
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
      console.log('KRISKRISKRIS optsArr return = ', optsArr);
      return optsArr;
      console.log('KRISKRISKRIS optsArr return = ', optsArr);
    },
  },
  // watch: {
  //   value() {
  //     if (!this.multiple) {
  //       this.newValue = this.value;
  //     }
  //   },
  // },
  mounted() {
    // DEPRECATED MULTIPLE PROP
    // initialize options as selected if multiple
    if (this.multiple) {
      const opts = toArray(this.$refs.select.options);
      console.log('KRISKRISKRIS opts = ', opts);
      opts.forEach((opt) => {
        const o = opt;
        console.log('KRISKRISKRIS opt = ', opt);
        console.log('KRISKRISKRIS this.value = ', this.value);
        if (this.value.indexOf(o.value) !== -1) {
          o.selected = true;
        }
      });
    }
  },
  methods: {
    // onChange(e) {
    //   /**
    //    * Current input value. Fires when
    //    * @event input
    //    * @type string|array
    //    */
    //   if (this.multiple) {
    //     const optArr = toArray(e.target.options);
    //     const selected = optArr.filter(o => o.selected === true).map(o => o.value);
    //     this.newValue = selected;
    //     this.$emit('change', selected, e);
    //     this.$emit('input', selected, e);
    //   } else {
    //     this.newValue = e.target.value;
    //     this.$emit('change', e.target.value, e);
    //     this.$emit('input', e.target.value, e);
    //   }
    // },
  },
  render() {
    return (
      <div class={clsx(this.space)}>
        {this.labelEl}
        {this.infoEl}
        <div class={this.selectWrapClass}>
          <select
          class={clsx(this.sizeClass, this.selectClass)}
          {...{ attrs: this.$attrs }}
          id={this.selectId}
          disabled={this.disabled}
          onChange={this.onChange}
          ref="select"
          {...{ attrs: this.$attrs, on: this.inputListeners }}
          // vModel={this.value}
          required={this.required}
          multiple={this.multiple}
          aria-label={this.hideLabel ? this.label : null}
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
          <icon-caret-down
          class={this.style['cdr-select__caret']}
          //TODO fix this size={this.size ? 'small' : null}
          />
        </div>
        {this.helperEl}
      </div>
    );
  },
};
