<template>
  <div :class="$style['cdr-input-group']">
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
      @change="onChange"
      ref="select"
      v-model="val"
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
 * **NOTE:** `v-model` is required.
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrSelect',
  inheritAttrs: false,
  model: {
    prop: 'extVal',
    event: 'change',
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
     * `id` for the select that is mapped to the label `for` attribute. If one is not provided, it will be generated.
    */
    id: String,
    /**
     * Removes the label element but sets the select `aria-label` to `label` text for a11y.
    */
    hideLabel: Boolean,
    /**
     * Adds an option that is disabled and selected by default to serve as a `placeholder` for the select.
    */
    prompt: String,
    /**
     * Build options programatically with data. Array of objects [{ text: String, value: String}] to give greater control. Array of strings ['String'] for simpler setup (value and text will be the same).
    */
    options: {
      type: Array,
    },
    /** @ignore */
    extVal: {
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
      val: this.extVal,
    };
  },
  computed: {
    // Use given id or generate one
    selectId() {
      return this.id ? this.id : this._uid; // eslint-disable-line no-underscore-dangle
    },
    selectClass() {
      return {
        [this.$style['cdr-select']]: true,
        [this.$style['cdr-select--size']]: parseInt(this.size, 10) > 0,
      };
    },
    labelClass() {
      return {
        [this.$style['cdr-select__label']]: true,
        [this.$style['cdr-select__label--disabled']]: this.disabled,
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
    extVal() {
      if (!this.multiple) {
        this.val = this.extVal;
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
    onChange(e) {
      /**
       * Current input value. Fires when
       * @event input
       * @type string|array
       */
      if (this.multiple) {
        const optArr = toArray(e.target.options);
        const selected = optArr.filter(o => o.selected === true).map(o => o.value);
        this.val = selected;
        this.$emit('change', selected, e);
      } else {
        this.val = e.target.value;
        this.$emit('change', e.target.value, e);
      }
    },
  },
};
</script>

<style module>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/vars/CdrSelect.vars.pcss';
  @import './styles/CdrSelect.pcss';
</style>
