<template>
  <div class="cdr-caption cdr-inset--squish">
    <p
      v-if="caption"
      class="cdr-caption__caption">
      {{ caption }}
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
    caption: String,
    credit: String,
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrCaption.pcss';
</style>
