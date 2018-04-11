<template>
  <div>
    <input
      class="cdr-radio"
      type="radio"
      v-bind="$attrs"
      :id="radioId"
      :name="name"
      :checked="isChecked"
      @change="onChange"
      :value="value"
      ref="radio"
    >
    <label
      class="cdr-radio__label"
      :for="radioId"
      ref="label"
    >
      <!-- @slot innerHTML inside of the radio component -->
      <slot/>
    </label>
  </div>
</template>

<script>
import isEqual from 'lodash/isEqual';

/**
 * Cedar 2 component for radio
 * **NOTE:** `v-model` is required.
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrRadio',
  inheritAttrs: false,
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
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
    value: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
      required: true,
    },
    /** @ignore */
    id: String,
    /** @ignore */
    modelValue: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
      required: false,
    },
  },
  computed: {
    radioId() {
      return this.id ? this.id : this._uid; // eslint-disable-line no-underscore-dangle
    },
    isChecked() {
      return isEqual(this.modelValue, this.value);
    },
  },
  methods: {
    onChange() {
    /**
     * Selected radio value. Fires on section.
     * @event change
     * @type boolean|array
     */
      this.$emit('change', this.value);
    },
  },
};
</script>

<style>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/vars/CdrRadio.vars.pcss';
  @import './styles/CdrRadio.pcss';
</style>
