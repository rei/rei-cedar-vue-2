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
      default: () => [],
    },
  },
  computed: {
    ratioClass() {
      return `cdr-media-frame--${this.ratio}`;
    },
    cropClass() {
      const base = 'cdr-media-frame';
      let final = '';

      this.crop.forEach((crop) => {
        final += `${base}--${crop} `;
      });
      return final;
    },
  },
};
</script>
