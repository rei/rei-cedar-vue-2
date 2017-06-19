<template>
  <div v-if="ratio" class="cdr-media-frame" :class="[ratioClass, cropClass]">
    <img class="cdr-media-frame__image" :class="[modifierClass]" :src="src" :alt="alt">
  </div>
  <img v-else :class="[modifierClass]" :src="src" :alt="alt">
</template>

<script>
import modifier from '../../mixins/modifier';

export default {
  name: 'cdr-img',
  mixins: [modifier],
  props: {
    /**
     * Required. Image source url.
     */
    src: {
      type: String,
      required: true,
    },
    /**
     * Required. Image alt text.
     */
    alt: {
      type: String,
      default: ' ',
    },
    /**
     * Ratio of the media container. {square, 1-2, 2-3, 3-4, 9-16, 2-1, 3-2, 4-3, 16-9}
     */
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
    /**
     * Area to crop the image overflow to (can be combined with ratio).
     * {top, y-center, bottom} {left, x-center, right}
     */
    crop: {
      type: String,
    },
  },
  computed: {
    baseClass() {
      return 'cdr-image';
    },
    ratioClass() {
      return `cdr-media-frame--${this.ratio}`;
    },
    cropClass() {
      const base = 'cdr-media-frame';
      const cropArr = this.crop ? this.crop.split(' ') : [];

      let final = '';

      cropArr.forEach((crop) => {
        final += `${base}--${crop} `;
      });
      return final;
    },
  },
};
</script>
