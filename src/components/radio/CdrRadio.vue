<template>
  <div :class="[space, $style['cdr-radio__wrap']]">
    <label
      :class="[modifierClass, labelClass]"
      ref="label"
    >
      <input
        :class="[$style['cdr-radio__input'], inputClass]"
        type="radio"
        v-bind="$attrs"
        v-model="newValue"
        :name="name"
        @change="updateValue(newValue, $event)"
        :value="customValue"
        ref="radio"
      >
      <span :class="$style['cdr-radio__figure']" />
      <div :class="[$style['cdr-radio__content'], contentClass]">
        <!-- @slot innerHTML inside of radio component -->
        <slot />
      </div>
    </label>
  </div>
</template>

<script>
import modifier from 'mixinsdir/modifier';
import space from 'mixinsdir/space';

/**
 * Cedar 2 component for radio
 * **NOTE:** `v-model` is required.
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
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
      this.newValue = newValue;
      this.$emit('change', newValue, e);
    },
  },
};
</script>

<style lang="scss" module>
  @import './styles/vars/CdrRadio.vars.scss';
  @import './styles/CdrRadio.scss';
</style>
