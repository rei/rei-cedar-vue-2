<template>
  <div :class="componentClass">
    <slot/>
  </div>
</template>


<script lang="ts">
import { defineComponent, computed } from 'vue';
import clsx from 'clsx';
import propValidator from '../../utils/propValidator';
import { buildClass } from '../../utils/buildClass';
import style from './styles/CdrAlert.scss';

export default defineComponent({
  name: 'CdrAlert',
  props: {
    type: {
      type: String,
      validator: (value) => propValidator(
        value,
        ['info', 'warning', 'success', 'error'],
      ),
      default: 'info',
    },
  },
  setup(props) {
    const typeClass = computed(() => props.type && buildClass('cdr-alert', props.type, style))
    const componentClass = computed(() => clsx(style['cdr-alert'], typeClass.value))
    return {
      componentClass,
    }
  }
});
</script>
