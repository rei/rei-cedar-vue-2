<template>
  <div :class="[modifierClass]">
    <template v-if="imgHref">
      <cdr-link
        :href="imgHref"
        target="imgTarget"
      >
        <span class="cdr-sr-only">{{ imgHrefText }}</span>
        <cdr-icon
          v-if="iconUrl"
          class="cdr-media-object__figure"
          :class="imgClass"
          :url="iconUrl"
        />
        <cdr-img
          v-else
          class="cdr-media-object__figure"
          :lazy="lazy"
          :lazy-opts="lazyOpts"
          :class="imgClass"
          :alt="imgAlt"
          :src="imgSrc"
          :ratio="imgRatio"
          :crop="imgCrop"
          :cover="imgCover"
          :radius="imgRadius"
          :modifier="imgModifier"
          :style="mediaWidth"/>
      </cdr-link>
    </template>
    <template v-else>
      <cdr-icon
        v-if="iconUrl"
        class="cdr-media-object__figure"
        :class="imgClass"
        :url="iconUrl"/>
      <cdr-img
        v-else
        class="cdr-media-object__figure"
        :lazy="lazy"
        :lazy-opts="lazyOpts"
        :class="imgClass"
        :alt="imgAlt"
        :src="imgSrc"
        :ratio="imgRatio"
        :crop="imgCrop"
        :cover="imgCover"
        :radius="imgRadius"
        :modifier="imgModifier"
        :style="mediaWidth"/>
    </template>
    <div
      class="cdr-media-object__body"
      :class="alignClass"
    >
      <!-- @slot innerHTML inside of the media object component -->
      <slot/>
    </div>
  </div>
</template>

<script>
import { CdrLink } from '@rei/cdr-link';
import { CdrImg } from '@rei/cdr-img';
import { CdrIcon } from '@rei/cdr-icon';
import modifier from 'mixinsdir/modifier';
import lazyImage from 'mixinsdir/lazyImage';

/**
 * Cedar 2 component for media object
 * The Media Object allows you to group small amounts of like content is a small amount of markup. The examples below show some of the may visual displays available to this component.
 * <span class="modifiers">Modifiers</span>
 * {top, right, bottom, center, overlay, block, stretch}
 * top: Media figure displays above Media body
 * right: Media figure displays to the right of the Media body
 * bottom: Media figure displays below the Media body
 * center: Can be stacked with other alignment modifiers and will center the Media figure.
 * overlay: Media Body overlays the Media Frame
 * stretch: The Media Frame extends 16px left and right from the parent container. This is intended to be used with the top or bottom modifier.
 * block: The Media Frame extends 16px left and right from the parent container. And an additional 16px left and right value wraps the media object. This is intended to be used with the top or bottom modifier.
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrMediaObject',
  components: {
    CdrLink,
    CdrImg,
    CdrIcon,
  },
  mixins: [modifier, lazyImage],
  props: {
    /**
    * Sets the media width
    */
    width: String,
    /**
    * Allows you to align your text {right, left, center}
    */
    mediaAlign: {
      type: String,
      validator: value => ([
        'right',
        'left',
        'center'].indexOf(value) >= 0) || false,
    },
    /**
     * icon svg path. See cdr-icon
    */
    iconUrl: String,
    /**
    * Custom class added to the image/icon
    */
    imgClass: String,
    /**
     * Image path. See cdr-img
    */
    imgSrc: String,
    /**
     * Image radius. See cdr-img
    */
    imgRadius: String,
    /**
     * Aspect ratio of the media container. {square, 1-2, 2-3, 3-4, 9-16, 2-1, 3-2, 4-3, 16-9} See cdr-img
    */
    imgRatio: String,
    /**
     * Requires `imgRatio`. Scale the image to be as large as possible to fill the area (background-position: cover;) See cdr-img
     */
    imgCover: Boolean,
    /**
     * Requires `imgRatio`. Area to crop the image overflow to. {top, y-center, bottom} {left, x-center, right} See cdr-img
     */
    imgCrop: String,
    /**
     * Image alternitive description, defaults to blank. See cdr-img
    */
    imgAlt: String,
    /**
     * {Responsive, Rounded, circle, thumbnail}. See cdr-img
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

<style>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/CdrMediaObject.pcss';
</style>
