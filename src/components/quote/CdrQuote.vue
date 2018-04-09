<template>
  <component
    :is="tag"
    :class="[modifierClass]"
  >
    <cdr-text
      v-if="summary"
      class="cdr-quote__summary">
      {{ summary }}
    </cdr-text>
    <slot />
    <cdr-text
      tag="cite"
      v-if="citation"
      modifier="citation">
      {{ citation }}
    </cdr-text>
  </component>
</template>

<script>
import { CdrText } from '@rei/cdr-text';
import modifier from 'mixinsdir/modifier';

/**
 * Cedar 2 component for captions
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrQuote',
  components: {
    CdrText,
  },
  mixins: [modifier],
  props: {
    tag: {
      type: String,
      default: 'blockquote',
      validator: value => (['blockquote', 'aside', 'q', 'div'].indexOf(value) >= 0) || false,

    },
    /** Caption summary text */
    summary: String,
    /** Caption credit text */
    citation: String,
  },
  computed: {
    baseClass() {
      return 'cdr-quote';
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/spruceQuote.min.css';
  @import './styles/CdrQuote.pcss';
</style>
