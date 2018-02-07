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
        img-radius="top"
      >
        <div
          v-if="label != null"
          class="cdr-card--activity__label"
        >{{ label }}</div>
        <cdr-heading
          v-if="title != null"
          :level="titleLevel"
        >
          <a
            class="cdr-card--activity__title cdr-card--activity__title--action"
            :href="titleUrl"
          >{{ title }}</a>
        </cdr-heading>
        <cdr-list
          v-if="snapshot"
          class="cdr-card--activity__snapshot"
          modifier="inline disc compact"
        >
          <li
            v-for="(item, i) in snapshot"
            :key="i"
          >
            {{ item }}
          </li>
        </cdr-list>
        <div
          v-if="location"
          class="cdr-card--activity__location"
        >
          {{ location }}
        </div>
        <cdr-rating
          v-if="rating != null"
          class="cdr-card--activity__rating"
          :rating="rating"
          :count="count"
          modifier="medium"/>
      </cdr-media-object>
    </section>
  </cdr-card>
</template>

<script>
import { CdrCard } from '@rei/cdr-card';
import { CdrHeading } from '@rei/cdr-heading';
import { cdrImg } from '@rei/cdr-img';
import { CdrMediaObject } from '@rei/cdr-media-object';
import { CdrRating } from '@rei/cdr-rating';
import { CdrList } from '@rei/cdr-list';

export default {
  name: 'CdrActivityCard',
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
      type: [String, Number],
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

<style>
  @import '../../css/settings/_index.pcss';
  @import 'styles/vars/cdrActivityCard.vars.pcss';
  @import 'styles/cdrActivityCard.pcss';
</style>
