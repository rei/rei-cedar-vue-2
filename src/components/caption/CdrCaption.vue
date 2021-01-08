<template>
  <div :class="baseClass">
    <p
      v-if="summary"
      :class="summaryClass"
    >
      {{ summary }}
    </p>
    <cite
      v-if="cite"
      :class="citeClass"
    >
      {{ credit }}
    </cite>
  </div>
</template>

<script lang="ts">
import style from './styles/CdrCaption.scss';
export default {
  name: 'CdrCaption',
  props: {
    summary: String,
    credit: String,
  },
  setup() {
    return (
      baseClass: style['cdr-caption'],
      summaryClass: style['cdr-caption__summary'],
      citeClass: style['cdr-caption__cite'],
    );
  },
};
</script>
