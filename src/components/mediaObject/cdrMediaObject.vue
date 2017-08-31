<template>
  <div :class="[modifierClass]">
    <cdr-icon
    v-if="iconUrl"
    class="cdr-media-object__figure"
    :url="iconUrl"></cdr-icon>
    <cdr-img
    v-else
    class="cdr-media-object__figure"
    :alt="imgAlt"
    :src="imgSrc"
    :ratio="imgRatio"
    :crop="imgCrop"
    :cover="imgCover"
    :radius="imgRadius"
    :modifier="imgModifier"
    :style="mediaWidth"></cdr-img>
    <div class="cdr-media-object__body" :class="alignClass">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import cdrImg from '../image/cdrImg';
import cdrIcon from '../icon/cdrIcon';
import modifier from '../../mixins/modifier';

export default {
  name: 'cdr-media-object',
  mixins: [modifier],
  components: {
    cdrImg,
    cdrIcon,
  },
  props: {
    width: String,
    /**
    * Allows you to align your text
    */
    mediaAlign: {
      type: String,
      validator: value => ([
        'right',
        'left',
        'center'].indexOf(value) >= 0) || false,
    },
    /**
    * icon svg path
    */
    iconUrl: String,
    /**
    * Image path
    */
    imgSrc: String,
    /**
    * Image radius
    */
    imgRadius: String,
    /**
    * Ratio of the media container. {square, 1-2, 2-3, 3-4, 9-16, 2-1, 3-2, 4-3, 16-9}
    */
    imgRatio: String,
    imgCover: Boolean,
    /**
    * crop  string
    * Area to crop the image overflow to (can be combined with ratio).
    * {top, y-center, bottom} {left, x-center, right}
    */
    imgCrop: String,
    /**
    * Image alternitive description, defaults to blank
    */
    imgAlt: String,
    /**
    * {Responsive, Rounded, circle, thumbnail}
    */
    imgModifier: String,
  },
  computed: {
    baseClass() {
      return 'cdr-media-object';
    },
    alignClass() {
      if (this.mediaAlign) {
        return `cdr-media-object__body--${this.mediaAlign}`;
      }
      return '';
    },
    mediaWidth() {
      return `width: ${this.width};`;
    },
  },
};
</script>

<style theme="default">
  @import '../../css/settings/_index.pcss';
  @import 'cdrMediaObject.pcss';
</style>
