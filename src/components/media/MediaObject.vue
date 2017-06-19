<template>
  <div :class="[modClass]">
    <cdr-img
    :alt="mediaFigureAlt"
    :src="mediaFigure"
    class="cdr-media-object__figure"
    :class="[mediaExtendStyle, mediaFigureStyle]"></cdr-img>
    <div class="cdr-media-object__body">
      <cdr-heading :level="level">
          <slot name="title" v-if="!mediaUrl"><span class="cdr-card__title">{{mediaTitle}}</span></slot>
          <slot name="title" v-else><a class="cdr-card__title cdr-card__title__link" :href="mediaUrl">{{mediaTitle}}</a></slot>
      </cdr-heading>
      <slot>{{mediaBody}}</slot>
    </div>
  </div>
</template>

<script>
import cdrHeading from '../headings/Heading';
import cdrImg from '../media/Image';

export default {
  name: 'cdr-media-object',
  components: {
    cdrHeading,
    cdrImg,
  },
  props: {
    level: {
      type: Number,
      default: 2,
    },
    mediaBody: String,
    mediaExtendStyle: {
      type: String,
      default: ' ',
    },
    mediaFigure: {
      type: String,
      required: true,
    },
    mediaFigureAlt: {
      type: String,
      default: ' ',
    },
    mediaImgShape: {
      required: false,
      default: () => [],
    },
    mediaHeadingType: String,
    mediaTitle: String,
    mediaUrl: String,
    mediaVariant: {
      required: false,
      default: () => [],
    },
  },
  computed: {
    modClass() {
      const baseClass = 'cdr-media-object';
      let final = '';

      final += `${baseClass} `;

      this.mediaVariant.forEach((mod) => {
        final += `${baseClass}--${mod} `;
      });

      return final;
    },
    mediaFigureStyle() {
      const baseClass = 'cdr-image';
      let final = '';

      final += `${baseClass} `;

      this.mediaImgShape.forEach((mod) => {
        final += `${baseClass}--${mod} `;
      });

      return final;
    },
  },
};
</script>
