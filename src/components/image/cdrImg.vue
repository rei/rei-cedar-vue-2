<template>
  <div v-if="ratio" class="cdr-media-frame" :class="[ratioClass, cropClass]">
    <div :class="[coverClass]" :style="styleObject" aria-hidden="true"></div>
    <img class="cdr-media-frame__image" :class="[modifierClass, radiusClass]" :src="src" :alt="alt" v-bind="$attrs">
  </div>
  <img v-else :class="[modifierClass, radiusClass]" :src="src" :alt="alt" v-bind="$attrs">
</template>

<script>
import modifier from '../../mixins/modifier';

export default {
  name: 'cdr-img',
  mixins: [modifier],
  inheritAttrs: false,
  data() {
    return {
      styleObject: {
        backgroundImage: `url(${this.src})`,
      },
    };
  },
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
     * Aspect ratio of the media container. {square, 1-2, 2-3, 3-4, 9-16, 2-1, 3-2, 4-3, 16-9}
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
     * Requires a `ratio`.
     * Area to crop the image overflow to.
     * {top, y-center, bottom} {left, x-center, right}
     */
    crop: {
      type: String,
    },
    /**
     * Requires a `ratio`.
     * Scale the image to be as large as possible to fill the area (background-position: cover;)
     */
    cover: {
      type: Boolean,
    },
    /**
     * Sets a border radius to an element {square, top, right, bottom, left}
     */
    radius: {
      type: String,
      validator: value => ([
        'square',
        'top',
        'right',
        'bottom',
        'left'].indexOf(value) >= 0) || false,
    },
  },
  computed: {
    baseClass() {
      return 'cdr-image';
    },
    radiusClass() {
      const classObj = {};
      classObj[`cdr-add-radius--${this.utiliyRadius}`] = this.utiliyRadius;
      return classObj;
    },
    ratioClass() {
      const classObj = {};
      classObj[`cdr-media-frame--${this.ratio}`] = this.ratio;
      return classObj;
    },
    coverClass() {
      const classObj = {};
      classObj['cdr-media-frame__cover'] = true;
      classObj['cdr-media-frame__cover--crop'] = this.crop;
      classObj['cdr-media-frame__cover--cover'] = this.cover;
      return classObj;
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
