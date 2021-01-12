<template>
<div class={this.style['cdr-label-wrapper__container']}>
  <label class={clsx(
    this.style['cdr-label-wrapper'],
    this.style[`cdr-label-wrapper--${this.background}`],
    this.disabledClass,
    this.modifierClass,
    this.sizeClass,
    this.labelClass,
  )}>
    <slot name="input"/>
    <span class={this.style['cdr-label-wrapper__figure']}/>
    <div class={clsx(this.style['cdr-label-wrapper__content'], this.contentClass)}>
      <slot/>
    </div>
  </label>
</div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import clsx from 'clsx';
import { buildClass } from '../../utils/buildClass'
import propValidator from '../../utils/propValidator';
import style from './styles/CdrLabelWrapper.scss';

export default {
  name: 'CdrLabelWrapper',
  props: {
    labelClass: String,
    contentClass: String,
    background: {
      type: [String],
      default: 'primary',
      validator: (value) => propValidator(
        value,
        ['primary', 'secondary'],
      ),
    },
    disabled: Boolean,
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-label-wrapper';
    },
    disabledClass() {
      return this.disabled ? this.style['cdr-label-wrapper--disabled'] : '';
    },
  },
  setup(props) {
    const modifierClass = computed(() => buildClass('cdr-radio', props.modifier, style));
    const sizeClass = computed(() => props.size && buildClass('cdr-radio', props.size, style));
    return {};
  },
};
</script>
