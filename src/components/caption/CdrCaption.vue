<template>
  <div :class="$style[baseClass]">
    <p
      v-if="summary"
      :class="$style[summaryClass]"
    >
      {{ summary }}
    </p>
    <cite
      v-if="cite"
      :class="$style[citeClass]"
    >
      {{ credit }}
    </cite>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
export default defineComponent({
  name: 'CdrCaption',
  props: {
    summary: String,
    credit: String,
  },
  setup() {
    // TODO: build class for sub items. only really does mods?
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
