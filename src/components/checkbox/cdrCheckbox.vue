<template>
  <div>
    <input class="cdr-checkbox"
      type="checkbox"
      v-bind="$attrs"
      :id="checkboxId"
      :checked="isChecked"
      @change="onChange"
      :value="value"
      ref="checkbox"
      >
    <label class="cdr-checkbox__label" :for="checkboxId" ref="label">
      <slot></slot>
    </label>
  </div>
</template>

<script>
import { isEqual } from 'lodash';

export default {
  name: 'cdr-checkbox',
  inheritAttrs: false,
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    /**
     * Used with multiple checkboxes bound to same array in addition to `v-model`.
     * Use `v-model` for single checkboxes. Required.
    */
    value: {
      required: false,
    },
    /** @ignore */
    id: String,
    /** @ignore */
    modelValue: {
      required: false,
    },
  },
  computed: {
    checkboxId() {
      return this.id ? this.id : this._uid; // eslint-disable-line no-underscore-dangle
    },
    isChecked() {
      if (Array.isArray(this.modelValue)) {
        return this.findIndex(this.modelValue, this.value) !== -1;
      }

      return this.modelValue === true;
    },
  },
  methods: {
    onChange() {
      let input = this.modelValue;

      if (typeof (input) === 'boolean') {
        input = !input;
      } else if (Array.isArray(input)) {
        const i = this.findIndex(this.modelValue, this.value);

        if (i === -1) {
          input.push(this.value);
        } else {
          input.splice(i, 1);
        }
      }

      this.$emit('change', input);
    },
    findIndex(arr, test) {
      let res = -1;
      arr.forEach((item, i) => {
        if (isEqual(test, item)) {
          res = i;
        }
      });

      return res;
    },
  },
};
</script>

<style>

</style>
