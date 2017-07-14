<template>
  <div class="">
    <input class="cdr-radio"
      type="radio"
      :id="radioId"
      :name="name"
      :required="required"
      :disabled="disabled"
      :autofocus="autofocus"
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
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    /**
     * id for the radio that is mapped to the label 'for' attribute.
     * If one is not provided, it will be generated.
    */
    id: String,
    /**
     * Sets the name attribute for the radio.
    */
    name: String,
    /**
     * Sets the required attribute.
    */
    required: Boolean,
    /**
     * Sets the disabled attribute.
    */
    disabled: Boolean,
    /**
     * Sets the autofocus attribute.
    */
    autofocus: Boolean,
    /**
     * Sets the value of the radio.
    */
    value: {
      required: true,
    },
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
