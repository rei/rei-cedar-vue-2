<template>
  <div v-if="ratio" class="cdr-media-frame" :class="[ratioClass, cropClass]">
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
      validator: value => ([
        'square',
        '1-2',
        '2-3',
        '3-4',
        '9-16',
        '2-1',
        '3-2',
        '4-3',
        '16-9'].indexOf(value) >= 0) || false,
    },
    crop: {
      type: String,
      validator: value => (['center', 'left', 'right'].indexOf(value) >= 0) || false,
    },
  },
  computed: {
    ratioClass() {
      return `cdr-media-frame--${this.ratio}`;
    },
    cropClass() {
      return `cdr-media-frame--${this.crop}`;
    },
  },
};
</script>
