<template>
  <div v-if="ratio" class="cdr-media-frame" :class="[ratioClass, cropClass]">
    <img class="cdr-media-frame__image" :class="[modifierClass, utilityRadiusClass]" :src="src" :alt="alt" v-bind="$attrs">
  </div>
  <img v-else :class="[modifierClass, utilityRadiusClass]" :src="src" :alt="alt" v-bind="$attrs">
</template>

<script>
import modifier from '../../mixins/modifier';

export default {
  name: 'cdr-img',
  mixins: [modifier],
  inheritAttrs: false,
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
     * Sets a border radius to an element {square, top, right, bottom, left}
     */
    utiliyRadius: {
      type: String,
      validator: value => ([
        'square',
        'top',
        'right',
        'bottom',
        'left'].indexOf(value) >= 0) || false,
    },
    /**
     * Requires ratio.
     * Area to crop the image overflow to.
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
    utilityRadiusClass() {
      return `cdr-add-radius--${this.utiliyRadius}`;
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

<style theme="default">
  @import '../../css/settings/_index.pcss';
  @import 'cdrImg.pcss';
</style>
