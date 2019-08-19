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
      //  TODO: emit change here?
      // TODO: emit whether or not it's checked?
      this.$emit('input', val);
      // this.$emit('change', newValue, e);
    },
  },
  render() {
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
            vModel={this.newValue}
            name={this.name}
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
