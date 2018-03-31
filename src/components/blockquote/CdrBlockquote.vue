<template>
  <blockquote class="cdr-blockquote cdr-inset--squish">
    <p
      v-if="summary"
      class="cdr-blockquote__summary">
      {{ summary }}
    </p>
    <cite
      v-if="attribution"
      class="cdr-text--attribution">
      {{ attribution }}
    </cite>
  </blockquote>
</template>

<script>
export default {
  name: 'CdrBlockquote',
  props: {
    /** Blockquote summary text */
    summary: String,
    /** Blockquote credit text */
    attribution: String,
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrBlockquote.pcss';
</style>
