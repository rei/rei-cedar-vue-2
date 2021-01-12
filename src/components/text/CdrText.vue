<template>
  <component
    :is="tag"
    :class="`${baseClass} ${modifierClass}`"
  >
    <slot/>
  </component>
</template>

<script lang="ts">
import { defineComponent, computed} from 'vue';
import style from './styles/CdrText.scss';

export default defineComponent({
  name: 'CdrText',
  props: {
    tag: {
      type: String,
      default: 'p',
    },
    modifier: {
      type: String,
      required: false,
    }
  },
  setup(props) {
    const modifierClass = computed(() => props.modifier && `cdr-text--${props.modifier}`);
    // TODO: use clsx here
    return {
      baseClass: style['cdr-text'],
      modifierClass,
    }
  },
});
</script>
