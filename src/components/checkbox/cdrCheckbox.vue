<template>
  <div>
    <input class="cdr-checkbox"
      type="checkbox"
      :id="checkboxId"
      :name="name"
      :required="required"
      :disabled="disabled"
      :autofocus="autofocus"
      :checked="isChecked"
      @change="onChange"
      :value="value"
      ref="checkbox"
      >
    <label class="cdr-checkbox__label" :for="checkboxId" ref="label">{{text}}</label>
  </div>
</template>

<script>
import { isEqual } from 'lodash';

export default {
  name: 'cdr-checkbox',
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    /**
     * id for the checkbox that is mapped to the label 'for' attribute.
     * If one is not provided, it will be generated.
    */
    id: String,
    /**
     * Text for the checkbox.
    */
    text: String,
    /**
     * Sets the name attribute for the checkbox.
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
     * Used with multiple checkboxes bound to same array in addition to `v-model`.
     * Use `v-model` for single checkboxes.
    */
    value: {
      required: false,
    },
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
