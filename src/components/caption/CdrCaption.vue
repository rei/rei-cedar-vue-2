<template>
  <div :class="$style[baseClass]">
    <p
      v-if="summary"
      :class="$style[summaryClass]"
    >
      {{ summary }}
    </p>
    <cite
      v-if="credit"
      :class="$style[citeClass]"
    >
      {{ credit }}
    </cite>
  </div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CdrCaption',
  props: {
    summary: String,
    credit: String,
  },
  setup() {
    return {
      baseClass: 'cdr-caption',
      summaryClass: 'cdr-caption__summary',
      citeClass: 'cdr-caption__cite',
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrCaption.scss">
</style>
