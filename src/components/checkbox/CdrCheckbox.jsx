import modifier from 'mixinsdir/modifier';
import space from 'mixinsdir/space';
import style from './styles/CdrCheckbox.scss';

export default {
  name: 'CdrCheckbox',
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
     * Show checkbox in indeterminate state. (NOTE: this is a visual-only state and there is no logic for when to show it)
    */
    indeterminate: {
      type: Boolean,
      default: false,
    },
    /**
     * The value when checked.
    */
    trueValue: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
      default: true,
    },
    /**
     * The value when unchecked.
    */
    falseValue: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
      default: false,
    },
    /**
     * The value when used in a checkbox group. Replaces `trueValue` and `falseValue`.
    */
    customValue: [String, Number, Boolean, Object, Array, Symbol, Function],
    /** @ignore */
    value: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
    },
  },
  data() {
    return {
      newValue: this.value,
      style,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-checkbox';
    },
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
      const newValue = this.target.value;
      this.newValue = newValue;
      this.$emit('change', newValue, e);
    },
  },
  // TODO: pass disabled/checked/other attrs through? need direct binding?
  // TODO: what do search do?
  // TODO: do we not need the temp var now?
  // TODO: how to bind object as value?
  render() {
    return (
      <div class={cs(this.space, this.style['cdr-checkbox__wrap'])}>
        <label
          class={cs(this.modifierClass, this.labelClass])}
          ref="label"
        >
          <input
            class={cs(this.style['cdr-checkbox__input'], this.inputClass)}
            type="checkbox"
            {...this.$attrs}
            checked={this.newValue}
            true-value={this.customValue ? null : this.trueValue}
            false-value={this.customValue ? null : this.falseValue}
            value={this.customValue}
            indeterminate={this.indeterminate}
            onChange={updateValue}
            ref="checkbox"
          />
          <span class={this.style['cdr-checkbox__figure']} />
          <div class={cs(this.style['cdr-checkbox__content'], contentClass)}>
            {this.$slots.default}
          </div>
        </label>
      </div>
    )
  }
};