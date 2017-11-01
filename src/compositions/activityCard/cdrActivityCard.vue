<template>
  <cdr-card modifier="activity">
    <section class="cdr-inset cdr-inset--remove-top">
      <cdr-media-object
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
          <a class="cdr-card--activity__title cdr-card--activity__title--action" :href="titleUrl">{{title}}</a>
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
  @import 'cdrActivityCard.pcss';
</style>

<script>
import { CdrCard } from '@rei-co-op/cedar-card';
import { CdrHeading } from '@rei-co-op/cedar-heading';
// TODO change naming?
import { CdrImage as cdrImg } from '@rei-co-op/cedar-image';
import { CdrMediaObject } from '@rei-co-op/cedar-media-object';
import { CdrRating } from '@rei-co-op/cedar-rating';
import { CdrList } from '@rei-co-op/cedar-list';

export default {
  name: 'cdr-activity-card',
  components: {
    CdrCard,
    CdrHeading,
    cdrImg,
    CdrMediaObject,
    CdrRating,
    CdrList,
  },
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
  },
};
</script>

