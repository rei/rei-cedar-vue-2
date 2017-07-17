<template>
  <div class="">
    <input class="cdr-radio"
      type="radio"
      v-bind="$attrs"
      :id="radioId"
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
import { isEqual } from 'lodash';

export default {
  name: 'cdr-radio',
  inheritAttrs: false,
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    /**
     * Sets the value of the radio.
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

<style>
</style>
