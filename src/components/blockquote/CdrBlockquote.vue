<template>
  <blockquote class="cdr-blockquote cdr-inset--squish">
    <p
      v-if="summary"
      class="cdr-blockquote__summary">
      {{ summary }}
    </p>
    <cite
      v-if="citation"
      class="cdr-text--citation">
      {{ credit }}
    </cite>
  </blockquote>
</template>

<script>
export default {
  name: 'CdrBlockquote',
  props: {
    /** Caption summary text */
    summary: String,
    /** Caption credit text */
    citation: String,
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrBlockquote.pcss';
</style>
