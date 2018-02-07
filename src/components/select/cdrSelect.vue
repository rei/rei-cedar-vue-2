<template>
  <div class="cdr-input-group">
    <label
      v-if="!hideLabel"
      :class="labelClass"
      :for="selectId"
      ref="label"
    >{{ label }}<span v-if="required">*</span></label>
    <select
      :class="selectClass"
      v-bind="$attrs"
      :id="selectId"
      :size="size"
      @input="onInput"
      ref="select"
      :value="val"
      :required="required"
      :multiple="multiple"
      :aria-label="hideLabel ? label : null"
    >
      <option
        v-if="prompt"
        value=""
        disabled
        :hidden="!multiple"
        ref="prompt"
      >{{ prompt }}</option>
      <option
        v-for="option in computedOpts"
        v-if="option"
        :key="option.text"
        :value="option.value"
      >{{ option.text }}</option>
      <slot/>
    </select>
  </div>
</template>

<script>
import toArray from 'lodash/toArray';

/**
 * Cedar 2 component for select
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrSelect',
  inheritAttrs: false,
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
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
      required: false,
    },
    /** @ignore */
    required: Boolean,
    /** @ignore */
    size: String,
    /** @ignore */
    multiple: Boolean,
  },
  data() {
    return {
      val: this.value,
    };
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
            const { text: t, value: v } = o;
            text = t;
            val = v;
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

<style>
  @import '../../css/settings/_index.pcss';
  @import 'styles/vars/cdrSelect.vars.pcss';
  @import 'styles/cdrSelect.pcss';
</style>
