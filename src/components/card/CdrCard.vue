<template>
  <component :is="tag" :class="componentClass">
    <slot />
  </component>
</template>
<script lang="ts">

import { defineComponent } from 'vue'
import style from './styles/CdrCard.scss';

export default defineComponent({
  name: 'CdrCard',
  props: {
    tag: {
      type: String,
      default: 'article',
    },
  },
  setup(props) {
    return {
      componentClass: style['cdr-card'],
    };
  },
});
</script>
