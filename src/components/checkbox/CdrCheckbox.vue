<template>
  <!-- eslint-disable max-len -->
  <div :class="$style['cdr-checkbox__wrap']">
    <label
      :class="[modifierClass, labelClass]"
      ref="label"
    >
      <input
        :class="[$style['cdr-checkbox__input'], inputClass]"
        type="checkbox"
        v-bind="$attrs"
        v-model="newValue"
        :true-value="customValue ? null : trueValue"
        :false-value="customValue ? null : falseValue"
        :value="customValue"
        :indeterminate="indeterminate"
        @change="updateValue(newValue, $event)"
        ref="checkbox"
      >
      <span :class="$style['cdr-checkbox__figure']" />
      <div :class="[$style['cdr-checkbox__content'], contentClass]">
        <!-- @slot innerHTML inside of checkbox component -->
        <slot/>
      </div>
    </label>
  </div>
</template>

<script>
import modifier from 'mixinsdir/modifier';

/**
 * Cedar 2 component for checkbox
 * **NOTE:** `v-model` is required.
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrCheckbox',
  mixins: [modifier],
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
    updateValue(newValue, e) {
      this.newValue = newValue;
      this.$emit('change', newValue, e);
    },
  },
};
</script>

<style module>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/CdrCheckbox.pcss';
</style>
