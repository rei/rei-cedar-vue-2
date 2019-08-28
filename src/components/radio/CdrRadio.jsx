import clsx from 'clsx';
import modifier from '../../mixins/modifier';
import space from '../../mixins/space';
import style from './styles/CdrRadio.scss';

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
      style,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-radio';
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
    updateValue(newValue, e) {
    /**
     * Selected radio value. Fires on section.
     * @event change
     * @type boolean|array
     */
      this.$emit('change', newValue, e);
    },
  },
  render() {
    return (
      <div class={clsx(this.space, this.style['cdr-radio__wrap'])}>
        <label
          class={clsx(this.modifierClass, this.labelClass)}
          ref="label"
        >
          <input
            class={clsx(this.style['cdr-radio__input'], this.inputClass)}
            type="radio"
            { ...{ attrs: this.$attrs } }
            vModel={this.newValue}
            onChange={e => this.updateValue(this.newValue, e)}
            name={this.name}
            value={this.customValue}
            ref="radio"
          />
          <span class={this.style['cdr-radio__figure']} />
          <div class={clsx(this.style['cdr-radio__content'], this.contentClass)}>
            {this.$slots.default}
          </div>
        </label>
      </div>
    );
  },
};
