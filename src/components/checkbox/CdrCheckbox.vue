<template>
  <div>
    <input
      class="cdr-checkbox"
      type="checkbox"
      :id="checkboxId"
      v-bind="$attrs"
      v-model="newValue"
      :true-value="customValue ? null : trueValue"
      :false-value="customValue ? null : falseValue"
      :value="customValue"
      @change="updateValue(newValue, $event)"
      ref="checkbox"
    >
    <label
      class="cdr-checkbox__label"
      :class="labelClass"
      :for="checkboxId"
      ref="label"
    >
      <!-- @slot innerHTML inside of checkbox component -->
      <slot/>
    </label>
  </div>
</template>

<script>
/**
 * Cedar 2 component for checkbox
 * **NOTE:** `v-model` is required.
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrCheckbox',
  inheritAttrs: false,
  props: {
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
    /**
     * Class that is added to the label for custom styles
     */
    labelClass: String,
    /** @ignore */
    id: String,
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
    checkboxId() {
      return this.id ? this.id : this._uid; // eslint-disable-line no-underscore-dangle
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

<style>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/vars/CdrCheckbox.vars.pcss';
  @import './styles/CdrCheckbox.pcss';
</style>
