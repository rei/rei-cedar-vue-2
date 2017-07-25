<template>
  <div>
    <input class="cdr-checkbox"
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
    <label class="cdr-checkbox__label" :for="checkboxId" ref="label">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'cdr-checkbox',
  inheritAttrs: false,
  data() {
    return {
      newValue: this.value,
    };
  },
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
    /** @ignore */
    id: String,
    /** @ignore */
    value: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
    },
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

</style>
