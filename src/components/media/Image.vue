<template>
  <div v-if="ratio" class="cdr-media-frame" :class="[ratioClass]">
    <img class="cdr-media-frame__image" :src="src" :alt="alt">
  </div>
  <img v-else class="cdr-image" :src="src" :alt="alt">
</template>

<script>
export default {
  name: 'cdr-img',
  props: {
    src: String,
    alt: String,
    ratio: {
      type: String,
    },
  },
  computed: {
    ratioClass() {
      return `cdr-media-frame--${this.ratio}`;
    },
  },
};
</script>
