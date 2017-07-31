<template>
  <div class="cdr-input-group">
    <label v-if="!hideLabel" :class="labelClass" :for="selectId" ref="label">{{label}}<span v-if="required">*</span></label>
    <select :class="selectClass"
      v-bind="$attrs"
      :id="selectId"
      :size="size"
      v-on="$listeners"
      @input="onInput"
      ref="select"
      :value="val"
      :required="required"
      :multiple="multiple"
      :aria-label="hideLabel ? label : null"
    >
      <option v-if="prompt" value="" disabled :hidden="!multiple" ref="prompt">{{prompt}}</option>
      <option v-if="options" v-for="option in computedOpts" :key="option.text" :value="option.value">{{option.text}}</option>
      <slot></slot>
    </select>
  </div>
</template>

<script>
import { toArray } from 'lodash';

export default {
  name: 'cdr-select',
  inheritAttrs: false,
  data() {
    return {
      val: this.value,
    };
  },
  props: {
    /**
     * Label text.
    */
    label: {
      type: String,
      required: true,
    },
    /**
     * id for the select that is mapped to the label 'for' attribute.
     * If one is not provided, it will be generated.
    */
    id: String,
    /**
     * Removes the label element but sets the select 'aria-label' to `label` text for a11y.
    */
    hideLabel: Boolean,
    /**
     * Adds an option that is disabled and selected by default to serve
     * as a 'placeholder' for the select.
    */
    prompt: String,
    /**
     * Build options programatically with data.
     * Array of objects [{ text: String, value: String}] to give greater control.
     * Array of strings ['String'] for simpler setup (value and text will be the same).
    */
    options: {
      type: Array,
    },
    /** @ignore */
    value: {
      required: false,
    },
    /** @ignore */
    required: Boolean,
    /** @ignore */
    size: String,
    /** @ignore */
    multiple: Boolean,
  },
  computed: {
    // Use given id or generate one
    selectId() {
      return this.id ? this.id : this._uid; // eslint-disable-line no-underscore-dangle
    },
    selectClass() {
      return {
        'cdr-select': true,
        'cdr-select--size': parseInt(this.size, 10) > 0,
      };
    },
    labelClass() {
      return {
        'cdr-label': true,
        'cdr-label--disabled': this.disabled,
      };
    },
    computedOpts() {
      const optsArr = [];
      if (this.options) {
        this.options.forEach((o) => {
          const optObj = {};
          let text = '';
          let val = '';
          if (typeof o === 'string') {
            text = o;
            val = o;
          } else {
            text = o.text;
            val = o.value;
          }
          optObj.text = text;
          optObj.value = val;
          optsArr.push(optObj);
        });
      }
      return optsArr;
    },
  },
  watch: {
    value() {
      if (!this.multiple) {
        this.val = this.value;
      }
    },
  },
  mounted() {
    // initialize options as selected if multiple
    if (this.multiple) {
      const opts = toArray(this.$refs.select.options);
      opts.forEach((opt) => {
        const o = opt;
        if (this.val.indexOf(o.value) !== -1) {
          o.selected = true;
        }
      });
    }
  },
  methods: {
    onInput(e) {
      if (this.multiple) {
        const optArr = toArray(e.target.options);
        const selected = optArr.filter(o => o.selected === true).map(o => o.value);
        this.val = e.target.value;
        this.$emit('input', selected);
      } else {
        this.val = e.target.value;
        this.$emit('input', e.target.value);
      }
    },
  },
};
</script>

<style theme="default">
  @import '../../css/settings/_index.pcss';
  @import 'cdrSelect.pcss';
</style>
