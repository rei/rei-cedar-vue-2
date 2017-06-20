<template>
  <div :class="[modifierClass]">
    <cdr-img
    :alt="mediaFigureAlt"
    :src="mediaFigure"
    class="cdr-media-object__figure"
    :modifier="mediaImgShape"></cdr-img>
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
import cdrHeading from '../headings/cdrHeading';
import cdrImg from '../media/cdrImg';
import modifier from '../../mixins/modifier';

export default {
  name: 'cdr-media-object',
  mixins: [modifier],
  components: {
    cdrHeading,
    cdrImg,
  },
  props: {
    level: {
      type: String,
      default: '2',
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
    mediaFigureAlt: String,
    mediaImgShape: String,
    mediaHeadingType: String,
    mediaTitle: String,
    mediaUrl: String,
  },
  computed: {
    baseClass() {
      return 'cdr-media-object';
    },
  },
};
</script>
