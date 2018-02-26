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
      <slot/>
    </label>
  </div>
</template>

<script>
import isEqual from 'lodash/isEqual';

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
      this.$emit('change', this.value);
    },
  },
};
</script>

<style>
  @import 'Css/settings/_index.pcss';
  @import './styles/vars/cdrRadio.vars.pcss';
  @import './styles/cdrRadio.pcss';
</style>
