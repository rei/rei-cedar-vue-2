<template>
  <div :class="$style['cdr-radio__wrap']">
    <label
      :class="[modifierClass, labelClass]"
      ref="label"
    >
      <input
        :class="[$style['cdr-radio__input'], inputClass]"
        type="radio"
        v-bind="$attrs"
        :name="name"
        :checked="isChecked"
        @change="onChange"
        :value="value"
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
import isEqual from 'lodash/isEqual';

/**
 * Cedar 2 component for radio
 * **NOTE:** `v-model` is required.
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrRadio',
  mixins: [modifier],
  inheritAttrs: false,
  model: {
    prop: 'modelValue',
    event: 'change',
  },
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
    value: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
      required: true,
    },
    /** @ignore */
    modelValue: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
      required: false,
    },
  },
  computed: {
    isChecked() {
      return isEqual(this.modelValue, this.value);
    },
    baseClass() {
      return 'cdr-radio';
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

<style module>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/CdrRadio.pcss';
</style>
