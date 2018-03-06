<template>
  <div class="cdr-caption cdr-inset--squish">
    <p
      v-if="summary"
      class="cdr-caption__summary">
      {{ summary }}
    </p>
    <p
      v-if="credit"
      class="cdr-caption__credit">
      {{ credit }}
    </p>
  </div>
</template>

<script>

export default {
  name: 'CdrCaption',
  props: {
    /** Caption summary text */
    summary: String,
    /** Caption credit text */
    credit: String,
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrCaption.pcss';
</style>
