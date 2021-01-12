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
import clsx from 'clsx';
import { buildClass, modifyClassName, responsiveModifyClass } from '../../utils/buildClass';
import propValidator from '../../utils/propValidator';
import style from './styles/CdrQuote.scss';

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
    const modifierClass = computed(() => buildClass('cdr-quote', props.modifier, style));
    return {
      modifierClass,
      summaryClass: style['cdr-quote__summary'],
      citationClass: style['cdr-quote__citation'],
    }
  }
});
<script>
