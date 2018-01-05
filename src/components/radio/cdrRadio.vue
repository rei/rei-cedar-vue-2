<template>
  <div>
    <input class="cdr-radio"
      type="radio"
      v-bind="$attrs"
      :id="radioId"
      :name="name"
      :checked="isChecked"
      @change="onChange"
      :value="value"
      ref="radio"
      >
    <label class="cdr-radio__label" :for="radioId" ref="label">
      <slot></slot>
    </label>
  </div>
</template>

<script>
import isEqual from 'lodash/isEqual';

export default {
  name: 'cdr-radio',
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
      required: true,
    },
    /** @ignore */
    id: String,
    /** @ignore */
    modelValue: {
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

<style theme="default">
  @import '../../css/settings/_index.pcss';
  @import 'cdrRadio.pcss';
</style>
