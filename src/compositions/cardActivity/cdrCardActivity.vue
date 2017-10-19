<template>
  <cdr-card modifier="activity">
    <section class="cdr-inset cdr-inset--remove-top">
      <cdr-media-object
      :lazy="lazy"
      :lazyOpts="lazyOpts"
      :img-src="media"
      :img-alt="mediaAlt"
      :img-crop="mediaCrop"
      :img-cover="mediaCover"
      :img-ratio="mediaRatio"
      img-class="cdr-card--activity__image"
      img-modifier="responsive"
      modifier="top stretch"
      img-radius="top">
        <div v-if="this.label != null" class="cdr-card--activity__label">{{label}}</div>
        <cdr-heading v-if="this.title != null" :level="titleLevel">
          <cdr-a class="cdr-card--activity__title cdr-card--activity__title--action" :href="titleUrl" :target="titleTarget" @click.native="onClick">{{title}}</cdr-a>
        </cdr-heading>
        <cdr-list v-if="snapshot" class="cdr-card--activity__snapshot" modifier="inline bulleted">
          <li v-for="item in snapshot">
            {{ item }}
          </li>
        </cdr-list>
        <div v-if="location" class="cdr-card--activity__location">
          {{location}}
        </div>
        <cdr-rating v-if="this.rating != null" class="cdr-card--activity__rating" :rating="rating" :count="count" modifier="medium"></cdr-rating>
      </cdr-media-object>
    </section>
  </cdr-card>
</template>

<style theme="default">
  @import '../../css/settings/_index.pcss';
  @import 'cdrCardActivity.pcss';
</style>

<script>
import cdrA from '@/components/anchor/cdrA';
import cdrCard from '@/components/card/cdrCard';
import cdrHeading from '@/components/heading/cdrHeading';
import cdrImg from '@/components/image/cdrImg';
import cdrMediaObject from '@/components/mediaObject/cdrMediaObject';
import cdrRating from '@/components/rating/cdrRating';
import cdrList from '@/components/list/cdrList';
import lazyImage from '@/mixins/lazyImage';

export default {
  name: 'cdr-card-activity',
  mixins: [lazyImage],
  components: {
    cdrA,
    cdrCard,
    cdrHeading,
    cdrImg,
    cdrMediaObject,
    cdrRating,
    cdrList,
  },
  extends: cdrCard,
  props: {
    /**
    * Path to primary image
    */
    media: String,
    /**
    * this is set to top when there is no attribution
    */
    mediaAlt: {
      type: String,
      default: ' ',
    },
    /**
     * Aspect ratio of the media container. {square, 1-2, 2-3, 3-4, 9-16, 2-1, 3-2, 4-3, 16-9}
     * See cdr-img
    */
    mediaRatio: String,
    /**
     * Requires `mediaRatio`.
     * Scale the image to be as large as possible to fill the area (background-position: cover;)
     * See cdr-img
     */
    mediaCover: Boolean,
    /**
     * Requires `mediaRatio`.
     * Area to crop the image overflow to.
     * {top, y-center, bottom} {left, x-center, right}
     * See cdr-img
     */
    mediaCrop: String,
    /**
    * Title text
    */
    title: String,
    /**
    * href to turn card into a link
    */
    titleUrl: {
      type: String,
      required: true,
    },
    /**
    * Title link target
    */
    titleTarget: {
      type: String,
    },
    /**
    * Heading level
    */
    titleLevel: {
      default: '2',
    },
    /**
    * Label text
    */
    label: String,
    /**
    * Location text
    */
    location: String,
    /**
    * Snapshot text
    */
    snapshot: {
      type: Array,
      required: false,
    },
    /**
    * Rating value
    */
    rating: {
      type: [String, Number],
    },
    /**
    * Number of ratings
    */
    count: {
      type: [String, Number],
    },
    /**
     * Add custom click actions to the link.
     */
    onClick: {
      type: Function,
      default: () => () => null,
    },
  },
};
</script>

