import modifier from 'mixinsdir/modifier';
import space from 'mixinsdir/space';
import s from './styles/CdrRadio.scss';
import cs from 'classnames';

export default {
  name: 'CdrRadio',
  mixins: [modifier, space],
  inheritAttrs: false,
  props: {
    /**
     * Class that is added to the label for custom styles
     */
    labelClass: String,
    /**
     * Class that is added to the input for custom styles
     */
    inputClass: String,
    /**
     * Class that is added to the slot wrapper for custom styles
     */
    contentClass: String,
    /**
     * Sets the name of the radio. Required.
    */
    name: {
      type: String,
      required: true,
    },

    /**
     * Sets the value of the radio. Required.
    */
    customValue: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
    },

    /** @ignore v-model binding */
    value: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
    },
  },
  data() {
    return {
      newValue: this.value,
      style: s,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-radio';
    },
    isDisabled() {
      return this.$attrs.hasOwnProperty('disabled');
    }
  },
  watch: {
    value(val) {
      this.newValue = val;
    },
    newValue(val) {
      /**
       * `v-model` value. Fires on check/uncheck.
       * @event input
       * @type value | event
       * */
      this.$emit('input', val);
    },
  },
  methods: {
    updateValue(e) {
    /**
     * Selected radio value. Fires on section.
     * @event change
     * @type boolean|array
     */
     const newValue = e.target.value;
      this.newValue = newValue;
      this.$emit('change', newValue, e);
    },
  },
  render() {
    console.log(this.$attrs)
    return (
      <div class={cs(this.space, this.style['cdr-radio__wrap'])}>
        <label
          class={cs(this.modifierClass, this.labelClass)}
          ref="label"
        >
          <input
            class={cs(this.style['cdr-radio__input'], this.inputClass)}
            type="radio"
            {...this.$attrs}
            disabled={this.isDisabled}
            checked={this.newValue === this.customValue}
            name={this.name}
            onChange={this.updateValue}
            value={this.customValue}
            ref="radio"
          />
          <span class={this.style['cdr-radio__figure']} />
          <div class={cs(this.style['cdr-radio__content'], this.contentClass)}>
            {this.$slots.default}
          </div>
        </label>
      </div>
    )
  }
};
