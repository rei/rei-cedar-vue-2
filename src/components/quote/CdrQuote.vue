<template>
  <component
    :is="tag"
    :class="componentClass"
  >
    <p
      :class="summaryClass"
      v-if="summary"
    >
      {{ summary }}
    </p>
    <slot />
    <cite
      v-if="citation"
      :class="citationClass"
      tag="cite"
    >
      {{ citation }}
    </cite>
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

import { buildClass } from '../../utils/buildClass';
import propValidator from '../../utils/propValidator';

export default defineComponent({
  name: 'CdrQuote',
  props: {
    tag: {
      type: String,
      default: 'blockquote',
      validator: (value) => propValidator(value, ['blockquote', 'aside', 'q', 'div']),
    },
    modifier: {
      type: String,
      default: '',
      validator: (value) => propValidator(value, ['pull']),
    },
    /** Caption summary text */
    summary: String,
    /** Caption credit text */
    citation: String,
  },
  setup(props) {
    const modifierClass = computed(() => buildClass('cdr-quote', props.modifier));
    return {
      modifierClass,
      summaryClass: 'cdr-quote__summary',
      citationClass: 'cdr-quote__citation',
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrQuote.scss">
</style>
