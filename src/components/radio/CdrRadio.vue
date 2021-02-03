<template>
  <cdr-label-wrapper
    :class="style['cdr-radio']"
    ref="label"
    :size="size"
    :modifier="modifier"
    :labelClass="labelClass"
    :contentClass="contentClass"
    :background="background"
    :disabled="$attrs.disabled"
  >
    <input
      :class="clsx(style['cdr-radio__input'], inputClass)"
      type="radio"
      " ..." attrs: $attrs " "
      vModel="newValue"
      onChange="(e) => updateValue(newValue, e)"
      :name="name"
      :value="customValue"
      ref="radio"
      slot="input"
    />
    <slot />
  </cdr-label-wrapper>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';

import clsx from 'clsx';
// import modifier from '../../mixins/modifier';
// import size from '../../mixins/size';
import { buildClass } from '../../utils/buildClass'
import propValidator from '../../utils/propValidator';
import style from './styles/CdrRadio.scss';
import CdrLabelWrapper from '../labelWrapper/CdrLabelWrapper';

export default {
  name: 'CdrRadio',
  components: {
    CdrLabelWrapper,
  },
  // mixins: [modifier, size],
  inheritAttrs: false,
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


    modifier: {
      type: String,
      default: '',
      validator: (value) => propValidator(value, ['', 'hide-figure']),
    },


    size: {
      type: String,
      default: 'medium',
      validator: (value) => propValidator(
        value,
        ['small', 'medium', 'large'],
      ),
    },

    // Set which background type the input renders on
    background: {
      type: [String],
      default: 'primary',
      validator: (value) => propValidator(
        value,
        ['primary', 'secondary'],
      ),
    },

    /**
     * Sets the value of the radio. Required.
    */
    customValue: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
    },

    /** @ignore v-model binding */
    value: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
    },
  },

  setup(props, ctx) {
    const modifierClass = computed(() => buildClass('cdr-radio', props.modifier, style));
    const sizeClass = computed(() => props.size && buildClass('cdr-radio', props.size, style));

    //
    // data() {
    //   return {
    //     newValue: this.value,
    //     style,
    //   };
    // },
    // computed: {
    //   baseClass() {
    //     return 'cdr-radio';
    //   },
    // },
    // watch: {
    //   value(val) {
    //     this.newValue = val;
    //   },
    //   newValue(val) {
    //     /**
    //      * `v-model` value. Fires on check/uncheck.
    //      * @event input
    //      * @type value | event
    //      * */
    //     this.$emit('input', val);
    //   },
    // },
    // methods: {
    //   updateValue(newValue, e) {
    //   /**
    //    * Selected radio value. Fires on section.
    //    * @event change
    //    * @type boolean|array
    //    */
    //     this.$emit('change', newValue, e);
    //   },
    // },



    return {

    };
  },
};
</script>
