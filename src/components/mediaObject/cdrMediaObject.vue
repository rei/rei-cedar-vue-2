<template>
  <div :class="[modifierClass]">
    <template v-if="imgHref">
      <cdr-a :href="imgHref" target="imgTarget">
        <span class="u-sr-only">{{imgHrefText}}</span>
        <cdr-icon
        v-if="iconUrl"
        class="cdr-media-object__figure"
        :class="imgClass"
        :url="iconUrl"></cdr-icon>
        <cdr-img
        v-else
        class="cdr-media-object__figure"
        v-bind="$attrs"
        :class="imgClass"
        :alt="imgAlt"
        :src="imgSrc"
        :ratio="imgRatio"
        :crop="imgCrop"
        :cover="imgCover"
        :radius="imgRadius"
        :modifier="imgModifier"
        :style="mediaWidth"></cdr-img>
      </cdr-a>
    </template>
    <template v-else>
      <cdr-icon
      v-if="iconUrl"
      class="cdr-media-object__figure"
      :class="imgClass"
      :url="iconUrl"></cdr-icon>
      <cdr-img
      v-else
      class="cdr-media-object__figure"
      v-bind="$attrs"
      :class="imgClass"
      :alt="imgAlt"
      :src="imgSrc"
      :ratio="imgRatio"
      :crop="imgCrop"
      :cover="imgCover"
      :radius="imgRadius"
      :modifier="imgModifier"
      :style="mediaWidth"></cdr-img>
    </template>
    <div class="cdr-media-object__body" :class="alignClass">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import cdrA from '../anchor/cdrA';
import cdrImg from '../image/cdrImg';
import cdrIcon from '../icon/cdrIcon';
import modifier from '../../mixins/modifier';

export default {
  name: 'cdr-media-object',
  mixins: [modifier],
  inheritAttrs: false,
  components: {
    cdrA,
    cdrImg,
    cdrIcon,
  },
  props: {
    /**
    * Sets the media width
    */
    width: String,
    /**
    * Allows you to align your text
    * {right, left, center}
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
     * See cdr-icon
    */
    iconUrl: String,
    /**
    * Custom class added to the image/icon
    */
    imgClass: String,
    /**
     * Image path.
     * See cdr-img
    */
    imgSrc: String,
    /**
     * Image radius.
     * See cdr-img
    */
    imgRadius: String,
    /**
     * Aspect ratio of the media container. {square, 1-2, 2-3, 3-4, 9-16, 2-1, 3-2, 4-3, 16-9}
     * See cdr-img
    */
    imgRatio: String,
    /**
     * Requires `imgRatio`.
     * Scale the image to be as large as possible to fill the area (background-position: cover;)
     * See cdr-img
     */
    imgCover: Boolean,
    /**
     * Requires `imgRatio`.
     * Area to crop the image overflow to.
     * {top, y-center, bottom} {left, x-center, right}
     * See cdr-img
     */
    imgCrop: String,
    /**
     * Image alternitive description, defaults to blank
     * See cdr-img
    */
    imgAlt: String,
    /**
     * {Responsive, Rounded, circle, thumbnail}
     * See cdr-img
    */
    imgModifier: String,
    /**
     * Link the image
    */
    imgHref: String,
    /**
     * Screen reader text for the linked image
    */
    imgHrefText: String,
    /**
     * Target for the image link
    */
    imgTarget: String,
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
