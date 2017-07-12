<template>
  <div :class="[modifierClass]">
  <template v-if="iconFigure">
    <cdr-icon
    :url="iconFigure"
     class="cdr-media-object__figure"></cdr-icon>
  </template>
    <cdr-img
    v-else
    :alt="mediaFigureAlt"
    :src="mediaFigure"
    :ratio="ratio"
    :crop="crop"
    :utiliy-radius="mediaFigureRadius"
    class="cdr-media-object__figure"
    :modifier="mediaImgShape"
    :style="mediaWidth"></cdr-img>
    <div class="cdr-media-object__body" :class="alignClass">
      <slot v-if="mediaSuperTitle" name="mediaSuperTitle">{{mediaSuperTitle}}</slot>
      <cdr-heading :level="level">
          <slot name="title" v-if="!mediaUrl"><span :class="mediaTitleClass">{{mediaTitle}}</span></slot>
          <slot name="title" v-else>
          <a :class="mediaTitleClass" :href="mediaUrl">{{mediaTitle}}
            <slot v-if="mediaSubTitle" name="mediaSubTitle">{{mediaSubTitle}}</slot>
          </a>
          </slot>
      </cdr-heading>
      <slot
      <slot v-html>{{mediaBody}}</slot>
    </div>
  </div>
</template>

<script>
import cdrHeading from '../heading/cdrHeading';
import cdrImg from '../image/cdrImg';
import cdrIcon from '../icon/cdrIcon';
import modifier from '../../mixins/modifier';

export default {
  name: 'cdr-media-object',
  mixins: [modifier],
  components: {
    cdrHeading,
    cdrImg,
    cdrIcon,
  },
  extends: {
    cdrImg,
    cdrHeading,
  },
  props: {
      /**
       * Assign the proper heading level 1-6
       **/
    level: {
      type: String,
      default: '2',
    },
    icon: {
      type: Boolean,
      default: false,
    },
    mediaSuperTitle: String,
    mediaSubTitle: String,
    mediaTitleClass: String,
    /**
    * Replaces the default slot with the body copy for your Media Object
    **/
    mediaBody: String,
    width: String,
    /**
    * Allows you to align your text
    **/
    mediaAlign: {
      type: String,
      validator: value => ([
        'right',
        'left',
        'center'].indexOf(value) >= 0) || false,
    },
    /**
    * icon svg path
    **/
    iconFigure: String,
    /**
    * Image path
    **/
    mediaFigure: String,
    mediaFigureRadius: String,
    /**
    * Ratio of the media container. {square, 1-2, 2-3, 3-4, 9-16, 2-1, 3-2, 4-3, 16-9}
    **/
    ratio: String,
    utiliyRadius: String,
    /**
    * crop  string
    * Area to crop the image overflow to (can be combined with ratio).
    * {top, y-center, bottom} {left, x-center, right}
    **/
    crop: String,
    /**
    * Image alternitive description, defaults to blank
    **/
    mediaFigureAlt: String,
    /**
    * {Responsive, Rounded, circle, thumbnail}
    **/
    mediaImgShape: String,
    mediaTitle: String,
    mediaUrl: String,
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
